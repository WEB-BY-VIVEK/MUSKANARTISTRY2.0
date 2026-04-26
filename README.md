# Muskan Artistry - Mehndi Artist Website

Professional portfolio for Muskan Artistry, a premium Mehndi artist in Greater Noida West.

## Deployment Structure
To make everything visible and predictable, this project uses a specific structure:

- **`/public/assets`**: Contains all images. These are served directly at `your-site.com/assets/filename.jpg`. We use these instead of hashed imports to ensure easy debugging and file visibility.
- **`/src/components`**: All UI components are modular and use static paths for performance and reliability.
- **`vercel.json`**: Configured for Single Page Application (SPA) routing on Vercel.
- **`.github/workflows/deploy.yml`**: Automated deployment to GitHub Pages on every push to the `main` branch.

## How to Deploy
1. **GitHub Pages**: Push code to `main`. The GitHub Action will automatically build and deploy to the `gh-pages` branch.
2. **Vercel**: Import this repository. It will auto-detect Vite and deploy immediately.

## Troubleshooting Images
If images ever break:
1. Ensure the image exists in `public/assets/`.
2. Check that the component uses `/assets/your-image.jpg` as the source.
3. Perform a Hard Refresh (`Ctrl + F5`) in your browser to clear cache.
