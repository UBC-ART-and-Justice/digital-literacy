import fs from 'fs';
import path from 'path';

const GALLERY_DIR = 'docs/src/public/gallery';
const TEST = import.meta.env;
console.log('gallery_loader | TEST:', TEST);
const base = process.env.VITEPRESS_BASE || '';
console.log('gallery_loader | BASE URL:', base);

export default {
  watch: [`${GALLERY_DIR}/**/*`],
  async load() {
    const images = [];
    console.log('Gallery loader: Starting scan of', GALLERY_DIR);

    function scanDirectory(dir) {
      console.log('Scanning subdirectory:', dir);
      const items = fs.readdirSync(dir);
      items.forEach(item => {
        const fullPath = path.join(dir, item);

        if (fs.statSync(fullPath).isDirectory()) {
          scanDirectory(fullPath);
        } else if (/\.(jpg|jpeg|png|gif|webp)$/i.test(item)) {
          let normalizedPath = fullPath.replace(/\\/g, '/');
          const publicMatch = normalizedPath.match(/.*?\/public\//);
          let relativePath = publicMatch
            ? normalizedPath.slice(publicMatch[0].length - 1)
            : normalizedPath.slice(normalizedPath.indexOf('/gallery'));

          // Prepend the base URL if it's defined
          if (base) {
            relativePath = `${base}${relativePath.replace(/^\//, '')}`;
          }

          // only log first image
          if (images.length === 0) {
            console.log('First image:', relativePath);
          }

          //   console.log('Found image:', relativePath);
          images.push({
            path: relativePath,
            folder: path.dirname(relativePath).replace('/gallery/', ''),
            filename: item
          });
        }
      });
    }

    scanDirectory(GALLERY_DIR);
    console.log('Gallery loader: Found total images:', images.length);
    return images;
  }
};
