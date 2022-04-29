# beauty-scroll-container
[![NPM Version](http://img.shields.io/npm/v/beauty-scroll-container.svg?style=flat-square)](https://www.npmjs.com/package/beauty-scroll-container)
[![Download Month](http://img.shields.io/npm/dm/beauty-scroll-container.svg?style=flat-square)](https://www.npmjs.com/package/beauty-scroll-container)
![gzip with dependencies: kb](https://img.shields.io/badge/gzip--with--dependencies-kb-brightgreen.svg "gzip with dependencies: kb")
![typescript](https://img.shields.io/badge/typescript-supported-blue.svg "typescript")
![pkg.module](https://img.shields.io/badge/pkg.module-supported-blue.svg "pkg.module")

> `pkg.module supported`, 天然支持 tree-shaking, 使用 es module 引用即可

[English Document](./README.md)

A react component that provider a beauty scroll container

## repository
git@github.com:livelybone/beauty-scroll-container.git

## Demo
https://github.com/livelybone/beauty-scroll-container

## Run Example
你可以通过运行项目的 example 来了解这个组件的使用，以下是启动步骤：

1. 克隆项目到本地 `git clone git@github.com:livelybone/beauty-scroll-container.git`
2. 进入本地克隆目录 `cd [the-module-directory]`
3. 安装项目依赖 `npm i`(使用 taobao 源: `npm i --registry=http://registry.npm.taobao.org`)
4. 启动服务 `npm run dev`
5. 在你的浏览器看 example (地址通常是 `http://127.0.0.1:3000/examples/test.html`)

## Installation
```bash
npm i -S beauty-scroll-container
```

## Global name - The variable the module exported in `umd` bundle
`BeautyScrollContainer`

## Interface
去 [index.d.ts](./index.d.ts) 查看可用方法和参数

## Usage
```js
import * as BeautyScrollContainer from 'beauty-scroll-container'
```

## CDN
在 HTML 文件中直接引用，你可以在 [CDN: unpkg](https://unpkg.com/beauty-scroll-container/lib/umd/) 看到你能用到的所有 js 脚本
```html
<-- 然后使用你需要的 -->
<script src="https://unpkg.com/beauty-scroll-container/lib/umd/<--module-->.js"></script>
```

或者，你也可以使用 [CDN: jsdelivr](https://cdn.jsdelivr.net/npm/beauty-scroll-container/lib/umd/) 看到你能用到的所有 js 脚本
```html
<script src="https://cdn.jsdelivr.net/npm/beauty-scroll-container/lib/umd/<--module-->.js"></script>
```

## style
你可能需要主动引入样式文件来应用组件的样式：
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

你也可以通过引入自定义的组件样式文件来自定义样式，文件可以通过复制并修改 `node_modules/beauty-scroll-container/lib/css/index.scss` 得到

## QA

1. Error `Error: spawn node-sass ENOENT`

> 你可能需要全局安装 node-sass，`npm i -g node-sass`
