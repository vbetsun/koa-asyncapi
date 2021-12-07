import { describe, it } from '@jest/globals'
import request from 'supertest'
import esmApp from './examples/app.js'

describe('koa-asyncapi', () => {
  it('should return index file', async () => {
    await request(esmApp.callback())
      .get('/asyncapi')
      .expect('Content-Type', /html/)
      .expect(200)
  })

  it('should return 404 when requested wrong url', async () => {
    await request(esmApp.callback())
      .get('/wrong-url')
      .expect('Content-Type', /text/)
      .expect(404)
  })
})
