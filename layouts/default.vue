<template>
  <div>
    <nav class="navbar">
      <div class="navbar-brand">
        <nuxt-link
          to="/"
          class="navbar-item"
        >
          <h1 class="title is-5">CODING8</h1>
        </nuxt-link>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <nuxt-link
            to="/posts"
            class="navbar-item"
          >posts</nuxt-link>
        </div>
      </div>
    </nav>
    <div>
      <nuxt />
    </div>
  </div>
</template>

<style>
</style>
