<template>
  <div class="container-lg">
    <h1>Cart</h1>
    <ProductsList :isCart="isCart" :productsList="products"/>
    <button @click="addOrder">Payment</button>
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
    ...mapActions({
      addToList: 'orders/ADD_TO_LIST'
    }),
    ...mapActions({
      emptyCart: 'cart/EMPTY_CART'
    }),
    addOrder() {
      this.addToList(this.products)
      this.emptyCart()
    }
  },
}
</script>

<style scoped>

</style>
