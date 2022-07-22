#!/usr/bin/env zx

import "zx/globals";

console.log(chalk.gray("> Removing old wiki repository folder..."));

await $`rm -rf ../owasp-juice-shop.wiki`;

await $`mkdir ../owasp-juice-shop.wiki`;

await $`git clone "https://github.com/DuckyMomo20012/owasp-juice-shop.wiki.git" ../owasp-juice-shop.wiki`;

const wikiFiles = await globby("../owasp-juice-shop.wiki/*.md");

console.log(chalk.gray(`> Copying ${wikiFiles.length} files`));

// NOTE: We only append the file content
const stream = fs.createWriteStream(path.resolve("./report.md"), {
  flags: "a",
});
wikiFiles.forEach((fileName) => {
  if (!fileName.includes(".md")) return;

  const fileContent = fs.readFileSync(fileName);
  stream.write(fileContent);
  stream.write("\n\n---\n\n");
});

stream.end();
