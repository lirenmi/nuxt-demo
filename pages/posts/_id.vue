<template>
  <div class="section">
    <div class="container">
      <h1 class="title is-1">{{ post.title }}</h1>
      <p>{{ post.description }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    validate({ params }) {
      return /^\d+$/.test(params.id)
    },

    async asyncData({ $axios, params, error }) {
      try {
        const post = await $axios.$get(`http://localhost:3333/posts/${params.id}`)
        return { post }
      } catch (e) {
        error({statusCode: 404, message: 'Post not found'})
      }
    },
    head() {
      return {
        title: this.post.title
      }
    }
  }
</script>

<style scoped>
</style>