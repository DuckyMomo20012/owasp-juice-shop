<div align="center">

  <img src="https://user-images.githubusercontent.com/64480713/182290673-4e617886-f8e0-4f89-8519-58d553a17f8c.svg" alt="logo" width="200" height="auto" />
  <h1>OWASP Juice Shop</h1>

  <p>
    OWASP Juice Shop Solutions Report
  </p>

<!-- Badges -->
<p>
  <a href="https://github.com/DuckyMomo20012/owasp-juice-shop/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/DuckyMomo20012/owasp-juice-shop" alt="contributors" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/DuckyMomo20012/owasp-juice-shop" alt="last update" />
  </a>
  <a href="https://github.com/DuckyMomo20012/owasp-juice-shop/network/members">
    <img src="https://img.shields.io/github/forks/DuckyMomo20012/owasp-juice-shop" alt="forks" />
  </a>
  <a href="https://github.com/DuckyMomo20012/owasp-juice-shop/stargazers">
    <img src="https://img.shields.io/github/stars/DuckyMomo20012/owasp-juice-shop" alt="stars" />
  </a>
  <a href="https://github.com/DuckyMomo20012/owasp-juice-shop/issues/">
    <img src="https://img.shields.io/github/issues/DuckyMomo20012/owasp-juice-shop" alt="open issues" />
  </a>
  <a href="https://github.com/DuckyMomo20012/owasp-juice-shop/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/DuckyMomo20012/owasp-juice-shop.svg" alt="license" />
  </a>
</p>

<h4>
    <a href="https://github.com/DuckyMomo20012/owasp-juice-shop/">View Demo</a>
  <span> · </span>
    <a href="https://github.com/DuckyMomo20012/owasp-juice-shop">Documentation</a>
  <span> · </span>
    <a href="https://github.com/DuckyMomo20012/owasp-juice-shop/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/DuckyMomo20012/owasp-juice-shop/issues/">Request Feature</a>
  </h4>
</div>

<br />

<!-- Table of Contents -->

# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  - [Description](#thought_balloon-description)
- [Getting Started](#toolbox-getting-started)
  - [Prerequisites](#bangbang-prerequisites)
  - [Run Locally](#running-run-locally)
  - [Deployment](#triangular_flag_on_post-deployment)
- [Usage](#eyes-usage)
  - [Restore Progress](#inbox_tray-restore-progress)
  - [Running Scripts](#shell-running-scripts)
- [Contributing](#wave-contributing)
  - [Code of Conduct](#scroll-code-of-conduct)
- [FAQ](#grey_question-faq)
- [License](#warning-license)
- [Contact](#handshake-contact)
- [Acknowledgements](#gem-acknowledgements)

<!-- About the Project -->

## :star2: About the Project

<!-- Description -->

### :thought_balloon: Description:

This project just provides solutions with little explanation. For detail
explanation, please go to this page:

- https://github.com/juice-shop/juice-shop/blob/master/SOLUTIONS.md

This project secondly focuses on using **`CircleCI`**, **`Github Actions`** and
**`zx`** tool to automate the updating process.

<!-- Getting Started -->

## :toolbox: Getting Started

<!-- Prerequisites -->

### :bangbang: Prerequisites

- This project uses [pnpm](https://pnpm.io/) as package manager:

  ```bash
  npm install --global pnpm
  ```

- To run the script, you need to install [zx](https://github.com/google/zx)
  tool:

  **Requirement**: Node version >= 16.0.0

  ```bash
  npm install --global zx
  ```

- [Docker](https://www.docker.com/) installed locally:

  ```bash
  #!/usr/bin/env bash

  # Uninstall old versions
  sudo apt-get remove docker docker-engine docker.io containerd runc

  # Set up the repository

  # Update the apt package index and install packages to allow apt to use a
  # repository over HTTPS
  sudo apt-get update

  sudo apt-get install \
      ca-certificates \
      curl \
      gnupg \
      lsb-release

  # Add Docker’s official GPG key
  sudo mkdir -m 0755 -p /etc/apt/keyrings
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

  # Use the following command to set up the repository
  echo \
      "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
      $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

  # Install Docker Engine

  # Update the apt package index
  sudo apt-get update

  # Install Docker Engine, containerd, and Docker Compose.
  sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

  # Post installation steps

  # Add your user to the docker group
  sudo usermod -aG docker $USER
  ```

- [Burp Suite Community](https://portswigger.net/burp/communitydownload)
  installed locally.

<!-- Run Locally -->

### :running: Run Locally

- **OWASP Juice Shop**:

  Pull the image from Docker Hub:

  ```bash
  docker pull bkimminich/juice-shop
  ```

  Run the web server:

  ```bash
  docker run --rm -p 3000:3000 --name juice-shop bkimminich/juice-shop
  ```

  Browse to http://localhost:3000

- **Document page**:

  Clone the project:

  ```bash
  git clone https://github.com/DuckyMomo20012/owasp-juice-shop.git
  ```

  Go to the project directory:

  ```bash
  cd owasp-juice-shop
  ```

  Install dependencies:

  ```bash
  pnpm i
  ```

  Start the server:

  ```bash
  pnpm start
  ```

<!-- Deployment -->

### :triangular_flag_on_post: Deployment

To deploy this project run:

```bash
pnpm deploy
```

<!-- Usage -->

## :eyes: Usage

### :inbox_tray: Restore Progress

Go to your Juice Shop's scoreboard and restore latest backup file from `data`
folder.

### :shell: Running Scripts

Most of the time, you don't have to run these scripts manually. Every time you
add a Wiki page, the project will automatically run the Github Actions and
CircleCI to update the documents.

> **Note**: These scripts only run on `Linux` and `MacOS`. `Windows` is not
> supported.

- `generateBackup.mjs`:

  - This script will generate a backup file and store it in `data` folder.
  - This file will contain all the data to restore the hacking progress in Juice
    Shop's scoreboard.

- `script.mjs`:

  - This script will fetch all the documents from the project's
    [Wiki](https://github.com/DuckyMomo20012/owasp-juice-shop/wiki) page, copy
    those to folder `docs` and run file `generateBackup.mjs` to generate a
    backup file.
  - Finally, it will push a new commit to the repository.

- `generateReport.mjs`:

  - This script will copy all the documents from folder `docs` to the middle of
    file `report.md`.
  - Documents will be copied to between this tag and **prepend** before the
    `GENERATE-DOC:END` tag:

    ```
    <!-- GENERATE-DOC:START -->
    Your content goes here
    <!-- GENERATE-DOC:END -->
    ```

    > **Note**: The generation maybe slow and take some time, or even fail due
    > to large amount of data.

<!-- Contributing -->

## :wave: Contributing

<a href="https://github.com/DuckyMomo20012/owasp-juice-shop/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=DuckyMomo20012/owasp-juice-shop" />
</a>

Contributions are always welcome!

See `CONTRIBUTING.md` for ways to get started.

<!-- Code of Conduct -->

### :scroll: Code of Conduct

Please read the
[Code of Conduct](https://github.com/DuckyMomo20012/owasp-juice-shop/blob/main/CODE_OF_CONDUCT.md).

<!-- FAQ -->

## :grey_question: FAQ

- Is this project still maintained?

  - No, but we will update new solutions when we have time :sweat_smile:.

- My solution is not updated on the project's documentation web page:

  - Docusaurus can't parse your content. Please check it by running the doc
    locally.
  - Consider to **put the HTML code in code block** to prevent this problem.
  - Your solution page on Wiki page should follow submission form from
    [CONTRIBUTING.md](CONTRIBUTING.md).

<!-- License -->

## :warning: License

Distributed under the Unlicense. See
[LICENSE](https://github.com/DuckyMomo20012/owasp-juice-shop/blob/main/LICENSE)
for more information.

<!-- Contact -->

## :handshake: Contact

Duong Vinh - [@duckymomo20012](https://twitter.com/duckymomo20012) -
tienvinh.duong4@gmail.com

Project Link:
[https://github.com/DuckyMomo20012/owasp-juice-shop](https://github.com/DuckyMomo20012/owasp-juice-shop).

<!-- Acknowledgments -->

## :gem: Acknowledgements

Here are useful resources and libraries that we have used in our projects:

- [Docusaurus](https://docusaurus.io/): Build optimized websites quickly, focus
  on your content.
- [zx](https://github.com/google/zx): A tool for writing better scripts.
- [Awesome Readme Template](https://github.com/Louis3797/awesome-readme-template):
  A detailed template to bootstrap your README file quickly.

```

```
