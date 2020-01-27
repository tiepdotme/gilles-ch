<template>
  <div id="portfolio" class="portfolio">
    <h2 v-html="heading.title" />
    <h3 v-html="heading.subTitle" />
    <hr />
    <ul v-if="Object.keys(projekte).length">
      <li v-for="projekt in projekte" :key="projekt.id">
        <router-link
          :to="{
            name: 'projekt',
            params: {
              id: projekt.id,
              slug: projekt.slug
            }
          }"
        >
          <img :src="projekt.bildKlein" :alt="projekt.titel" /><br />
          {{ projekt.titel }}<br />
          {{ projekt.typ }} {{ projekt.datum }}
        </router-link>
      </li>
    </ul>
    <p v-else>
      Lade Projekte...
    </p>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  props: {
    heading: Object
  },
  data() {
    return {
      projekte: {}
    };
  },
  mounted() {
    fetch("https://www.gilles.ch/portfolio/index.json")
      .then(response => response.json())
      .then(data => (this.projekte = data));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
