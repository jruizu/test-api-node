
import { NextFunction, Request, Response } from 'express'

// import debug from 'debug'
import userService from '../services/users/user.service'

// const log: debug.IDebugger = debug('app:users-controller')

class UsersMiddleware {
  async requiredFields (req: Request, res: Response, next: NextFunction): Promise<void> {
    if (req.body && req.body.email && req.body.password) {
      next()
    } else {
      res.status(400).send({
        error: 'Missing required fields email and password'
      })
    }
  }

  async validateSameEmailDoesntExist (req: Request, res: Response, next: NextFunction): Promise<void> {
    const user = await userService.getUserByEmail(req.body.email)
    if (user) {
      res.status(400).send({ error: 'User email already exists' })
    } else {
      next()
    }
  }
}

export default new UsersMiddleware()
