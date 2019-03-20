<template>
  <div class="section">
    <h1 class="title is-1">Post id: {{$route.params.id}} </h1>
  </div>
</template>

<script>
  export default {
    validate({ params }) {
      return /^\d+$/.test(params.id)
    }
  }
</script>

<style scoped>
</style>