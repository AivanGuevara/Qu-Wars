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

export default {
    name: 'CardGroup',
    components: {
        Card
    },
    props: {
        items: Array
    }
  
}
</script>
