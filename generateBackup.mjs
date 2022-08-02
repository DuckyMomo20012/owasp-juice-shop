#!/usr/bin/env zx

import "zx/globals";

import Hashids from "hashids";

// The hashids is taken from:
// https://github.com/juice-shop/juice-shop/blob/master/routes/continueCode.ts#L15
const hashids = new Hashids(
  "this is my salt",
  60,
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
);

// Challenge list taken from:
// https://github.com/juice-shop/juice-shop/blob/master/data/static/challenges.yml
const challengesFile = await fs.readFile(
  path.resolve("./data/challenges.yml"),
  "utf8"
);
const challenges = YAML.parse(challengesFile);

const docFiles = await globby("./docs/*.md");

// We will find all header 1s in all doc files, because in the submission form,
// I suggested the challenge name should be heading 1.
const regHeadingOne = /# .*/gm;
const headers = docFiles.flatMap((doc) => {
  const docContent = fs.readFileSync(doc, "utf8");

  // Find all header 1s in the document
  const headingOnes = docContent.match(regHeadingOne);
  return headingOnes;
});

// NOTE: I doesn't use "filter" because I want to return the id of the
// challenge, which is the index of element in the array.
const solvedChallenges = challenges
  .map((challenge, id) => {
    const challengeName = challenge.name;

    const filter = headers.includes(`# ${challengeName}`);

    if (filter) {
      return id + 1;
    }
  })
  .filter((id) => id); // Filter out undefined

// Find all old backup files
const oldBackupFiles = await globby("./data/owasp_juice shop*.json");

// Read LATEST old backup file to compare with new solved challenges
const oldBackupFileContent = fs.readFileSync(oldBackupFiles.at(-1), "utf8");

// Regex to match continueCode
const regContinueCode = /(?<=\"continueCode\":\s?\")\w*/gm;

// Match will return an array
const oldBackupCode = oldBackupFileContent.match(regContinueCode)[0];

// Decode old continueCode to get the id of the challenges
const oldSolvedChallenges = hashids.decode(oldBackupCode);

console.log(chalk.blue("> Solved Challenges"));

solvedChallenges.forEach((challengeId) => {
  if (!oldSolvedChallenges.includes(challengeId)) {
    // New challenge solved
    console.log(challengeId, chalk.green(challenges[challengeId - 1].name));
  } else {
    // Old challenge solved
    console.log(challengeId, challenges[challengeId - 1].name);
  }
});

console.log(
  chalk.blue(`Total challenge solved: ${chalk.green(solvedChallenges.length)}`)
);

const newBackupCode = hashids.encode(solvedChallenges);

if (oldBackupCode === newBackupCode) {
  console.log(chalk.blue("Your backup file is up to date!"));
} else {
  console.log(
    chalk.blue("Your new backup continueCode:"),
    chalk.green(newBackupCode)
  );

  console.log(chalk.gray("> Writing new backup code to file..."));

  const now = new Date().toISOString().split("T")[0];
  const newBackupFileName = `./data/owasp_juice shop-${now}.json`;

  const newBackupContent = oldBackupFileContent.replace(
    regContinueCode,
    newBackupCode
  );

  fs.writeFileSync(newBackupFileName, newBackupContent);
}
