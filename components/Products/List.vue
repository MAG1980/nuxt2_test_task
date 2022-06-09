<template>
  <div :class="listClass">
    <ProductsCard v-for="product in productsList" :key="product.id"
                  :is-cart="isCart"
                  :product="product"
                  @addToCart="addToCart"
    />
  </div>
</template>

<script>
export default {
  name: "ProductsList",
  props: {
    productsList: {
      type: Array
    },
    isCart: Boolean
  },
  computed: {
    listClass() {
      return !this.isCart ? "d-flex flex-wrap justify-content-center" : "d-flex flex-column flex-wrap align-items-center"
    }
  },
  methods: {
    addToCart(product) {
      console.log(product)
      this.$emit('addToCart', product)
    }
  },
  mounted() {
    console.log(this.isCart, this.listClass)
  }
}
</script>

<style scoped>

</style>
