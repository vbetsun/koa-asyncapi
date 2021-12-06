import type { Middleware } from 'koa'

export interface DefaultOptions {
    filePath?: string;
    endpoint?: string;
}

export function koaAsyncAPI(options?: DefaultOptions): Middleware
export default koaAsyncAPI;
