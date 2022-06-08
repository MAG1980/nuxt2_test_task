<template>
  <div>
    <h1 @click="decrementCounter">Catalog {{ counter }}</h1>
    <div @click="incrementCounter">+</div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

export default {
  name: "index.vue",
  layout: "catalog",
  computed: {
    ...mapGetters(
      {counter: 'counter/getCounter'}
    )
  },
  methods: {
    ...mapMutations({
      incrementCounter: 'counter/increment',
      decrementCounter: "counter/decrement"
    })
  }
}
</script>

<style scoped>

</style>
