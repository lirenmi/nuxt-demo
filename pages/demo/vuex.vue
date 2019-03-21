<template>
  <div class="section">
    <div class="container">
      <h1 class="title i">{{ pageName }}</h1>
      <span class="tag is-primary">{{ count }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      pageName() {
        return this.$store.state.demo.pageName
      },
      count() {
        return this.$store.state.demo.count
      }
    }
  }
</script>

<style scoped>
.title {
  font-size: 5rem;
  font-weight: 200;
}
</style>