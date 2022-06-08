<template>
  <div class="container-lg">
    <h1 @click="decrementCounter">Catalog {{ counter }}</h1>
    <div @click="incrementCounter">+</div>
    <ProductsList :productsList="productsList"/>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

export default {
  name: "index-vue",
  layout: "catalog",
  data() {
    return {
      productsList: {}
    }
  },
  async asyncData({$axios}) {

    const data = await $axios.$get('http://localhost:3000/api/getJSON')
    return {productsList: data.goods}
  },
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
