<template>
<div id="Catalogue">
    <navpage></navpage>
    <catalogue></catalogue>
    <footpage></footpage>
</div>
</template>

<script>
// @ is an alias to /src
import catalogue from '../components/catalogue.vue';
import navpage from "../components/navpage.vue";
import footpage from "../components/footpage.vue";

export default {
  name: 'Catalogue',
  components: {
    catalogue,
    navpage,
    footpage
  }
}
</script>

<style scoped>

</style>