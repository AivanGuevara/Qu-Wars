<template>
  <div id="app">
    <Dropdown/>
    <CardGroup/>
  </div>
</template>

<script>
import Dropdown from './components/Dropdown.vue'
import CardGroup from './components/CardGroup.vue'

export default {
  name: 'app',
  components: {
    Dropdown,
    CardGroup
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
