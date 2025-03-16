const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [16, 32, 48, 64, 128, 256, 512, 1024];
const inputSvg = path.join(__dirname, 'icon.svg');

async function generateIcons() {
  // Generate PNG files
  for (const size of sizes) {
    await sharp(inputSvg)
      .resize(size, size)
      .png()
      .toFile(path.join(__dirname, `icon-${size}.png`));
  }

  console.log('✓ Generated PNG icons');
}

generateIcons().catch(console.error); 