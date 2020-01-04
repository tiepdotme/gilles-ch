<template>
  <div id="service" class="service">
    <h2 v-html="titleH2" />
    <h3 v-html="titleH3" />
    <hr />
    <p>
      Bei vielen Projekten, die an mich herangetragen werden, geht es um die
      Programmierung klassischer Website mit Content Management System (CMS) für
      ein selbständiges Bearbeiten der Inhalte. Erfolgt die Anfrage über eine
      Agentur für einen ihrer Kunden, ist ein Designvorschlag oder eine
      Konzeption in der Regel schon vorhanden. In diesem Fall setze ich in
      Zusammenarbeit mit den Gestaltern den Entwurf in eine moderne Website um.
      Bei Direktkunden entwickle ich bei Bedarf auch das Design, wenn
      erforderlich im Team mit ausgewählten Webdesignern aus meinem langjährigen
      Netzwerk.
    </p>
    <p>
      Für detaillierte Informationen oder spezifische Bedürfnisse, zögern Sie
      nicht, mich zu <a v-scroll-to="'#kontakt'">kontaktieren</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: "Service",
  props: {
    titleH2: String,
    titleH3: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
