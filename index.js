const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Bienvenido al sistema')
})

app.get('/aprendices', (req, res) => {
  res.send('Bienvenido a la gestion de aprendices')
})

app.get('/aprendices', (req, res) => {
  res.send('Bienvenido a la gestion de programas de formacion')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})