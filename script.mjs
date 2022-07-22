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
    // Replace "'" to resolve error
    const newFileName = path.basename(fileName).toLowerCase().replace("'", "");

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

  await $`git config user.email ${email}`;
  await $`git config user.name ${author}`;
  try {
    console.log(
      chalk.gray("> Pushing new wiki doc changes to wiki repository...")
    );
    // Only stage markdown files. This cmd won't stage ignored files.
    await $`git add \\*.md`;
    const status = await $`git status --short`;

    // Filter out status for files that are not staged and empty string
    const stagedFiles = status.stdout
      .split("\n")
      .filter((line) => !line.includes("??") && line.length > 0);

    // NOTE: Here we can update commit message based on git status. E.g: "M" for
    // modified, "A" for added, etc. But I think it's not necessary.
    if (stagedFiles.length > 1) {
      await $`git commit -m "docs: update multiple files"`;
    } else {
      await $`git commit -m ${"docs: " + subject.toLowerCase()}`;
    }

    await $`git push origin main`;
  } catch (err) {
    console.log(
      chalk.red(
        "Failed to push new wiki doc changes to wiki repository or branch is up to date!"
      )
    );
  }

  try {
    console.log(chalk.gray("> Generating new backup file..."));
    await $`./generateBackup.mjs`;

    console.log(chalk.gray("> Pushing new backup file to repository..."));
    await $`git add \\*.json`;
    await $`git status`;
    await $`git commit -m ${"chore: update backup file"}`;
    await $`git push origin main`;
  } catch (err) {
    console.log(
      chalk.red(
        "Failed to push backup file to repository or branch is up to date!"
      )
    );
  }
}

console.log(chalk.gray("> Removing wiki repository folder..."));

await $`rm -rf ../owasp-juice-shop.wiki`;
