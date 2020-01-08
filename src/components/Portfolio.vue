<template>
  <div id="portfolio" class="portfolio">
    <h2 v-html="heading.title" />
    <h3 v-html="heading.subTitle" />
    <hr />
    [...]
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  props: {
    heading: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
