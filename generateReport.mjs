#!/usr/bin/env zx

import "zx/globals";

console.log(chalk.gray("> Removing old wiki repository folder..."));

await $`rm -rf ../owasp-juice-shop.wiki`;

await $`mkdir ../owasp-juice-shop.wiki`;

await $`git clone "https://github.com/DuckyMomo20012/owasp-juice-shop.wiki.git" ../owasp-juice-shop.wiki`;

const wikiFiles = await globby("../owasp-juice-shop.wiki/*.md");

console.log(
  chalk.gray(
    `> Copying ${wikiFiles.length} files to ${chalk.green("final-report.md")}`
  )
);

// NOTE: This is a inefficient way to insert multiple lines in the middle of a
// file. Consider to use a library like `insert-lines` to do this. We still
// search for "GENERATE-DOC:END", but the library may improve the performance.
const reportContent = await fs.readFile("./report.md", "utf8");
const reportContentLines = reportContent.split("\n");

const docEndIdx = reportContentLines.findIndex((lines) =>
  lines.includes("<!-- GENERATE-DOC:END -->")
);

wikiFiles.forEach((fileName, fileCount) => {
  if (!fileName.includes(".md")) return;

  const fileContent = fs.readFileSync(fileName, "utf8");

  const newFileContent = fileContent.replace(/^#/gm, "###") + "\n\n---\n\n";

  // When we prepend content before "GENERATE-DOC:END", the index of the line is
  // increase by one.
  reportContentLines.splice(docEndIdx + fileCount, 0, newFileContent);
});

await fs.writeFile("./final-report.md", reportContentLines.join("\n"));
