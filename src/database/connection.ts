import mongoose from 'mongoose'

export default mongoose.connect('mongodb://localhost/test_bdb', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})
