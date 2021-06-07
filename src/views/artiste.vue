<template>
<div id="Artiste">
    <navpage></navpage>
    <artiste></artiste>
    <footpage></footpage>
</div>
</template>

<script>
import artiste from '../components/artiste.vue';
import navpage from "../components/navpage.vue";
import footpage from "../components/footpage.vue";

export default {
  name: 'Artiste',
  components: {
    artiste,
    navpage,
    footpage
  }
}
</script>

<style scoped>

</style>