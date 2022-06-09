<template>
  <b-card
    :img-src="imgPath"
    :title="product.name.toUpperCase()"
    class="col-lg-3 col-md-4 col-sm-12 m-1"
    img-alt="Image"
    img-top
  >
    <b-card-text>
      This is a wider card with supporting text below as a natural lead-in to additional content.
      This content is a little bit longer.
    </b-card-text>

    <template #footer>
      <div class="d-flex justify-content-between align-items-center">
        <div>Price: {{ product.price }}</div>
        <b-button variant="primary" @click="addToCart">Купить</b-button>
      </div>
    </template>
  </b-card>
</template>

<script>
export default {
  name: "ProductsCard",
  props: {
    product: {
      id: Number,
      name: String,
      price: Number
    },
  },
  computed: {
    imgPath() {
      return `https://picsum.photos/id/${this.product.id + 150}/200/300`
    }
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product)
    },
  },
  mounted() {
    console.log(this.product)
  }
}
</script>

<style scoped>

</style>
