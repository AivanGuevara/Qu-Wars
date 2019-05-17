<template>
    <div>
        <b-card-group deck>
            <Card title="sarasa"/>
            <Card title="sarasa1"/>
            <Card title="sarasa2"/>
            <Card title="sarasa3"/>
        </b-card-group>
    </div>
</template>
<script>
import Card from './Card.vue'

export default {
    name: 'CardGroup',
    components: {
        Card
    }
}
</script>
