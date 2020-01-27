<template>
  <nav>
    <h2></h2>
    <h3></h3>
    <hr />
    <ul>
      <li><a v-scroll-to="'#portfolio'">Portfolio</a></li>
      <li><a v-scroll-to="'#kunden'">Kunden</a></li>
      <li><a v-scroll-to="'#service'">Service</a></li>
      <li><a v-scroll-to="'#ueber-mich'">Über mich</a></li>
      <li><a v-scroll-to="'#kontakt'">Kontakt</a></li>
    </ul>
  </nav>
</template>

<script>
import { HEADINGS } from "@/constants/headingSettings";

export default {
  name: "Nav",
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      yPos: 0,
      lastScrollY: 0,
      heading: HEADINGS.intro,
      lastHeading: HEADINGS.intro
    };
  },
  watch: {
    $route(to, from) {
      if (from.name === "home" && to.name === "projekt") {
        window.removeEventListener("scroll", this.handleScroll);
      } else if (from.name === "projekt" && to.name === "home") {
        // jump to stored scroll-position
        window.scrollTo(0, this.lastScrollY);
        window.addEventListener("scroll", this.handleScroll);
      }
    }
  },
  methods: {
    handleScroll() {
      this.yPos = window.scrollY + 20;
      // store scroll-position
      this.lastScrollY = window.scrollY;
      if (this.yPos >= document.getElementById("kontakt").offsetTop) {
        this.heading = HEADINGS.kontakt;
      } else if (this.yPos >= document.getElementById("ueber-mich").offsetTop) {
        this.heading = HEADINGS.ueberMich;
      } else if (this.yPos >= document.getElementById("service").offsetTop) {
        this.heading = HEADINGS.service;
      } else if (this.yPos >= document.getElementById("kunden").offsetTop) {
        this.heading = HEADINGS.kunden;
      } else if (this.yPos >= document.getElementById("portfolio").offsetTop) {
        this.heading = HEADINGS.portfolio;
      } else {
        this.heading = HEADINGS.intro;
      }
      if (this.lastHeading !== this.heading) {
        this.lastHeading = this.heading;
        this.changeHeading(this.heading);
      }
    },
    changeHeading(_heading) {
      this.$emit("changeHeadingParent", _heading);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
nav {
  position: fixed;
  z-index: 9;
  left: 0;
  top: 0;
  width: 100vw;
  h2,
  h3 {
    visibility: hidden;
    &::before {
      content: "\A0";
    }
  }
}
</style>
