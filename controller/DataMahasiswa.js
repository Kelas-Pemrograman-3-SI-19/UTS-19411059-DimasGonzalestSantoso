const DataMahasiswaModel = require('../model/DataMahasiswa')
const objectId = require('mongoose').Types.ObjectId

exports.create = (data) =>
    new Promise((resolve, reject) => {
      DataMahasiswaModel.create(data)
            .then(() => {
                resolve({
                    status: true,
                    pesan: 'Berhasil Input Kegiatan'
                })
            }).catch(() => reject({
                status: false,
                pesan: 'Gagal Input Kegiatan'
            }))
    })

exports.getAll = () =>
new Promise((resolve, reject) => {
  DataMahasiswaModel.find()
        .then(result => {
            resolve({
                status: true,
                pesan: 'Berhasil Menampilkan Semua Data',
                result: result
            })
        }).catch(() => reject({
            status: true,
            pesan: 'Gagal Mendapatkan Semua Data',
            result: []
        }))
})

exports.getById = (id) =>
new Promise((resolve, reject) => {
  DataMahasiswaModel.findOne({
        _id: objectId(id)
    }).then(result => resolve({
        status: true,
        pesan: 'Berhasil Mendapatkan Data',
        result: result
    })).catch(() => reject({
        status: false,
        pesan: 'Gagal Mendapatkan Data',
        result: null
    }))
})

exports.update = (id, data) =>
        new Promise((resolve, reject) => {
          DataMahasiswaModel.updateOne({
                _id: objectId(id)
            }, data).then(() => resolve({
                status: true,
                pesan: 'Berhasil Megubah Data'
            })).catch(() => reject({
                status: false,
                pesan: 'Gagal Mengubah Data'
            }))
        })

exports.delete = (id) =>
        new Promise((resolve, reject) => {
          DataMahasiswaModel.deleteOne({
                _id: objectId(id)
            }).then(() => resolve({
                status: true,
                pesan: 'Berhasil Menghapus Data'
            })).catch(() => reject({
                status: false,
                pesan: 'Gagal Menghapus Data'
            }))
        })