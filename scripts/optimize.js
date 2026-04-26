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
      } else {
        fs.copyFileSync(inputPath, outputPath);
      }

      // 2. ALSO generate WebP version for modern browsers
      const webpPath = outputPath.substring(0, outputPath.lastIndexOf('.')) + '.webp';
      await sharp(inputPath)
        .resize(metadata.width > 1600 ? 1600 : null)
        .webp({ quality: 75 })
        .toFile(webpPath);
      
      const oldSize = fs.statSync(inputPath).size;
      const newSize = fs.statSync(outputPath).size;
      const webpSize = fs.statSync(webpPath).size;
      
      console.log(`  Done: ${(oldSize / 1024).toFixed(1)}KB -> ${(newSize / 1024).toFixed(1)}KB (${Math.round((1 - newSize / oldSize) * 100)}% saved)`);
      console.log(`  WebP version: ${(webpSize / 1024).toFixed(1)}KB (${Math.round((1 - webpSize / oldSize) * 100)}% saved)`);
    } catch (err) {
      console.error(`  Error processing ${file}:`, err);
    }
  }

  // Also handle public/logo.png if it's there
  if (fs.existsSync('public/logo.png')) {
     console.log('Optimizing logo.png in public/');
     try {
       const logoPath = 'public/logo.png';
       const tempPath = 'public/logo_temp.png';
       await sharp(logoPath).png({ quality: 80 }).toFile(tempPath);
       fs.renameSync(tempPath, logoPath);
       console.log('  Logo optimized.');
     } catch (e) {
       console.error('  Logo optimization failed:', e);
     }
  }
}

optimize();
