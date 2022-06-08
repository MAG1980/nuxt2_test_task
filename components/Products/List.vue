<template>
  <div class="d-flex flex-wrap justify-content-center">
    <ProductsCard v-for="product in productsList" :key="product.id"
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
    }
  },
  methods: {
    addToCart(product) {
      console.log(product)
      this.$emit('addToCart', product)
    }
  }
}
</script>

<style scoped>

</style>
