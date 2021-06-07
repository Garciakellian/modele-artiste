<template>
<div id="Home">
    <navpage></navpage>
    <home></home>
    <footpage></footpage>
</div>
</template>

<script>
// @ is an alias to /src
import home from '../components/home.vue';

import navpage from "../components/navpage.vue";
import footpage from "../components/footpage.vue";

export default {
  name: 'Home',
  components: {
    home,
    navpage,
    footpage
  }
}
</script>

<style scoped>

</style>