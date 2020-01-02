<template>
  <div class="home">
    <Header />
    <Nav />
    <Intro titleH2="Gilbert Nigg" titleH3="Web Developer" />
    <Portfolio titleH2="Arbeiten" titleH3="Auszug aus meinem Portfolio" />
    <Kunden titleH2="Kunden" titleH3="Auszug aus der Kundenliste" />
    <Service titleH2="Service" titleH3="Was ich anbiete" />
    <UeberMich titleH2="Über mich" titleH3="Web Developer aus Leidenschaft" />
    <Kontakt titleH2="Kontakt" titleH3="Infos und Wegbeschreibung" />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
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
  }
};
</script>
