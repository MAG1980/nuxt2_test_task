<template>
  <div class="container-lg">
    <h1>Catalog</h1>
    <ProductsList :productsList="products"/>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex';

export default {
  name: "index-vue",
  layout: "catalog",

  computed: {
    ...mapGetters(
      {products: 'products/GET_PRODUCTS_FROM_STATE'}
    )
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      getProductsFromAPI: 'products/GET_PRODUCTS_FROM_API'
    })
  },
  mounted() {
    this.getProductsFromAPI()
  }
}
</script>

<style scoped>

</style>
