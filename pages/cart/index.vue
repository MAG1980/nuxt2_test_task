<template>
  <div class="container-lg">
    <h1>Cart</h1>
    <ProductsList :isCart="true" :productsList="products"/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "index-cart",
  computed: {
    ...mapGetters(
      {products: 'cart/GET_CART'},
    )
  },

  methods: {
    ...mapActions([])
  },
}
</script>

<style scoped>

</style>
