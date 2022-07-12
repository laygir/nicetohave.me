<template>
  <div id="app">
    <router-view />
    <div
      id="snipcart"
      :data-api-key="env.VUE_APP_SNIPCART_PUBLIC_API_KEY"
      hidden
      />
  </div>
</template>

<script>

export default {
  computed: {
    env() {
      return process.env;
    },
  },
};
</script>

<style lang="scss">

// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
</style>
