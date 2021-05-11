
import { Request, Response } from 'express'

import userService from '../services/users/user.service'

class UserController {
  async createUser (req: Request, res: Response): Promise<any> {
    try {
      const response = await userService.create(req.body)
      return res.status(201).json({ message: 'Create User Successfuly', data: response })
    } catch (error) {
      return res.status(400).json({ message: 'Error' })
    }
  }
}

export default new UserController()
