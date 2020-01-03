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
        <GoogleMapLine
          v-for="line in lines"
          :key="line.id"
          :path.sync="line.path"
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
import GoogleMapLine from "./GoogleMapLine";

import { mapSettings } from "@/constants/mapSettings";
export default {
  name: "Kontakt",
  props: {
    titleH2: String,
    titleH3: String
  },

  components: {
    GoogleMapLoader,
    GoogleMapMarker,
    GoogleMapLine
  },
  data() {
    return {
      markers: [
        {
          id: "a",
          position: { lat: 3, lng: 101 }
        },
        {
          id: "b",
          position: { lat: 5, lng: 99 }
        },
        {
          id: "c",
          position: { lat: 6, lng: 97 }
        }
      ],
      lines: [
        {
          id: "1",
          path: [
            { lat: 3, lng: 101 },
            { lat: 5, lng: 99 }
          ]
        },
        {
          id: "2",
          path: [
            { lat: 5, lng: 99 },
            { lat: 6, lng: 97 }
          ]
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
      return this.markers[1].position;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
