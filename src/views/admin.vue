<template>
<div id="Admin">
    <navbaradmin></navbaradmin>
    <admin></admin>
</div>
</template>

<script>
import navbaradmin from '../components/navbaradmin.vue';
import admin from '../components/admin';

export default {
  name: 'Admin',
  components: {
    navbaradmin,
    admin,
  }
}
</script>

<style scoped>

</style>