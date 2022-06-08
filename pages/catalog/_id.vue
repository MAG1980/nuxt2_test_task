<template>
  <h1>Item-{{ id }}</h1>
</template>

<script>
export default {
  name: "item-[id]",
  computed: {
    id() {
      return this.$route.params.id;
    }
  }
}
</script>

<style scoped>

</style>
