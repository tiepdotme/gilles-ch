<template>
  <div id="kunden" class="kunden">
    <h2 v-html="heading.title" />
    <h3 v-html="heading.subTitle" />
    <hr />
    [...]
  </div>
</template>

<script>
export default {
  name: "Kunden",
  props: {
    heading: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
