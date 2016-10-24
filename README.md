# Chocolatine

WebPack, Gulp, Grunt, are tools to build JavaScript project and add super-power.

But folks need to install a lot of package and messy configuration with object is a real problem.

Now, Chocolatine is her :

- Abstraction for WebPack 2 without package-hell.
- Easy to configure, no crappy object.
- Easy to integrate with npm scripts and CI system.
- Expendable.

# How to install ?

You need Node.js >= 6 and NPM >= 3.

- Install Chocolatine in your project :

```sh
npm i chocolatine --save-dev
```

Now, you can use it.

# Build : make your project for production

- Make a new file (config.js) in your project.

```js
// config.js
const chocolatine = require('chocolatine');

chocolatine.burn(
  
);
```

Now, simply run :

```sh
node config.js
```

Chocolatine ship source and apply loaders, plugins and mixins.

Then, "dist" folder is created with production build.

# Watch : refresh file when saved

```sh
node config.js -w
```

# Server : make a web-server

```sh
node config.js -p 3000
```

# HMR : make a web-server with Hot Module Replacement

```sh
node config.js -hmr 3000
```
