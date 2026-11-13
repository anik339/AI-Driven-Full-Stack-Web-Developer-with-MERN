// Build every Tailwind practice lab in this folder.
// Each lab has its own source CSS and generated output CSS.
'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const practiceRoot = path.resolve(__dirname, '..');
const labFolders = fs.readdirSync(practiceRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && /^\d{2}_/.test(entry.name))
  .map((entry) => entry.name)
  .sort();

let failed = 0;

for (const labName of labFolders) {
  const srcDirectory = path.join(practiceRoot, labName, 'src');
  if (!fs.existsSync(srcDirectory)) continue;

  const sourceFiles = fs.readdirSync(srcDirectory)
    .filter((file) => file.endsWith('.css') && !file.toLowerCase().includes('output'));

  for (const sourceFile of sourceFiles) {
    const sourcePath = path.join(srcDirectory, sourceFile);
    const baseName = path.basename(sourceFile, '.css');
    const outputName = baseName === 'input' ? 'output.css' : `${baseName}-output.css`;
    const outputPath = path.join(srcDirectory, outputName);

    console.log(`\nBuilding ${labName}/${sourceFile} → ${outputName}`);
    const command = process.platform === 'win32' ? 'npx.cmd' : 'npx';
    const result = spawnSync(
      command,
      ['@tailwindcss/cli', '-i', sourcePath, '-o', outputPath, '--minify'],
      {
        cwd: practiceRoot,
        stdio: 'inherit',
        shell: process.platform === 'win32'
      }
    );

    if (result.error || result.status !== 0) {
      failed += 1;
      console.error(`Build failed: ${labName}/${sourceFile}`);
    }
  }
}

if (failed > 0) {
  console.error(`\n${failed} Tailwind build(s) failed.`);
  process.exitCode = 1;
} else {
  console.log(`\nAll ${labFolders.length} Tailwind practice folders built successfully.`);
}
