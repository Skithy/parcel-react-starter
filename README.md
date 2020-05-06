# Parcel Typescript React Starter Kit

All-in-one opinionated parcel typescript react starter kit.

Comes with

- Parcel
- Typescript
- React
- Eslint and prettier
- Testing with Jest (with react-testing-library)
- Storybook with MDX and CSF docs
- Grommet and styled components (with normalize.css)

## Prerequisites

- [Yarn](https://yarnpkg.com/)
- [Node](https://nodejs.org/en/)
  (or using Node Version Manager [windows](https://github.com/nvm-sh/nvm) [linux](https://github.com/coreybutler/nvm-windows))

### Commands

Installing packages

```
$ yarn
```

Running in development

```
$ yarn start
```

Production build

```
$ yarn build
```

Running code analysis

```
$ yarn prettier:fix    # auto-formatter
$ yarn lint:fix        # linter
$ yarn typecheck       # runs typecheck
$ yarn prettylint:fix  # runs them all
```

Running tests

```
$ yarn test
```

Running storybook

```
yarn start:story
```

Production storybook build

```
$ yarn build:story
```
