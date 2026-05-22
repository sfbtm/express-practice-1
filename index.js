const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Bienvenido al sistema')
})

app.get('/aprendices', (req, res) => {
  res.send('Bienvenido a la gestion de aprendices')
})

app.get('/programas', (req, res) => {
  res.json([
    {
      id: 1,
      nombre: 'Análisis y Desarrollo de Software (ADSO)'
    },
    {
      id: 2,
      nombre: 'Gestión de Redes de Datos'
    },
    {
      id: 3,
      nombre: 'Programación de Aplicaciones para Dispositivos Móviles'
    },
    {
      id: 4,
      nombre: 'Diseño e Integración de Multimedia'
    }
  ])
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})