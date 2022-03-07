<template>
  <div>
    <Nav/>
    <!-- --Break poins and visibility classes -->

      <!-- --visibility--  

      we can hide content from specific break points using:
      hidden-{breakpoint}-{condition}
      example : hidden-sm-only
      
      breakpoints:
      xs - extra small devices
      sm - small devices
      md - medium devices 
      lg -  larg devices
      xl - extra large devices
      
      conditions:
      -only
      -and-down
      -and-up 
      
      -->

  <!-- examples -->
  <br>
  <center>
    <v-btn class="hidden-xs-only"> click me</v-btn>
    <v-btn class="hidden-md-and-up"> click me</v-btn>

  </center>










  </div>
</template>
<script>
import Nav from '../components/Nav.vue'
export default {
components:{
  Nav,
}
}
</script>

<style>

</style>