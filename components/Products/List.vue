<template>
  <div class="d-flex flex-wrap justify-content-center">
    <ProductsCard v-for="product in productsList"
                  :key="product.id"
                  :product="product"
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
}
</script>

<style scoped>

</style>
