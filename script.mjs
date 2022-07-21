#!/usr/bin/env zx

import "zx/globals";
const fsPromise = require("fs/promises");

console.log(chalk.gray("> Removing old wiki repository folder..."));

await $`rm -rf ../owasp-juice-shop.wiki`;

await $`mkdir ../owasp-juice-shop.wiki`;

await $`git clone "https://github.com/DuckyMomo20012/owasp-juice-shop.wiki.git" ../owasp-juice-shop.wiki`;

console.log(
  chalk.gray(`> Moving wiki markdown files to ${chalk.blue("docs")} folder...`)
);

const wikiFiles = await globby("../owasp-juice-shop.wiki/*.md");
await Promise.all(
  wikiFiles.map(async (fileName) => {
    if (!fileName.includes(".md")) return;

    // We only take base name of the file, not including the parent path
    const newFileName = path.basename(fileName).toLowerCase();

    const fileExists = await fs.pathExists(
      path.resolve(`./docs/${newFileName}`)
    );

    if (fileExists) {
      echo(`Overwrite: ${chalk.green(newFileName)}`);
    } else {
      echo(
        `Copy from wiki repo and rename: ${chalk.red.strikethrough(
          path.basename(fileName)
        )} -> ${chalk.green(newFileName)}`
      );
    }

    await fs.move(
      // Convert to absolute path to resolve errors
      path.resolve(`${fileName}`),
      path.resolve(`./docs/${newFileName}`),
      {
        overwrite: true,
      }
    );
  })
);

console.log(
  chalk.gray("> Extracting last commit information of wiki repository...")
);

// NOTE: Use `within` to avoid changing context to outside of the main repo
let lastWikiCommit = "";
await within(async () => {
  cd("../owasp-juice-shop.wiki");

  // Git log format:
  // %an: author name
  // %ae: author email
  // %s: subject
  // %n: new line
  // Read more:
  // https://linux.die.net/man/1/git-log#:~:text=previous%20%2D%2Dno%2Dwalk.-,Pretty%20Formats,-If%20the%20commit

  // NOTE: You can use your custom format for convenient. I use this for easily
  // extracting info.
  await $`git log -1 --pretty=format:"%an%n%ae%n%s" > last_commit.txt`;

  try {
    lastWikiCommit = await fsPromise.readFile(
      path.resolve("./last_commit.txt"),
      "utf8"
    );

    fs.remove(path.resolve("./last_commit.txt"));
  } catch (err) {
    console.log(err);
  }
});

if (lastWikiCommit) {
  // Extract information from data
  const [author, email, subject] = lastWikiCommit.split("\n");

  console.log(chalk.gray("> Pushing new changes to wiki repository..."));

  try {
    await $`git config user.email ${email}`;
    await $`git config user.name ${author}`;
    // Only stage markdown files. This cmd won't stage ignored files.
    await $`git add \\*.md`;
    await $`git status`;
    await $`git commit -m ${"docs: " + subject.toLowerCase()}`;
    await $`git push origin main`;
  } catch (err) {
    console.log(chalk.red("Failed to push changes to wiki repository!"));
  }
}

console.log(chalk.gray("> Removing wiki repository folder..."));

await $`rm -rf ../owasp-juice-shop.wiki`;
