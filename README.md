# Shopping Cart

[![GitHub Workflow Status](https://github.com/Phoenix2k/shopping-cart/actions/workflows/ci.yml/badge.svg)](https://github.com/Phoenix2k/shopping-cart/actions/workflows/ci.yml) [![Vercel](https://vercelbadge.vercel.app/api/phoenix2k/shopping-cart)][demo]

Shopping cart inspired from the [Managing data](https://angular.io/start/start-data) documentation.

> This project was generated with [Angular CLI][cli] version 16.2.1.

## Goals

- [Learn Angular](https://angular.io/docs) and its tooling
- Explore [concepts](https://angular.io/guide/architecture) such as [components](https://angular.io/cli/generate#component-command), [modules](https://angular.io/cli/generate#module-command) and [services](https://angular.io/cli/generate#service-command)
- Handle [localization][i18n] and translations
- Understand [RxJS](https://rxjs.dev/)
- [Deploy][deployment] the app to a hosting service

## Demo

This codebase has been deployed to Vercel.

[See demo][demo]

## Prerequisites

- [Angular CLI][cli] (v16)
- [Node.js](https://nodejs.org/) (v18)
- [Node Version Manager](https://github.com/nvm-sh/nvm)
- [Pnpm](https://pnpm.io/)

## Recommended IDE

- [Visual Studio Code](https://code.visualstudio.com/)

The editor will present you with a list of recommended plugins to install for a better developer experience.

> See [`.vscode/extensions.json`](.vscode/extensions.json) for the full list.

## Stack

- [Angular][angular]
- [ESLint][eslint]
- [Karma][karma]
- [Lefthook][lefthook]
- [Playwright][playwright]
- [PostCSS][postcss]
- [Prettier][prettier]
- [Stylelint][stylelint]
- [Tailwind CSS][tailwind]
- [TypeScript][typescript]

## Installation

```shell
# Clone the repository
git clone https://github.com/Phoenix2k/shopping-cart.git
cd shopping-cart

# Use the Node version specified in `.nvmrc`
nvm use

# Install dependencies
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

This project comes with [ESLint][eslint] and [Stylelint][stylelint] to help you check for errors.

```shell
# Check the files for errors:
pnpm lint

# Attempt to fix issues automatically:
pnpm lint:fix
```

> Changed files will be linted automatically by [Lefthook][lefthook] when creating a new Git commit.

## Build for production

Run the following to build the project:

```shell
pnpm build
```

The build artifacts will be stored in the `dist/` directory.

## i18n

See [Angular Internationalization][i18n] for more information about translations.

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

Run E2E tests using [Playwright][playwright]

```shell
pnpm test:e2e
```

The tests are located in the [`e2e`](./e2e/) folder.

> If you want to see the results in your browser, use `pnpm test:e2e:debug`.

### Unit tests

Run unit tests using [Karma][karma]:

```shell
pnpm test:unit
```

The tests are located in the [`src`](./src/) folder.

> If you want to see the results in your browser, use `pnpm test:unit:debug`.

## Deployment

There are various ways to deploy this app to a remote server such as [Firebase](https://firebase.google.com/docs/hosting), [Netlify](https://www.netlify.com/) and [Vercel](https://vercel.com/solutions/angular).

See the [Deployment][deployment] documentation for more information.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference][cli] page.

## Special thanks

- [DummyJSON](https://dummyjson.com/) for providing the list products

## License

[![MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE.md)

[angular]: https://angular.io/
[cli]: https://angular.io/cli
[demo]: https://shopping-cart-sooty-eight.vercel.app
[deployment]: https://angular.io/guide/deployment
[eslint]: https://eslint.org/
[i18n]: https://angular.io/guide/i18n-overview
[karma]: https://karma-runner.github.io
[lefthook]: https://github.com/evilmartians/lefthook
[playwright]: https://playwright.dev/
[postcss]: https://postcss.org/
[prettier]: https://prettier.io/
[tailwind]: https://tailwindcss.com/
[stylelint]: https://stylelint.io/
[typescript]: https://www.typescriptlang.org/
