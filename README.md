# Chocolatin

WebPack is awesome : build JavaScript project, add super-power, import anything, anywhere.

But folks need to install a lot of package and messy configuration with object merging is a real problem for beginner who doesn't have time to learn WebPack.

Chocolatin help user to leverage friction with WebPack 2 (transition - configuration).

# How to install

You need Node.js >= 6 and NPM >= 3.

Chocolatin need webpack@2.1.0-beta.25 & webpack-dev-server@2.1.0-beta.5.

We will follow WebPack 2 road-map and update package when new version release.

With NPM :

```sh
npm i chocolatin webpack@2.1.0-beta.25 webpack-dev-server@2.1.0-beta.5 --save-dev
```

With Yarn :

```sh
yarn add chocolatin webpack@2.1.0-beta.25 webpack-dev-server@2.1.0-beta.5 --dev
```

# Demo

You can ship the "demo" directory for some example with Babel, TypeScript, Node.js, Angular 2, React, ...

We will write real documentation/contribution guide later.

# Available loaders and package needed

Loader can take options.

They are functions who need to be call and return blueprint object.

Loader need to be manually install in your project, via npm or yarn.

- Babel : babel-loader, babel-core. Then, install presets if needed.
- EsLint : eslint-loader, eslint. Then, install presets if needed.
- TypeScript : typescript, awesome-typescript-loader.
- Css : css-loader, csscomb-loader, postcss-loader.
- Sass : sass-loader, node-sass & all of "Css" is required.
- Stylus : stylus-loader, stylus & all of "Css" is required.
- Assets : url-loader.
- Json : file-loader.
- Html : raw-loader.
- StringCss : raw-loader & all of "Css" is required.
- StringSass : raw-loader & all of "Sass" is required.
- StringStylus : raw-loader & all of "Stylus" is required.
- TsLint : typescript, tslint, tslint-loader.

# Available mixins

Mixin can take options.

They are functions who need to be call and return object who will be merge with base WebPack configuration.

- Input : input options (like WebPack entries).
- Ouput : output options (like WebPack output).
- Target : target specific environment (node or web per example).
- External : add external module who don't need to be part of your build (like Socket.io).
- Watch : add watch mode.
- Server : add web server.

# Available plugins

Plugin can take options.

They are functions who need to be call and return a WebPack plugin or nothing.

- AssetsGenerator : generate assets.json file.
- Browser : start browser after build.
- Chunk : split code into multiple fragments for lazy-loading.
- Clean : clean directories before build.
- Dashboard : enabled dashboard.
- Define : define metadata (replaced at compile time).
- DevTool : set it for browser source-maps.
- ExtractCss : extract style into single file (use it in production).
- Hmr : enabled HMR when you use WebPack web-server.
- HtmlGenerator : add style/script into your index.html
- InlineCss : inline style in document when imported (use it in development).
- Minify : minify output.
- NoError : disabled error.
- ProgressBar : add progress bar when build start.
- Provide : add global module, module linking in global window (like jQuery 2.x).
- Md5Hash : replace output filename with nice md5 hash.
- Ng2ContextFix : fix Angular 2 System.js context (needed if you use Angular 2).
- TypeDoc : generate typescript documentation.

# Road-map

- Elm, Pure, CycleJS demos.
- Deserve Chocolatin loader her, people doesn't need to install loader packages.
- Real docs with options.
