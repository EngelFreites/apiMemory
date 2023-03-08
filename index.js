const express = require('express')

const api = express()

api.get('/', (req, res) =>{
  res.send('hello world')
})


api.get('/api/levels', (req, res) =>{
  res.status(200).json([{
    nivel: 1,
    name:'nemesis',
    dificult: "EASY"
  },{
    nivel: 2,
    name:'egypto',
    dificult: "EASY"
  },{
    name:'skype',
    dificult: "EASY"
  }])
})

const PORT = process.env.PORT || 3001

api.listen(PORT, ()=>{
  console.log(`On port ${PORT}`)
})