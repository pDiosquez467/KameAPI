const express = require('express')
const app = express()
const port = 3000

app.use(express.json)

const usuarios = []
const personajes = []
const desbloqueados = []

app.get('/', (req, res) => {
  res.send('DragonBall App!')
})

app.listen(port, () => {
  console.log(`Dragon Ball app listening on port ${port}`)
})
