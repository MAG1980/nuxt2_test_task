<template>
  <b-card
    :title="product.name.toUpperCase()"
    class="col-lg-3 col-md-4 col-sm-12 m-1"
    img-alt="Image"
    img-src="https://picsum.photos/seed/picsum/200/300" img-top
  >
    <b-card-text>
      This is a wider card with supporting text below as a natural lead-in to additional content.
      This content is a little bit longer.
    </b-card-text>

    <template #footer>
      <div class="d-flex justify-content-between align-items-center">
        <div>Price: {{ product.price }}</div>
        <b-button href="#" variant="primary">Купить</b-button>
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
  }
}
</script>

<style scoped>

</style>
