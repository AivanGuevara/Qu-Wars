const express = require('express')
const swapi = require('swapi-node')
const app = express()
const port = 3000

const func = async function(req, res) {
  let planets = await swapi.get('https://swapi.co/api/planets/').then(function(planets) {
    return planets;
  })
  res.json(planets)
}
app.get('/', (req, res) => res.send('Star Wars rocks!'))

app.get('/planets', func) 

app.listen(port, () => console.log(`Listening in port ${port}`))