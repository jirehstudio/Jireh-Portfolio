const fs = require('fs');
const path = require('path');

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  let entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    let srcPath = path.join(src, entry.name);
    let destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  console.log('Copying static assets to standalone...');
  copyDir('.next/static', '.next/standalone/.next/static');
  console.log('Copying public assets to standalone...');
  copyDir('public', '.next/standalone/public');
  console.log('Post-build assets copied successfully!');
} catch (err) {
  console.error('Error during post-build copy:', err);
  process.exit(1);
}
