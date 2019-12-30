<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Intro />
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/Intro.vue";

export default {
  name: "home",
  components: {
    Intro
  }
};
</script>
