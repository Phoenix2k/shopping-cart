# Shopping Cart

[![GitHub Workflow Status](https://github.com/Phoenix2k/shopping-cart/actions/workflows/ci.yml/badge.svg)](https://github.com/Phoenix2k/shopping-cart/actions/workflows/ci.yml)

Shopping cart inspired from the [Managing data](https://angular.io/start/start-data) documentation.

> This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.

## Goals

- Learn Angular and its tooling
- Create [components](https://angular.io/cli/generate#component-command), [modules](https://angular.io/cli/generate#module-command) and [services](https://angular.io/cli/generate#service-command)
- Understand [RxJS](https://rxjs.dev/)

## Prerequisites

- [Angular CLI](https://angular.io/cli)
- [Node.js](https://nodejs.org/)
- [Node Version Manager](https://github.com/nvm-sh/nvm)
- [Pnpm](https://pnpm.io/)

## Installation

```shell
# Clone the repository
git clone https://github.com/Phoenix2k/shopping-cart.git
cd shopping-cart

# Use the Node version specified in `.nvmrc`
nvm use

# Install the project dependencies
pnpm install
```

## Development

Start the dev server:

```shell
pnpm dev
```

Navigate to [`http://localhost:4200/`](http://localhost:4200/) to see the app.

> The application will automatically reload if you change any of the source files.

### Code scaffolding

Generate a new component:

```shell
ng generate component component-name
```

You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Linting

This project comes with [ESLint](https://eslint.org/) and [Stylelint](https://stylelint.io/) to help you check for errors.

```shell
# Check the files for errors:
pnpm lint

# Attempt to fix issues automatically:
pnpm lint:fix
```

> Changed files will be linted automatically by [Lefthook](https://github.com/evilmartians/lefthook) when creating a new Git commit.

## Build

Run the following to build the project:

```shell
pnpm build
```

The build artifacts will be stored in the `dist/` directory.

## i18n

See [Angular Internationalization](https://angular.io/guide/i18n-overview) for more information about translations.

### Extract the source language file

Extract all strings marked for translation to the default [`messages.json`](./src/locales/messages.json) file:

```shell
pnpm extract:i18n
```

> Translations are located in the [`src/locales`](./src/locales) folder.

### Supported locales

- English (`en-US`), default locale
- Finnish (`fi-FI`)

### Build for a specific locale

```shell
pnpm build --configuration=fi-FI
```

### Preview a specific locale

```shell
pnpm dev --configuration=fi-FI
```

## Testing

This project contains E2E and unit tests.

### End-to-end tests

Run E2E tests using [Playwright](https://playwright.dev/):

```shell
pnpm test:e2e
```

The tests are located in the [`e2e`](./e2e/) folder.

> If you want to see the results in your browser, use `pnpm test:e2e:debug`.

### Unit tests

Run unit tests using [Karma](https://karma-runner.github.io):

```shell
pnpm test:unit
```

The tests are located in the [`src`](./src/) folder.

> If you want to see the results in your browser, use `pnpm test:unit:debug`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
