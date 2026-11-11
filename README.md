# Pace

[![Tests](https://github.com/andyhutch77/pace-calculator/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/andyhutch77/pace-calculator/actions/workflows/ci.yml)
[![CodeQL](https://github.com/andyhutch77/pace-calculator/actions/workflows/codeql.yml/badge.svg?branch=main)](https://github.com/andyhutch77/pace-calculator/actions/workflows/codeql.yml)
[![Dependabot version updates](https://img.shields.io/badge/Dependabot-version%20updates-025E8C?logo=dependabot)](https://github.com/andyhutch77/pace-calculator/blob/main/.github/dependabot.yml)
[![Deploy Pages](https://github.com/andyhutch77/pace-calculator/actions/workflows/pages.yml/badge.svg?branch=main)](https://github.com/andyhutch77/pace-calculator/actions/workflows/pages.yml)

A running pace calculator for a target distance and finish time. Choose a common race distance or enter a custom distance in kilometres or miles to see the required pace in both units.

Use it online at [andyhutch77.github.io/pace-calculator](https://andyhutch77.github.io/pace-calculator/).

## Run locally

Requires Node.js 18 or later. No dependencies need to be installed.

```sh
npm start
```

Open http://localhost:3000. Set the `PORT` environment variable to use a different port.

Run the calculation tests with `npm test`.

Changes pushed to `main` are tested and published to GitHub Pages by GitHub Actions.

CodeQL scans JavaScript and GitHub Actions on pushes, pull requests, and a weekly schedule. Dependabot checks npm packages and GitHub Actions weekly for version updates. There are currently no npm dependencies.
