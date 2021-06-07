<template>
<div id="Tableau">
    <navpage></navpage>
    <tableau></tableau>
    <footpage></footpage>
</div>
</template>

<script>
// @ is an alias to /src
import tableau from '../components/tableau.vue';
import navpage from "../components/navpage.vue";
import footpage from "../components/footpage.vue";

export default {
  name: 'Tableau',
  components: {
    tableau,
    navpage,
    footpage
  }
}
</script>

<style scoped>

</style>