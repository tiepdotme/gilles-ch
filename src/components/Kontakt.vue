<template>
  <div id="kontakt" class="kontakt">
    <h2 v-html="titleH2" />
    <h3 v-html="titleH3" />
    <hr />
  </div>
</template>

<script>
export default {
  name: "Kontakt",
  props: {
    titleH2: String,
    titleH3: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
