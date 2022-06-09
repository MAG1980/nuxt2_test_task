<template>
  <div>
    <nav class="navbar navbar-dark bg-dark d-flex justify-content-between m-0">
      <div class="container-lg">
        <div>
          <ul class="nav d-flex align-items-center m-0">
            <li v-for="route in routes" :key="route.id" class="nav-item p-2">
              <NuxtLink :to="route.path">{{ route.title }}</NuxtLink>
            </li>
          </ul>
        </div>
        <CartButton :isCart="isCart" text="Checkout"/>
      </div>
    </nav>
    <Nuxt/>
  </div>
</template>

<script>
import {routes} from '~/static/routes.js'

export default {
  name: "cart-template",
  data() {
    return {
      isCart: true,
      routes: routes()
    }
  },
}

</script>

<style scoped>

</style>
