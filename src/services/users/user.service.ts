import { ICRUD } from '../../interfaces/IServices/ICrud'
import { UserInterface } from '../../interfaces/UserInterface'
import userModels from '../../models/user.models'

class UserService implements ICRUD {
  async create (params: UserInterface): Promise<any> {
    const user = await userModels.create({ ...params })
    return user
  }

  async getUserByEmail (email: String): Promise<any> {
    const user = await userModels.findOne({ email })
    return user
  }
}
export default new UserService()
