#!/usr/bin/env zx

import "zx/globals";

console.log("Removing old wiki repository folder...");

await $`rm -rf ../owasp-juice-shop.wiki`;

await $`mkdir ../owasp-juice-shop.wiki`;

await $`git clone "https://github.com/DuckyMomo20012/owasp-juice-shop.wiki.git" ../owasp-juice-shop.wiki`;

console.log(`Moving wiki markdown files to ${chalk.blue("docs")} folder...`);

const wikiFiles = await globby("../owasp-juice-shop.wiki/*.md");
await Promise.all(
  wikiFiles.map(async (fileName) => {
    if (!fileName.includes(".md")) return;

    // We only take base name of the file, not including the parent path
    const newFileName = path.basename(fileName).toLowerCase();

    await fs.move(
      // Convert to absolute path to resolve errors
      path.resolve(`${fileName}`),
      path.resolve(`./docs/${newFileName}`),
      {
        overwrite: true,
      }
    );

    if (newFileName !== fileName) {
      echo(
        `Copied and renamed: ${chalk.red.strikethrough(
          fileName
        )} -> ${chalk.green(newFileName)}`
      );
    }
  })
);

console.log("Removing wiki repository folder...");

await $`rm -rf ../owasp-juice-shop.wiki`;
