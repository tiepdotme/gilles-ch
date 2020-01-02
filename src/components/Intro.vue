<template>
  <div id="intro" class="intro">
    <h2 v-html="titleH2" />
    <h3 v-html="titleH3" />
    <hr />
    <h4>
      Willkommen bei Ihrem Partner für die Um&shy;setzung
      unter&shy;schied&shy;lichster Web&shy;lösungen. Für Agenturen als auch für
      Direkt&shy;kunden – von der Konzeption bis zur erfolg&shy;reichen
      Online-Schaltung und Betreuung.
    </h4>
  </div>
</template>

<script>
export default {
  name: "Intro",
  props: {
    titleH2: String,
    titleH3: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
