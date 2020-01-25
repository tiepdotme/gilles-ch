<template>
  <div>
    <h4>Leistungen</h4>
    <ul v-if="Object.keys(leistungen).length">
      <li v-for="leistung in leistungen" :key="leistung.id">
        {{ leistung.name }}
      </li>
    </ul>
    <p v-else>
      Lade Daten...
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leistungen: {}
    };
  },
  mounted() {
    fetch("https://www.gilles.ch/portfolio/leistungen.json")
      .then(response => response.json())
      .then(data => (this.leistungen = data));
  }
};
</script>
