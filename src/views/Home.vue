<template>
  <div class="home">
    <Header :heading="heading" />
    <Nav @changeHeadingParent="setHeading" />
    <Intro :heading="headingsConst.intro" />
    <Portfolio :heading="headingsConst.portfolio" />
    <Kunden :heading="headingsConst.kunden" />
    <Service :heading="headingsConst.service" />
    <UeberMich :heading="headingsConst.ueberMich" />
    <Kontakt :heading="headingsConst.kontakt" />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import { HEADINGS } from "@/constants/headingSettings";

import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import Intro from "@/components/Intro.vue";
import Portfolio from "@/components/Portfolio.vue";
import Kunden from "@/components/Kunden.vue";
import Service from "@/components/Service.vue";
import UeberMich from "@/components/UeberMich.vue";
import Kontakt from "@/components/Kontakt.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Header,
    Nav,
    Intro,
    Portfolio,
    Kunden,
    Service,
    UeberMich,
    Kontakt,
    Footer
  },

  data() {
    return {
      heading: HEADINGS.intro,
      headingsConst: HEADINGS
    };
  },
  methods: {
    setHeading(_heading) {
      this.heading = _heading;
    }
  }
};
</script>
