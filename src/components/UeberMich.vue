<template>
  <div id="ueber-mich" class="ueber-mich">
    <h2 v-html="titleH2" />
    <h3 v-html="titleH3" />
    <hr />
    <p>
      Anfangs 2002 habe ich begonnen, als selbständiger Web Developer meine
      ersten Kunden zu betreuen. Die vorherige Zeit als Mitarbeiter einer
      Webagentur mit eingerechnet, kann ich getrost von mir behaupten, dass ich
      die gesamte Entwicklung des kommerziellen Internets miterlebt habe. Nicht
      von aussen, sondern mittendrin. Meine Berufslehre als Polygraf brachte mir
      zusätzlich die nötige Schnittstelle zwischen Design und Code. Diese
      Erfahrung mit immer neuen technischen und gestalterischen
      Herausforderungen hat mich geprägt und gibt mir die Sicherheit, für meine
      vielen treuen und neuen Kunden, die jeweils beste Lösungen anbieten zu
      können.
    </p>
  </div>
</template>

<script>
export default {
  name: "ueber-mich",
  props: {
    titleH2: String,
    titleH3: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
