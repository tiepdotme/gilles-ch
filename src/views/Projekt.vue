<template>
  <div class="projekt">
    <Header v-if="headingComputed" :heading="headingComputed" />
    <div v-if="Object.keys(projekt).length">
      <h2 v-html="this.heading.title" />
      <h3 v-html="this.heading.subTitle" />
      <hr />
      <p>
        <img
          :src="this.projekt.bild"
          :alt="this.projekt.titel"
          @load="onImgLoad"
          v-bind:class="{ loaded: this.imgIsLoaded ? 1 : 0 }"
        />
      </p>
      <p v-html="this.projekt.beschrieb" />
      <p v-if="this.projekt.kunde">Kunde: {{ this.projekt.kunde }}</p>
      <p v-if="this.projekt.url">
        Website <br />
        <a
          :href="this.projekt.url"
          v-html="this.projekt.url"
          target="_blank"
          rel="noopener"
        />
      </p>
      <div v-if="projekt.tags">
        Leistungen
        <ul>
          <li v-for="tag in projekt.tags" :key="tag.id">
            {{ tag.name }}
          </li>
        </ul>
      </div>
      <p v-if="this.projekt.partner" v-html="this.projekt.partner" />
      <p>
        <router-link to="/">Projekt schliessen</router-link>
      </p>
    </div>
    <div v-else>
      Lade Projekt...
    </div>
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
      imgIsLoaded: false,
      loaded: false
    };
  },
  methods: {
    onImgLoad() {
      this.imgIsLoaded = true;
    }
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
