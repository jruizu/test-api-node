import mongoose, { Schema } from 'mongoose'
import { UserInterface } from '../interfaces/UserInterface'

const UserSchema: Schema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  data: { type: Date, default: Date.now }
})
export default mongoose.model<UserInterface>('User', UserSchema)
