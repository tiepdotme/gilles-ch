<template>
  <footer>
    <div>
      <strong>Gilbert Nigg</strong><br />
      Web Developer <br />
      <a href="mailto:mail@gilles.ch">mail@gilles.ch</a>
    </div>
    <div>
      <a href="https://goo.gl/maps/C1qyzH21n2k" target="_blank"
        >Hardturmstrasse 66<br />
        CH-8005 Z&uuml;rich</a
      ><br />
      <a href="tel:+41433213744">+41 43 321 37 44</a>
    </div>
    <p>
      <a v-scroll-to="'#intro'">▲</a>
    </p>

  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
