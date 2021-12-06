import os from 'os'
import Generator from '@asyncapi/generator'

const generator = new Generator('@asyncapi/html-template', os.tmpdir(), {
  forceWrite: true,
  entrypoint: 'index.html',
  output: 'string',
  templateParams: {
    singleFile: true
  }
})
let doc

export const koaAsyncAPI = ({
  filePath = 'asyncapi.yaml',
  endpoint = '/asyncapi'
} = {}) => {
  const endpointRegexp = new RegExp(`${endpoint}[/]*$`, 'i')
  return async (ctx, next) => {
    if (!doc) doc = await generator.generateFromFile(filePath)

    if (endpointRegexp.test(ctx.path)) ctx.body = doc

    await next()
  }
}

export default koaAsyncAPI
