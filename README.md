# Chocolatin

[![Build Status](https://travis-ci.org/kMeillet/chocolatin.svg?branch=master)](https://travis-ci.org/kMeillet/chocolatin)

When you start with WebPack, you need to :

- Install a lot of package (loaders, plugins, ...).
- Make WebPack configuration with messy object in different environment (dev, prod, testing, ...).
- Setup external tools configuration (linter, .babelrc file, ...).

Chocolatin help developers to leverage friction & time-lost with WebPack configuration.

# How to install

You need Node.js >= 6 and NPM >= 3.

Chocolatin work with WebPack 2 : we will follow WebPack road-map and update package as soon as possible before final release.

So now, install Chocolatin with NPM in your project :

```sh
npm i chocolatin --save-dev
```

Or with Yarn :

```sh
yarn add chocolatin --dev
```

# Usage

Touch a new file and import Chocolatin module.

```js
// build.js
'use strict';

const chocolatin = require('chocolatin');

chocolatin.burn({
  mixins: [/* Mixins */],
  loaders: [/* Loaders */],
  plugins: [/* Plugins */],
});
```

Then, simply run file with Node.js :

```sh
node ./build.js
```

You can ship the "demo" directory for some example in different environment with Babel, TypeScript, Node.js, Angular 2, React, Electron, ...

# API

### provide({ mixins: Array<Object>, loaders: Array<Object>, plugins: Array<Function> )): Object

### burn({ mixins: Array<Object>, loaders: Array<Object>, plugins: Array<Function> )): Object

### watch({ mixins: Array<Object>, loaders: Array<Object>, plugins: Array<Function> )): Object

### server({ mixins: Array<Object>, loaders: Array<Object>, plugins: Array<Function> )): Object
