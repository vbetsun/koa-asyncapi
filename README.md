
# Koa AsyncAPI

[AsyncAPI](https://www.asyncapi.com/) middleware for [koa](https://koajs.com/)

## Install

```sh
npm install koa-asyncapi
```

## Usage

```javascript
import Koa from 'koa'
import { koaAsyncAPI } from 'koa-asyncapi'

const app = new Koa()

app.use(koaAsyncAPI());

app.listen(3000);
```
### Middleware options


| Option   | Type     | Default Value  | Description                                     |
| -------- | -------- | ---------------------------------------------------------------- |
| filePath | string?  | 'asyncapi.yaml'| path to the AsyncAPI specification              |
| endpoint | string?  | '/asyncapi'    | endpoint where documentation will be available  |
