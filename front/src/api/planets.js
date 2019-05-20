const URL =  'http://localhost:3000'

export default {
   async getPlanets() {
        let planets = []
        let data = await fetch(URL, { 'Access-Control-Allow-Credentials': '*' }).then((result) => { return result })
        console.log(data)
        data.results.map((result) => {
            planets.push(Object.create({title: result.name, rotation_period: result.rotation_period, diameter: result.diameter}))
        })
        return planets;
    }

}