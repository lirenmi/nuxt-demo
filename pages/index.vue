<template>
  <section class="container">
    <h1 class="title">index</h1>
    <div>
      <nuxt-link to="/posts">list</nuxt-link>
    </div>
  </section>
</template>

<script>


export default {
  head() {
    return {
      title: 'Posts'
    }
  }
}
</script>

<style scoped >
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #6435d1;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
