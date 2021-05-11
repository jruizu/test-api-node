import { Request, Response, Router } from 'express'

class ApiRouter {
  public router: Router = Router()

  constructor () {
    this.config()
  }

  public config (): void {
    this.router.get('/api/users_all', (req: Request, res: Response) => {
      res.status(200).json({ users: ['Jose', 'Juan'] })
    })
  }
}
export default new ApiRouter().router
