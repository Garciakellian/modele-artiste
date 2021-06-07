<template>
<div id="Contact">
    <navpage></navpage>
    <contact></contact>
    <footpage></footpage>
</div>
</template>

<script>
// @ is an alias to /src
import contact from '../components/contact.vue';
import navpage from "../components/navpage.vue";
import footpage from "../components/footpage.vue";

export default {
  name: 'Contact',
  components: {
    contact,
    navpage,
    footpage
  }
}
</script>

<style scoped>

</style>