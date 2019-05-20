<template>
    <div>
        <b-card-group deck>
          <li v-for="item in items" v-bind:key="item.title">
            <Card title="title"/>
            <Card title="sarasa2"/>
            <Card title="sarasa3"/>
          </li>
        </b-card-group>
    </div>
</template>
<script>
import Card from './Card.vue'
import planet from '../api/planets.js'

export default {
    name: 'CardGroup',
    components: {
        Card
    },
    data: function() {
        return {
            items: planet.getPlanets()
        }
    }
  
}
</script>
