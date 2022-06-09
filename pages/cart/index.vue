<template>
  <div>
    <div v-if="payment" class="text-center  d-flex vh-100 flex-column justify-content-center">
      <p class="display-3">Производится оплата</p>
      <b-spinner class="align-self-center" label="Text Centered" variant="primary"></b-spinner>
    </div>
    <div v-else class="container-lg">
      <h1>Cart</h1>
      <ProductsList :isCart="isCart" :productsList="products"/>
      <button class="button btn btn-outline-primary my-2 my-sm-0" @click="addOrder">Payment</button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "index-cart",
  layout: 'CartTemplate',
  data() {
    return {
      isCart: true,
      payment: false
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
      this.payment = true
      setTimeout(() => {
        window.$nuxt.$router.push('/')
      }, 4000)
    }
  },
}
</script>

<style scoped>

</style>
