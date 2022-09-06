const Student = require('../models/Student.model')
module.exports.studentController = {
  getStudent: (req, res) => {},
  postStudent: (req, res) => {
    Student.create({
      name: req.body.name,
      phone: req.body.phone,
      age: req.body.age,
    }).then(() => {
      res.json('Студент добавлен')
    })
  },
  deleteStudent: (req, res) => {},
  patchStudent: (req, res) => {},
}
