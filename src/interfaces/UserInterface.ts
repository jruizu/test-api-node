import { Document } from 'mongoose'
export interface UserInterface extends Document {
  name: String
  email: String
  password: String
  data: String
}
