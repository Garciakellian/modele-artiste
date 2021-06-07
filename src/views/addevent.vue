<template>
<div id="Addevent">
    <navbaradmin></navbaradmin>
    <addevent></addevent>
</div>
</template>

<script>
import navbaradmin from '../components/navbaradmin.vue';
import addevent from '../components/addevent.vue';

export default {
  name: 'Addevent',
  components: {

    navbaradmin,
    addevent
  }
}
</script>

<style scoped>

</style>