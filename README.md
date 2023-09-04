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


## Testing

### End-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Unit tests

Run unit tests using [Karma](https://karma-runner.github.io):

```shell
pnpm test
```

If you want to see the results in your browser, use `pnpm test:local`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
