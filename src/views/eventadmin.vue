<template>
<div id="Eventadmin">
    <navbaradmin></navbaradmin>
    <eventadmin></eventadmin>
</div>
</template>

<script>
import navbaradmin from '../components/navbaradmin.vue';
import eventadmin from '../components/eventadmin.vue';

export default {
  name: 'Eventadmin',
  components: {
    eventadmin
,
    navbaradmin
  }
}
</script>

<style scoped>

</style>