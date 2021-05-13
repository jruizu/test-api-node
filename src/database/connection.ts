import mongoose from 'mongoose'

export default mongoose.connect('mongodb://mongo_user:secret@localhost/test_db?authSource=admin', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})
