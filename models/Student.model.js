const mongoose = require('mongoose')

const StudentSchema = mongoose.Schema({
  name: String,
  phone: String,
  age: Number,
})

const Student = mongoose.model()
