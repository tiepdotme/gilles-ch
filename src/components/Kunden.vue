<template>
  <div id="kunden" class="kunden">
    <h2 v-html="heading.title" />
    <h3 v-html="heading.subTitle" />
    <hr />
    <ul v-if="Object.keys(kunden).length">
      <li v-for="kunde in kunden" :key="kunde.id">
        {{ kunde.name }}
      </li>
    </ul>
    <p v-else>
      Lade Daten...
    </p>
  </div>
</template>

<script>
export default {
  name: "Kunden",
  props: {
    heading: Object
  },
  data() {
    return {
      kunden: {}
    };
  },
  mounted() {
    fetch("https://www.gilles.ch/portfolio/kunden.json")
      .then(response => response.json())
      .then(data => (this.kunden = data));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
