<template>
<div id="Homeadmin">
    <navbaradmin></navbaradmin>
    <homeadmin></homeadmin>
</div>
</template>

<script>
import navbaradmin from '../components/navbaradmin.vue';
import homeadmin from '../components/homeadmin.vue';

export default {
  name: 'Homeadmin',
  components: {
    homeadmin
,
    navbaradmin
  }
}
</script>

<style scoped>

</style>