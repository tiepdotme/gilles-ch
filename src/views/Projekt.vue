<template>
  <div>
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
