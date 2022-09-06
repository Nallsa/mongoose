const express = require('expess')

const app = express()

app.use(require('./router/mongoose.router'))

app.listen(4000, () => {
  console.log(`http://localhost:${4000}`)
})
