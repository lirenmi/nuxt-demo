<template>
  <div class="section">
    <div class="container">
      <h1 class="title is-3">List</h1>
      <div class="columns is-multiline is-desktop">
        <nuxt-link
          :to="{name: 'posts-id', params: {id: post.id} }"
          class="column is-3"
          v-for="post in posts"
          :key="post.id"
        >
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  :src="post.imageUrl"
                  :alt="post.title"
                >
              </figure>
            </div>
            <div class="card-content">
              <p class="title is-5">{{ post.title }}</p>
              <div class="subtitle is-7">
                {{ post.author }}
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
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