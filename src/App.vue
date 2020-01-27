<template>
  <div id="app">
    <keep-alive include="home">
      <router-view />
    </keep-alive>
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3d4a;
  h1,
  h2 {
    font-size: 2rem;
  }
}
</style>
