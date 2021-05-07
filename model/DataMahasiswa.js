const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DataMahasiswaSchema = new Schema({
    NamaMahasiswa: {
      type: String
    },
    NPM: {
      type: Number
    },
    Jurusan: {
      type: String
    },
    Agama: {
      type: String
    },
    Alamat: {
      type: String
    },
    NoHandphone: {
      type: Number
    }

})
module.exports = mongoose.model('DataMahasiswa', DataMahasiswaSchema)