<template>
<div id="Event">
    <navpage></navpage>
    <event></event>
    <footpage></footpage>
</div>
</template>

<script>
// @ is an alias to /src
import event from '../components/event.vue';
import navpage from "../components/navpage.vue";
import footpage from "../components/footpage.vue";

export default {
  name: 'Event',
  components: {
    event,
    navpage,
    footpage
  }
}
</script>

<style scoped>

</style>