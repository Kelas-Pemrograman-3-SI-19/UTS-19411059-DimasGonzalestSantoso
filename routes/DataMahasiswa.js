const router = require('express').Router()
const DataMahasiswaController = require('../controller/DataMahasiswa')

router.post('/insert', (req, res) => {
  DataMahasiswaController.create(req.body)
      .then(result => res.json(result))
      .catch(err => res.json(err))
})

router.get('/getall', (req, res)=> {
  DataMahasiswaController.getAll()
    .then(result =>res.json(result))
    .catch(err => res.json(err))
})

router.get('/getbyid/:id', (req, res) => {
  DataMahasiswaController.getById(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.put('/update/:id', (req, res) => {
  DataMahasiswaController.update(req.params.id, req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.delete('/delete/:id', (req, res) => {
  DataMahasiswaController.delete(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router