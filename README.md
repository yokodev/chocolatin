# Chocolatin

WebPack is awesome : build JavaScript project, add super-power, import anything, anywhere.

But folks need to install a lot of package and messy configuration with object merging in different environment is a real problem for beginner who doesn't have time to learn WebPack.

Chocolatin help user to leverage friction with WebPack 2 configuration.

# How to install

You need Node.js >= 6 and NPM >= 3.

Chocolatin need :

- webpack@2.1.0-beta.25
- webpack-dev-server@2.1.0-beta.5

We will follow WebPack 2 road-map and update package as soon as possible.

So, install with NPM :

```sh
npm i chocolatin webpack@2.1.0-beta.25 webpack-dev-server@2.1.0-beta.5 --save-dev
```

Or with Yarn :

```sh
yarn add chocolatin webpack@2.1.0-beta.25 webpack-dev-server@2.1.0-beta.5 --dev
```

# Usage

We will write real documentation/contribution guide later.

Basicly, you need to touch a new file and import Chocolatin module and export your configuration.

```js
// build.js
'use strict';

const chocolatin = require('chocolatin');

module.exports = chocolatin.burn(
  [/* Mixins */], [/* Loaders */], [/* Plugins */]
);
```

Then, simply run WebPack :

```sh
./node_modules/webpack/bin/webpack --config build.js
```

# API

Chocolatin is an object with :

- "burn" function, who take 3 parameters : array of mixins, loaders, plugins, and return WebPack 2 configuration.
- "mixins" barrel object, with all available mixins.
- "loaders" barrel object, with all available loaders.
- "plugins" barrel object, with all available loaders.

So, try to use destructuring :

```js
// build.js
'use strict';

const {
  burn,
  mixins: { Input, Output, Target },
  loaders: { EsLint },
  plugins: { Clean, Define, ProgressBar, Minify },
} = require('chocolatin');

// Mixins, Loaders and Plugins
module.exports = burn(
  [
    Input({ index: ['./src/index.js'] }),
    Output('./dist/'),
    Target('node'),
  ],
  [
    EsLint(),
  ],
  [
    Clean(['./dist/']),
    Define('production'),
    ProgressBar(),
    Minify(),
  ]
);
```

You can ship the "demo" directory for some example in different environment with Babel, TypeScript, Node.js, Angular 2, React, ...

# Web Server

If you need a web server, just start it via webpack-dev-server and add Server mixin + Hmr plugin, that's all.

# Watch mode

You need Watch mixin.

# Loaders

They are functions who need to be call and return blueprint object.

Loader can take options.

At the moment, loader need to be manually install in your project, via npm or yarn.

- Babel : babel-loader, babel-core. Then, install presets if needed and make .babelrc file.
- EsLint : eslint-loader, eslint. Then, install presets if needed and make .eslintrc file.
- TypeScript : typescript, awesome-typescript-loader. Then, make tsconfig.json file.
- TsLint : typescript, tslint, tslint-loader. Then, make tslint.json file.
- Css : css-loader, csscomb-loader, postcss-loader.
- Sass : sass-loader, node-sass & all of "Css" is required.
- Stylus : stylus-loader, stylus & all of "Css" is required.
- Assets : url-loader.
- Json : file-loader.
- Html : raw-loader.
- Pug (new Jade) : pug-html-loader.

# Available mixins

They are functions who need to be call and return object who will be merge with base WebPack base configuration.

Mixin can take options.

- Input : input options (like WebPack entries).
- Output : output options (like WebPack output).
- Target : target specific environment (node or web per example).
- External : add external module who don't need to be part of your build (like Socket.io).
- Watch : add watch mode.
- Server : add web server.

# Available plugins

They are functions who need to be call and return a WebPack plugin or nothing.

Plugin can take options.

- AssetsGenerator : generate assets.json file.
- Browser : start browser after build.
- Chunk : split code into multiple fragments.
- Clean : clean directories before build.
- Dashboard : enabled dashboard.
- Define : define metadata (replaced at compile time).
- DevTool : set it for browser source-maps (true or false).
- Hmr : enabled HMR when you use webPack-dev-server.
- HtmlGenerator : add style/script into your index.html file.
- Minify : minify output.
- NoError : disabled error.
- ProgressBar : add progress bar when build start.
- Provide : add global external module (like jQuery 2.x).
- Md5Hash : replace output filename with nice md5 hash.
- Ng2FixContext : fix Angular 2 System.js context (needed if you use Angular 2).
- TypeDoc : generate typescript documentation.
- ExtractCss : enable extraction for stylesheet.

# Road-map before v1

- Elm, Pure, CycleJS demos.
- Deserve WebPack loader in this project.
- Real docs with all options and GitHub web-site.
- More and more loaders/plugins/mixins.
- Isomorphic code demo.
- Combiner for loader merging (like Babel + EsLint).
