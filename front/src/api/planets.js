const URL =  'http://localhost:3000/'

export default {
   async getPlanets() {
        let planets = []
        let response = await fetch(URL)
        let data = await response.json()
        data.results.map((result) => {
            planets.push({title: result.name, rotation_period: result.rotation_period, diameter: parseInt(result.diameter)})
        });
        return planets
    }

}