<template>
<div id="Success">
    <navpage></navpage>
    <success></success>
    <footpage></footpage>
</div>
</template>

<script>
import navpage from '../components/navpage.vue';
import success from '../components/success.vue';
import footpage from '../components/footpage.vue';

export default {
  name: 'Success',
  components: {
    navpage,
    success,
    footpage
  }
}
</script>

<style scoped>

</style>