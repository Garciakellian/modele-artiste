<template>
<div id="Evenement">
    <navpage></navpage>
    <evenement></evenement>
    <footpage></footpage>
</div>
</template>

<script>
// @ is an alias to /src
import evenement from '../components/evenement.vue';
import navpage from "../components/navpage.vue";
import footpage from "../components/footpage.vue";

export default {
  name: 'Evenement',
  components: {
    evenement,
    navpage,
    footpage
  }
}
</script>

<style scoped>

</style>