const Student = require('../models/Student.model')
module.exports.studentController = {
  getStudent: (req, res) => {},
  postStudent: (req, res) => {
    Student.create({
      name: 'имя студента',
      phone: 'номер телефона',
      age: 19,
    }).then(() => {
      res.json('Студент добавлен')
    })
  },
  deleteStudent: (req, res) => {},
  patchStudent: (req, res) => {},
}
