
# Koa AsyncAPI

![CI](https://github.com/VBetsun/koa-asyncapi/workflows/CI/badge.svg)
[![Known Vulnerabilities](https://snyk.io/test/github/VBetsun/koa-asyncapi/badge.svg)](https://snyk.io/test/github/VBetsun/koa-asyncapi)
[![Coverage Status](https://coveralls.io/repos/github/VBetsun/koa-asyncapi/badge.svg?branch=master)](https://coveralls.io/github/VBetsun/koa-asyncapi?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/) 

[AsyncAPI](https://www.asyncapi.com/) middleware for [koa](https://koajs.com/)

## Install

```sh
npm i @asyncapi/generator @asyncapi/html-template koa-asyncapi
```

## Usage

```javascript
import Koa from 'koa'
import { koaAsyncAPI } from 'koa-asyncapi'

const app = new Koa()

app.use(koaAsyncAPI())

app.listen(3000)
```
### Middleware options


| Option   | Type     | Default Value  | Description                                     |
| -------- | -------- | ---------------|------------------------------------------------ |
| filePath | string?  | 'asyncapi.yaml'| path to the AsyncAPI specification              |
| endpoint | string?  | '/asyncapi'    | endpoint where documentation will be available  |
