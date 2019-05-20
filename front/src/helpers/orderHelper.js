import _ from 'lodash'

export default {
    orderByTitle: function (){
        this.$parent.items = _.orderBy(this.$parent.items, ['title'], ['asc'])
    },
    orderByRotation: function (){
        this.$parent.items = _.orderBy(this.$parent.items, ['rotation_period'], ['asc'])
    },
    orderByDiameter: function (){
        this.$parent.items =  _.orderBy(this.$parent.items, ['diameter'], ['asc'])
    }
}   