'use strict'

const Koa = require('koa')
const { koaAsyncAPI } = require('../index.cjs')

const app = new Koa()

app.use(koaAsyncAPI())

module.exports = app
