<template>
<div id="Tableauadmin">
    <navbaradmin></navbaradmin>
    <tableauadmin></tableauadmin>
</div>
</template>

<script>
import navbaradmin from '../components/navbaradmin.vue';
import tableauadmin from '../components/tableauadmin.vue';

export default {
  name: 'Tableauadmin',
  components: {
    tableauadmin
,
    navbaradmin
  }
}
</script>

<style scoped>

</style>