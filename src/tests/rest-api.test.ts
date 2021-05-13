
import { Application } from 'express'
import request from 'supertest'
import server from '../app'

const app: Application = server.app

describe('GET /api/users_all', () => {
  it('respond with json containing list all users', async done => {
    await request(app)
      .get('/api/users_all')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
    done()
  })
})
// expect 200
describe('POST /api/user/ceate', () => {
  it('respond with json containing message sucess saved', async (done) => {
    await request(app)
      .post('/api/user/create')
      .send({
        name: 'Jose Ruiz',
        email: 'joseurango@gmail.com',
        password: '12345'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
    done()
  })
})
