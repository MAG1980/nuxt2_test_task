<template>
  <div class="container-lg">
    <h1>Cart</h1>
    <ProductsList :isCart="isCart" :productsList="products"/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "index-cart",
  layout: 'CartTemplate',
  data() {
    return {
      isCart: true
    }
  },
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
