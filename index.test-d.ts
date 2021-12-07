import { expectType } from 'tsd'
import type { Middleware } from 'koa'
import {koaAsyncAPI} from './index.js'

expectType<Middleware>(koaAsyncAPI())
