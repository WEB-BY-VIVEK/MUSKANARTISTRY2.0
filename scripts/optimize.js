import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = 'src/assets';
const outputDir = 'public/assets';

async function optimize() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const files = fs.readdirSync(inputDir);

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);

    if (fs.lstatSync(inputPath).isDirectory()) continue;

    console.log(`Optimizing ${file}...`);

    try {
      const image = sharp(inputPath);
      const metadata = await image.metadata();

      // Resize if too large
      if (metadata.width > 1600) {
        image.resize(1600);
      }

      // 1. Save as compressed original format
      if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
        await image.jpeg({ quality: 80, mozjpeg: true }).toFile(outputPath);
      } else if (file.toLowerCase().endsWith('.png')) {
        await image.png({ quality: 80, compressionLevel: 9 }).toFile(outputPath);
      } else if (file.toLowerCase().endsWith('.webp')) {
         // If it's already webp, just copy it or re-optimize it
         await image.webp({ quality: 80 }).toFile(outputPath);
      } else {
        fs.copyFileSync(inputPath, outputPath);
      }

      // 2. ALSO generate WebP version if not already webp
      if (!file.toLowerCase().endsWith('.webp')) {
        const webpPath = outputPath.substring(0, outputPath.lastIndexOf('.')) + '.webp';
        await sharp(inputPath)
          .resize(metadata.width > 1600 ? 1600 : null)
          .webp({ quality: 75 })
          .toFile(webpPath);
        
        const webpSize = fs.statSync(webpPath).size;
        console.log(`  WebP version: ${(webpSize / 1024).toFixed(1)}KB (${Math.round((1 - webpSize / fs.statSync(inputPath).size) * 100)}% saved)`);
      }
      
      const oldSize = fs.statSync(inputPath).size;
      const newSize = fs.statSync(outputPath).size;
      
      console.log(`  Done: ${(oldSize / 1024).toFixed(1)}KB -> ${(newSize / 1024).toFixed(1)}KB (${Math.round((1 - newSize / oldSize) * 100)}% saved)`);
    } catch (err) {
      console.error(`  Error processing ${file}:`, err.message);
    }
  }
}

optimize();
