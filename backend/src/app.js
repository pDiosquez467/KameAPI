const express = require('express')
const app = express()
const port = 3000

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
 
app.use(express.json())

app.get('/', (req, res) => {
  res.send('DragonBall App!')
})

app.get('/api/v1/usuarios', async (req, res) => {
    const usuarios = await prisma.usuario.findMany()
    res.json(usuarios)
})

app.get('/api/v1/usuarios/:id', async (req, res) => {
    const id = Number(req.params.id)
    try {
        const usuario = await prisma.usuario.findFirstOrThrow({
            where: { id }
        })
        res.json(usuario)
        
    } catch (error) {
        res.status(404).send({error: "Usuario NO encontrado"})
    }  
})

app.post('/api/v1/usuarios', async (req, res) => {
  const { nombre, dinero, personaje_seleccionado } = req.body

  if (!nombre) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' })
  }

  const nuevo = await prisma.usuario.create({
    data: {
      nombre,
      dinero: dinero ?? 0,
      personaje_seleccionado
    }
  })

  res.status(201).json(nuevo)
})

app.delete('/api/v1/usuarios/:id', (req, res) => {
    const id = Number(req.params.id)
    const usuario = usuarios.find(us => us.id === id) 

    if (!usuario) {
        res.status(404).json({error: "Usuario NO encontrado"})
        return 
    }

    usuarios = usuarios.filter(us => us.id !== id)
    res.status(200).json(usuario)
})

app.put('/api/v1/usuarios/:id', (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ error: "El 'id' debe ser un número válido" });
    }

    const usuario = usuarios.find(us => us.id === id);
    if (!usuario) {
        return res.status(404).json({ error: "Usuario NO encontrado" });
    }

    const { nombre, dinero, personaje_seleccionado } = req.body;

    usuario.nombre = nombre ?? usuario.nombre;
    usuario.dinero = dinero ?? usuario.dinero;
    usuario.personaje_seleccionado = personaje_seleccionado ?? usuario.personaje_seleccionado;

    return res.status(200).json(usuario);
});

app.listen(port, () => {
  console.log(`Dragon Ball app listening on port ${port}`)
})
