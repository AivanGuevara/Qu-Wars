<template>
    <div>
    <b-dropdown id="dropdown-1" text="Order by" class="m-md-2">
        <b-dropdown-item @click="orderByTitle">Title</b-dropdown-item>
        <b-dropdown-item @click="orderByRotation">Rotation</b-dropdown-item>
        <b-dropdown-item @click="orderByDiameter">Diameter</b-dropdown-item>
    </b-dropdown>
    </div>    
</template>

<script>
import orderHelper from '../helpers/orderHelper.js'

var mixin = {
    methods: {
        orderByDiameter: orderHelper.orderByDiameter,
        orderByRotation: orderHelper.orderByRotation,
        orderByTitle: orderHelper.orderByTitle
    }
}

export default {
    name: 'Dropdown',
    mixins: [mixin]
}
</script>

