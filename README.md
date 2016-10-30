# Chocolatin

[![Build Status](https://travis-ci.org/kMeillet/chocolatin.svg?branch=master)](https://travis-ci.org/kMeillet/chocolatin)

When you start with WebPack, you need to :

- Install a lot of package (loaders, plugins, ...).
- Make WebPack configuration with messy deep object in different environment (dev, prod, testing, ...).
- Setup external tools configuration (linter, .babelrc file, ...).

Chocolatin help developers to leverage friction & time-lost with WebPack configuration. Focus on project instead of build system.

We use more functional way to describe your app, with low object configuration.

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

# Public API

##### provide({ mixins: Array\<Object>, loaders: Array\<Object>, plugins: Array\<Function> )): WebPack Configuration

Provide take Chocolatin configuration and transform it into WebPack 2 configuration.

```sh
node ./build.js
```

##### burn({ mixins: Array\<Object>, loaders: Array\<Object>, plugins: Array\<Function> )): WebPack Compiler

Burn take Chocolatin configuration and build them with WebPack.

```sh
node ./build.js
```

##### watch({ mixins: Array\<Object>, loaders: Array\<Object>, plugins: Array\<Function> )): WebPack Watcher

Watch take Chocolatin configuration and watch files with WebPack.

```sh
node ./build.js
```

##### server({ mixins: Array\<Object>, loaders: Array\<Object>, plugins: Array\<Function> )): WebPack Dev Server

Server take Chocolatin configuration and create server on http://localhost:3000. Then, watch files.

You can use Hmr plugins to start Hot Module replacement.

```sh
node ./build.js
```

If you need better design, install "webpack-dashboard" npm package in your project and start server with :

```sh
webpack-dashboard -- node ./build.js
```

##### mixins : all mixins available.

##### loaders : all loaders available.

##### plugins : all plugins available.

# Mixins

Mixins are function with n-arity, who return an object who will be merge to WebPack base configuration.

Only one mixin is available : Io.

The Io mixin describe how your app work :

- 1st argument is a WebPack entry object. Mandatory.
- 2nd argument is a WebPack output object. Mandatory.
- 3rd argument is a string who describe WebPack compiler target : web | webworker | node | electron. Mandatory.
- 4th argument are externals package who need to stay in node_modules, like socket.io server package. Optional.

That's all. You can make your own mixin if you need to share and dispatch your own configuration.

# Loaders

Loader handle file in your project.

Basicly, it's just an object with 4 props :

- wrap : options.
- pre : preloader configuration
- loader : loader configuration.
- post : postloader configuration.

Available loaders: 

- AssetsFile : handle assets as file.
- AssetsUrl : handle assets as url (base64), or file if they're to big.
- Babel : handle ES6 with Babel (stage-2) and add linter.
- Css : handle CSS as string.
- CssExtract : handle CSS and extract in output file.
- CssInline : handle CSS and inline them in document head.
- Html : handle HTML.
- HtmlRaw : handle HTML as string.
- Js : handle JavaScript classicly and add linter.
- Json : handle JSON as file.
- Jsx : handle ES6 with Babel (stage-2), support React JSX and add linter.
- JsxFp : handle ES6 with Babel (stage-2), support React JSX and add linter with FP programing hard-rules.
- Pug : handle Jade/Pug file.
- Sass : handle SCSS as string.
- SassExtract : handle SCSS and extract in output file.
- SassInline : handle SCSS and inline them in document head.
- Stylus : handle Stylus as string.
- StylusExtract : handle Stylus and extract in output file.
- StylusInline : handle Stylus and inline them in document head.
- TypeScript : handle TypeScript and add linter.
- TypeScriptNg2 : handle TypeScript, Angular 2 template/style loader and add linter.
- Vue : handle Vue file.

Nota :

- Babel use stage-2 : you can use async/await, generator, ...
- Class decorator isn't available without TypeScript or polyfill.
- Css/Sass/Stylus loader have super-power : autoprefixer, group media-query and sort CSS properties.
- We use Xo linter for JavaScript (or Tslint with TypeScript).
- Unused code is removed with three-shaking.

# Plugins

Plugins are curried function who can be nullary or unary.

They return a function who will take WebPack configuration as argument (with mixins + loaders apply) and let you :

- Change WebPack configuration if needed.
- Return WebPack or personal plugins.

Available plugins :

- AssetsGenerator : create assets.json file with assets path.
- Browser : start browser after compilation.
- Chunk : chunk and split code.
- Clean : clean file/directory before compilation.
- Copy : copy file/directory after compilation.
- Dashboard : enable WebPack dashboard on server. You need to install "webpack-dashboard" npm package.
- Define : define environment and global METADATA.
- DevTool : enable/disable dev-tool and debug mode.
- Extract : extract style (needed if you use CssExtract/SassExtract/StylusExtract loader).
- ForkChecker: deserve TypeScript type check in other thread.
- Hmr : start Hot Module replacement.
- HtmlGenerator : copy an HTML file as "index.html" with script/style injection.
- Md5Hash : transform hash in md5.
- Minify : minify output.
- Ng2FixContext : mandatory when Angular 2 is used.
- NoError : disable error.
- ProgressBar : add progress bar in compilation.
- Provide : provide external module in global scope (useful for jQuery or external old-lib).

# Node.js "Hello world"

```sh
npm init
npm i chocolatin --save-dev
mkdir src
touch build.js src/index.js
```

```js
// src/index.js
'use strict';

console.log('Hello world');
```

```js
// build.js
'use strict';

const {
  burn,
  mixins: { Io },
  loaders: { Js },
  plugins: { Clean, Define, ProgressBar, Minify },
} = require('chocolatin');

burn({
  mixins: [
    Io({ app: ['./src/index.js'] }, { path: './dist', filename: '[name].js' }, 'node'),
  ],
  loaders: [Js],
  plugins: [
    Clean(['dist']),
    Define('production'),
    ProgressBar(),
    Minify(),
  ],
});
```

```sh
node ./build.js
```

# FAQ

### How i can add static assets in my project ?

Use Copy plugin : it take an array of object with from/to properties.

You can copy directory or files.

### How i can manage template and style with Angular 2 ?

Use templateUrl and stylesUrl in @Component with HtmlRaw, Css (or/and Sass/Stylus), TypeScriptNg2 loaders.

### How i can use ES6/ES7 features ?

Use Babel or TypeScript loader.

### How i can add a linter (EsLint or another) ?

You don't need to add linter.

We use Xo for JavaScript/Babel/Jsx/JsxFp loaders and TsLint for TypeScript/TypeScriptNg2 loaders.

### How i can override linter rules ?

- For TypeScript, just make .tslint file.
- For JavaScript, Babel or Jsx/JsxFp, you can't.

We will do later fix on loaders to make them more configurable.

### How i can override Babel rules ?

Make .babelrc file.

### How i can override TypeScript rules ?

Make tsconfig.json file.
