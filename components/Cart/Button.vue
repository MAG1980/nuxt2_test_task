<template>
  <button class="button btn btn-outline-primary my-2 my-sm-0" type="submit">
    <NuxtLink :to="path">
      {{ text }}
    </NuxtLink>
    <p v-if="$store.state.cart.products.length" class="counter">{{ counter }}</p>
  </button>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "CartButton",
  props: {
    text: String,
    isCart: Boolean
  },
  computed: {
    ...mapGetters({
      counter: 'cart/GET_ROWS_COUNT'
    }),
    path() {
      return !this.isCart ? "/cart" : "/payment"
    }
  }
}
</script>

<style scoped>
.button {
  position: relative;
}

.counter {
  position: absolute;
  top: -9px;
  right: -15px;
  width: 20px;
  height: 20px;
  border: 1px solid crimson;
  font-size: 12px;
  color: blue;
  background-color: crimson;
  border-radius: 50%;
  margin: 0;

}
</style>
