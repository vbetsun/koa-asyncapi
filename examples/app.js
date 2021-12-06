import Koa from 'koa'
import { koaAsyncAPI } from '../index.js'

const app = new Koa()

app.use(koaAsyncAPI())

export default app
