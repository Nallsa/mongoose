const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())
app.use(require('./router/student.router'))

mongoose
  .connect(
    'mongodb+srv://insom:ismait3310@cluster0.ybsxb7s.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(3000, () => {
      console.log(`http://localhost:${3000}`)
    })

    console.log('Успешно соединились с сервером MongoDB')
  })
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))
