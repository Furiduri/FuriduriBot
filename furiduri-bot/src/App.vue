<template>
  <div id="app">
    <FNavbar/>
    <div class="main container">
      <router-view/>  
    </div>
  </div>
</template>

<script>
import FNavbar from './components/FNavbar.vue';
export default {
  name: "app",
  components: {
    FNavbar
  },
}
</script>

<style>
</style>
