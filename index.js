const express = require('express')
const app = express()
const mongoose = require('mongoose')
 
mongoose.connect('mongodb://localhost:27017/DataMahasiswa', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Berhasil konek ke Database'))
.catch((err) => console.log('Gagal konek ke Database'))


app.use(express.json({
  extended: true,
  limit: '20mb'
}))

app.use(express.urlencoded({
  extended: true,
  limit: '20mb'
}))


app.use('/DataMahasiswa', require('./routes/DataMahasiswa'))

app.listen(3000, () => {
  console.log('server started')
})