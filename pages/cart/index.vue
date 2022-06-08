<template>
  <div>
    <h1>Cart</h1>
    <ProductsList v-if="cartItems.length"/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "products-cart",
  computed: {
    ...mapGetters(
      {cartItems: 'cart/GET_CART'},
    )
  },
  
  methods: {
    ...mapActions([])
  },
  mounted() {
    console.log(cartItems);
    console.log(this.cartItems);
  }
}
</script>

<style scoped>

</style>
