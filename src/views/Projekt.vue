<template>
  <div class="projekt">
    <p>
      Projekt.vue
    </p>
    <ul>
      <li>ID: {{ this.$route.params.id }}</li>
      <li>SLUG: {{ this.$route.params.slug }}</li>
    </ul>
    <p>
      <router-link to="/">Projekt schliessen</router-link>
    </p>
  </div>
</template>

<style scoped lang="scss">
.projekt {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
}
</style>
