<template>
  <div id="app">
    <Dropdown/>
    <CardGroup :items="items"/>
  </div>
</template>

<script>
import Dropdown from './components/Dropdown.vue'
import CardGroup from './components/CardGroup.vue'
import planet from './api/planets'

var mixin = {
    methods: {
        getPlanets: planet.getPlanets
    }
}

export default {
  name: 'app',
  mixins: [mixin],
  components: {
    Dropdown,
    CardGroup
  },
  data() {
        return {
            items: null
        }
    },
  mounted() {
       let self = this
       this.getPlanets().then(function(value){
            self.items = value;
       })
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
