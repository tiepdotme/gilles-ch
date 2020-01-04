<template>
  <nav>
    <ul>
      <li><a v-scroll-to="'#portfolio'">Portfolio</a></li>
      <li><a v-scroll-to="'#kunden'">Kunden</a></li>
      <li><a v-scroll-to="'#service'">Service</a></li>
      <li><a v-scroll-to="'#ueber-mich'">Über mich</a></li>
      <li><a v-scroll-to="'#kontakt'">Kontakt</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
