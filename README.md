# Playwright TypeScript Automation Framework

This project is a QA automation framework built with Playwright and TypeScript for the SauceDemo application. It is structured to be easy to understand, interview-friendly, and maintainable for real-world automation work.

## Purpose

The project demonstrates a clean automation architecture for web UI testing with the following goals:

- stable browser automation
- maintainable page object model
- reusable fixtures
- TypeScript-based test authoring
- professional reporting and CI support

## Tech stack

- Playwright
- TypeScript
- Node.js
- HTML reporting
- Jenkins pipeline support

## Framework architecture

The project uses a simple but practical structure:

- `pages/` contains page objects for app pages and reusable UI actions
- `fixtures/` contains Playwright fixtures for shared setup
- `test-data/` stores environment-driven test data objects
- `tests/automation/` contains the real project test suite
- `tests/legacy/` stores archived learning/demo scripts separately from the active framework

## Project structure

```text
.
├── pages/
│   ├── BasePage.ts
│   ├── LoginPage.ts
│   └── InventoryPage.ts
├── fixtures/
│   └── index.ts
├── test-data/
│   └── users.ts
├── tests/
│   ├── automation/
│   │   └── saucedemo.spec.ts
│   └── legacy/
│       └── archived learning scripts remain here for reference
├── playwright.config.ts
├── tsconfig.json
├── package.json
├── README.md
├── Jenkinsfile
└── .gitignore
```

## Installation

```bash
npm install
npx playwright install
```

## Running tests

Run the main suite:

```bash
npx playwright test
```

Run a single file:

```bash
npx playwright test tests/automation/saucedemo.spec.ts
```

Run in headed mode:

```bash
npx playwright test --headed
```

Run a specific browser project:

```bash
npx playwright test --project=chromium
```

## Report generation

Open the HTML report:

```bash
npx playwright show-report
```

The project is configured to retain screenshots, traces, and videos on failure.

## Page Object Model

The framework separates test logic from page interaction. For example:

- `LoginPage` handles login form actions and login validation
- `InventoryPage` handles product-list validation and visibility checks
- `BasePage` contains shared navigation behavior

This keeps tests readable and reduces locator duplication.

## Fixtures

The custom Playwright fixtures provide ready-to-use page objects to each test:

- `loginPage`
- `inventoryPage`

This keeps test setup simple and encourages reuse.

## Test data handling

The project stores reusable test-user configuration in `test-data/users.ts`.

Values are driven by environment variables when available and fall back to known public demo credentials for the SauceDemo app.

## CI/CD with Jenkins

A basic Jenkins pipeline is included in `Jenkinsfile`.

It installs dependencies, installs browsers, runs the Playwright suite, and publishes the HTML report.

## Why this design is interview-friendly

- TypeScript gives better safety and maintainability
- POM reduces duplicate selectors and page logic
- Fixtures simplify setup and reuse
- `playwright.config.ts` centralizes run settings and reporting
- CI config is simple and production-friendly
- The test suite focuses on real user workflows instead of raw locator exercises

## Notes

Legacy demo scripts are archived under `tests/legacy/` for learning/reference, while the active automation framework remains under `tests/automation/` so the main suite stays professional and focused.
