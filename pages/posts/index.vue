<template>
  <div class="section">
    <div class="container">
      <h1 class="title is-3">List</h1>
      <div class="columns is-multiline is-desktop">
        <div
          :to="{name: 'posts-id', params: {id: post.id} }"
          class="column is-3"
          v-for="post in posts"
          :key="post.id"
        >
          <div class="card">
            <nuxt-link :to="{name: 'posts-id', params: {id: post.id} }">
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
            </nuxt-link>
            <footer class="card-footer">
              <a
                class="card-footer-item"
                @click.self="destroyAction(post.id)"
              >Delete</a>
            </footer>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    // async asyncData( { $axios } ) {
    //   const posts = await $axios.$get('http://localhost:3333/posts')
    //   return { posts }
    // },
    async fetch({ $axios, store}) {
      const response = await $axios.get('http://localhost:3333/posts')
      store.commit('posts/setList', response.data)
    },
    computed: {
      posts() {
        return this.$store.state.posts.list
      }
    },
    methods: {
      destroyAction(id) {
        this.$store.dispatch('posts/destroyAction', id)
      }
    },
    head() {
      return {
        title: 'List'
      }
    }
  }
</script>

<style scoped>
</style>