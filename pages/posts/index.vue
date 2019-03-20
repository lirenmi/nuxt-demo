<template>
  <div class="section">
    <h1 class="title is-3">List</h1>
    <div
      v-for="post in posts"
      :key="post.id"
    >
      {{ post.title }}
    </div>
  </div>
</template>

<script>
  export default {
    async asyncData( { $axios } ) {
      const posts = await $axios.$get('http://localhost:3333/posts')
      return { posts }
    }
  }
</script>

<style scoped>
</style>