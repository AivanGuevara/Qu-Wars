<template>
    <div>
        <b-card-group deck>
          <li v-for="item in items" v-bind:key="item.title">
            <Card :title="item.title" :rotation_period="item.rotation_period" :diameter="item.diameter"/>
          </li>
        </b-card-group>
    </div>
</template>
<script>
import Card from './Card.vue'
import planet from '../api/planets'

var mixin = {
    methods: {
        getPlanets: planet.getPlanets
    }
}

export default {
    name: 'CardGroup',
    mixins: [mixin],
    components: {
        Card
    },
    data() {
        return {
            items: null
        }
    },
    mounted() {
       let self = this
       this.getPlanets().then(function(value){
            let planets = []
            value.results.map((result) => {
                planets.push({title: result.name, rotation_period: result.rotation_period, diameter: result.diameter})
            });
            self.items = planets;
       })
    }
  
}
</script>
