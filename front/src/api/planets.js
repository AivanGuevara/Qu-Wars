const URL =  'http://localhost:3000/'

export default {
   async getPlanets() {
        let response = await fetch(URL)
        let data = await response.json()
        return data
    }

}