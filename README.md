# beauty-scroll-container
[![NPM Version](http://img.shields.io/npm/v/beauty-scroll-container.svg?style=flat-square)](https://www.npmjs.com/package/beauty-scroll-container)
[![Download Month](http://img.shields.io/npm/dm/beauty-scroll-container.svg?style=flat-square)](https://www.npmjs.com/package/beauty-scroll-container)
![gzip with dependencies: kb](https://img.shields.io/badge/gzip--with--dependencies-kb-brightgreen.svg "gzip with dependencies: kb")
![typescript](https://img.shields.io/badge/typescript-supported-blue.svg "typescript")
![pkg.module](https://img.shields.io/badge/pkg.module-supported-blue.svg "pkg.module")

> `pkg.module supported`, which means that you can apply tree-shaking in you project

[中文文档](./README-CN.md)

A react component that provider a beauty scroll container

## repository
git@github.com:livelybone/beauty-scroll-container.git

## Demo
https://github.com/livelybone/beauty-scroll-container

## Run Example
you can see the usage by run the example of the module, here is the step:

1. Clone the library `git clone git@github.com:livelybone/beauty-scroll-container.git`
2. Go to the directory `cd [the-module-directory]`
3. Install npm dependencies `npm i`(use taobao registry: `npm i --registry=http://registry.npm.taobao.org`)
4. Open service `npm run dev`
5. See the example(usually is `http://127.0.0.1:3000/examples/test.html`) in your browser

## Installation
```bash
npm i -S beauty-scroll-container
```

## Global name - The variable the module exported in `umd` bundle
`BeautyScrollContainer`

## Interface
See what method or params you can use in [index.d.ts](./index.d.ts)

## Usage
```js
import * as BeautyScrollContainer from 'beauty-scroll-container'
```

## CDN
Use in html, see what you can use in [CDN: unpkg](https://unpkg.com/beauty-scroll-container/lib/umd/)
```html
<-- use what you want -->
<script src="https://unpkg.com/beauty-scroll-container/lib/umd/<--module-->.js"></script>
```

Or，see what you can use in [CDN: jsdelivr](https://cdn.jsdelivr.net/npm/beauty-scroll-container/lib/umd/)
```html
<script src="https://cdn.jsdelivr.net/npm/beauty-scroll-container/lib/umd/<--module-->.js"></script>
```

## style
For building style, you may need to import the css or scss file:
```js
// scss
import 'beauty-scroll-container/lib/css/index.scss'

// css
import 'beauty-scroll-container/lib/css/index.css'
```
Or
```scss
// scss
@import '~beauty-scroll-container/lib/css/index.scss'

// css
@import '~beauty-scroll-container/lib/css/index.css'
```

Or, you can build your custom style by copying, editing and importing `node_modules/beauty-scroll-container/lib/css/index.scss`

## QA

1. Error `Error: spawn node-sass ENOENT`

> You may need install node-sass globally, `npm i -g node-sass`
