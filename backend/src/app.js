const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const usuarios = [
    {
        id: 1,
        nombre: "lioMessi",
        dinero: 100,
        personaje_seleccionado: 'Vegeta'
    }, 
    {
        id: 2,
        nombre: "danielLarusso",
        dinero: 200,
        personaje_seleccionado: 'Krilin'
    },
]
const personajes = []
const desbloqueados = []

app.get('/', (req, res) => {
  res.send('DragonBall App!')
})

app.get('/api/v1/usuarios', (req, res) => {
    res.json(usuarios)
})

app.get('/api/v1/usuarios/:id', (req, res) => {
    const usuario = usuarios.find(us => us.id == req.params.id)
    
    if (usuario === undefined) {
        res.sendStatus(404)
        return 
    }
    res.json(usuario)

})

app.listen(port, () => {
  console.log(`Dragon Ball app listening on port ${port}`)
})
