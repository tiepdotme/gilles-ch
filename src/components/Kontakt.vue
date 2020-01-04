<template>
  <div id="kontakt" class="kontakt">
    <h2 v-html="titleH2" />
    <h3 v-html="titleH3" />
    <hr />
    <GoogleMapLoader
      :mapConfig="mapConfig"
      apiKey="AIzaSyBsgTVGdbGTsxSTyUxQS491ZJAWj--vraI"
    >
      <template slot-scope="{ google, map }">
        <GoogleMapMarker
          v-for="marker in markers"
          :key="marker.id"
          :marker="marker"
          :google="google"
          :map="map"
        />
      </template>
    </GoogleMapLoader>
  </div>
</template>

<script>
import GoogleMapLoader from "./GoogleMapLoader";
import GoogleMapMarker from "./GoogleMapMarker";

import { mapSettings } from "@/constants/mapSettings";
export default {
  name: "Kontakt",
  props: {
    titleH2: String,
    titleH3: String
  },

  components: {
    GoogleMapLoader,
    GoogleMapMarker
  },
  data() {
    return {
      markers: [
        {
          position: { lat: 47.39204, lng: 8.51878 }
        }
      ]
    };
  },

  computed: {
    mapConfig() {
      return {
        ...mapSettings,
        center: this.mapCenter
      };
    },

    mapCenter() {
      return { lat: 47.39044, lng: 8.51878 };
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
