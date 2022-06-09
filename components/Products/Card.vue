<template>
  <b-card
    :class="bCardClass"
    :img-src="imgPath"
    :title="product.name.toUpperCase()"
    img-alt="Image"
    img-top
  >
    <b-card-text>
      This is a wider card with supporting text below as a natural lead-in to additional content.
      This content is a little bit longer.
    </b-card-text>

    <template #footer>
      <div class="d-flex justify-content-between align-items-center">
        <div>Price: ${{ product.price }}</div>
        <div v-if="isCart" class="align-self-auto p-3">Amount: {{ product.amount }}</div>
        <b-button v-if="!isCart" variant="primary" @click="addToCart">Buy</b-button>
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
    isCart: Boolean
  },
  computed: {
    imgPath() {
      return `https://picsum.photos/id/${this.product.id + 150}/200/300`
    },
    bCardClass() {
      return !this.isCart ? "col-lg-3 col-md-4 col-sm-12 m-1" : "w-25 flex-row align-items-center"
    },

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
.cart__product__img {
  height: 25vh;
}
</style>
