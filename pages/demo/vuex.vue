<template>
  <div class="section">
    <div class="container">
      <h1 class="title i">{{ pageName }}</h1>
      <span
        class="tag is-primary"
        @click="addAction"
      >{{ count }}</span>
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
    },
    methods: {
      add() {
        this.$store.commit('demo/add', 2)
      },
      addAction() {
        this.$store.dispatch('demo/addAction', 3)
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