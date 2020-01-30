<template>
  <div class="projekt">
    <Header v-if="headingComputed" :heading="headingComputed" />
    <p>
      Projekt.vue
    </p>
    <ul>
      <li>ID: {{ this.$route.params.id }}</li>
      <li>SLUG: {{ this.$route.params.slug }}</li>
    </ul>
    <div v-if="Object.keys(projekt).length">
      <div v-html="this.projekt.beschrieb" />
    </div>
    <div v-else>
      Lade Projekt...
    </div>
    <p>
      <router-link to="/">Projekt schliessen</router-link>
    </p>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "Projekt",
  components: {
    Header
  },
  props: {
    headingAssigned: Object
  },
  computed: {
    headingComputed: function() {
      if (this.headingAssigned) {
        return this.headingAssigned;
      } else if (this.loaded) {
        return this.heading;
      } else {
        return false;
      }
    }
  },
  data() {
    return {
      projekt: {},
      loaded: false
    };
  },
  async mounted() {
    fetch(
      "https://www.gilles.ch/portfolio/index.json.php?id=" +
        this.$route.params.id
    )
      .then(response => response.json())
      .then(data => {
        this.projekt = data;
        this.heading = {
          title: this.projekt.titel,
          subTitle: this.projekt.typ + " " + this.projekt.datum
        };
        this.loaded = true;
      });
  }
};
</script>

<style scoped lang="scss">
.projekt {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
}
</style>
