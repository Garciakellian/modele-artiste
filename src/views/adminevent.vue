<template>
<div id="Adminevent">
    <navbaradmin></navbaradmin>
    <adminevent></adminevent>
</div>
</template>

<script>
import navbaradmin from '../components/navbaradmin.vue';
import adminevent from '../components/adminevent';

export default {
  name: 'Adminevent',
  components: {
    navbaradmin,
    adminevent,
  }
}
</script>

<style scoped>

</style>