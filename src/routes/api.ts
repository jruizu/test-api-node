/* eslint-disable @typescript-eslint/no-misused-promises */
import { Request, Response, Router } from 'express'
import userController from '../controllers/user.controller'
import userModels from '../models/user.models'
class ApiRouter {
  public router: Router = Router()

  constructor () {
    this.config()
  }

  public config (): void {
    this.router.get('/users_all', async (req: Request, res: Response) => {
      const users = await userModels.find({})
      return res.status(200).json(users)
    })
    this.router.post('/user/create', userController.createUser)
  }
}
export default new ApiRouter().router
