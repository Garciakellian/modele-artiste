<template>
<div id="Artisteadmin">
    <navbaradmin></navbaradmin>
    <artisteadmin></artisteadmin>
</div>
</template>

<script>
import navbaradmin from '../components/navbaradmin.vue';
import artisteadmin from '../components/artisteadmin';

export default {
  name: 'Artisteadmin',
  components: {
    navbaradmin,
    artisteadmin,
  }
}
</script>

<style scoped>

</style>