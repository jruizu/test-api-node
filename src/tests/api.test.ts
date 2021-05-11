
import { Application } from 'express'
import request from 'supertest'
import server from '../app'

const app: Application = server.app

describe('GET /api/users_all', () => {
  it('respond with json containing list all employees', async () => {
    await request(app)
      .get('/api/users_all')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
  })
})
describe('GET /api/users_all', () => {
  it('respond with json containing list all users', async () => {
    await request(app)
      .get('/api/users_all')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
  })
})
// console.log(request)
