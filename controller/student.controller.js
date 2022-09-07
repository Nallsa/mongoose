const Student = require('../models/Student.model')
module.exports.studentController = {
  getStudent: (req, res) => {
    res.find()
  },
  postStudent: (req, res) => {
    Student.create({
      name: req.body.name,
      phone: req.body.phone,
      age: req.body.age,
    }).then(() => {
      res.json('Студент добавлен')
    })
  },
  deleteStudent: (req, res) => {
    Student.findByIdAndRemove(req.params.id)
  },
  patchStudent: (req, res) => {},
}
