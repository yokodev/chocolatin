# Chocolatin

WebPack is awesome : build JavaScript project, add super-power, import anything, anywhere.

But folks need to install a lot of package and messy configuration with object merging is a real problem for beginner.

Chocolatin help user to leverage friction with WebPack configuration.

It's just a wrapper around WebPack 2.

# How to install

You need Node.js >= 6 and NPM >= 3.

```sh
npm i chocolatin webpack@2.1.0-beta.25 --save-dev
```

# API

You can ship the "demo" directory for some example with Babel, TypeScript, Node.js, Angular 2, React, ...

The API is really basic : import chocolatin and burn mixins, loaders, plugins.

We will write real documentation/contribution guide later.

# Available loaders and package needed

Loader never take options, but in further we will make configurable loader with extra options.

They are plain object.

Loader need to be manually install in your project, via npm.

- Babel : babel-loader
- EsLint (can be combine with Babel) : eslint-loader
- TypeScript : typescript, awesome-typescript-loader, tslint, tslint-loader
- CSS : css-loader, postcss-loader, autoprefixer, css-mqpacker
- SASS : sass-loader, node-sass, postcss-loader, autoprefixer
- Stylus : stylus-loader, stylus, postcss-loader, autoprefixer
- Assets : url-loader.
- JSON : file-loader.

# Available mixins

Mixin can take options.

They are functions who need to be call and return object.

- Input : input options (like WebPack entries).
- Ouput : output options (like WebPack output).
- Target : target specific environment (node per example).
- External : add external module who don't need to be part of your build (like Socket.io).
- Watch : add watch mode.

# Available plugins

Plugin can take options.

They are functions who need to be call and return a WebPack plugin or nothing.

- AssetsGenerator : generate assets.json file.
- Browser : start browser after build.
- Chunk : split code into multiple fragments for lazy-loading.
- Clean : clean directories before build.
- Dashboard : enabled dashboard.
- Define : define metadata (replaced at compile time).
- DevTool : set if needed for sourcemaps.
- ExtractCSS : extract style into single file.
- HMR : enabled HMR.
- HTML : add style/script into index.html file
- InlineCSS : inline style in document when imported.
- Minify : minify code.
- NoError : disabled error.
- ProgressBar : add progress bar when build.
- Provide : add global module.
