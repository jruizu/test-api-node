/* eslint-disable @typescript-eslint/no-misused-promises */
import express, { Application } from 'express'
import cors from 'cors'
import dbConnect from './database/connection'
import api from './routes/api'

class ServerApp {
  public app: Application
  constructor () {
    this.app = express()
    this.config()
    this.route()
  }

  public config (): void {
    this.app.set('port', process.env.PORT ?? 3000)
    this.app.use(cors())
    this.app.use(express.urlencoded({ extended: false }))
    this.app.use(express.json())
    // const sessionMiddleware = session({
    //   store: new RedisStore({}),
    //   secret: 'super secret word'
    // })
    // this.app.use(sessionMiddleware)
  }

  public route (): void {
    this.app.use('/api', api)
  }

  public start (): void {
    this.app.listen(this.app.get('port'), async () => {
      await dbConnect
      console.log(`Server is running in port ${this.app.get('port')}`)
    })
  }
}
const server = new ServerApp()
server.start()
export default server
