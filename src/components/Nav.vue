<template>
  <nav>
      <v-toolbar dark class="indigo">
          <v-toolbar-title> Normal toolbar</v-toolbar-title>
      </v-toolbar>
      <br>

      <v-toolbar dark flat class="black">
          <v-toolbar-title> Flat toolbar</v-toolbar-title>
          <v-spacer></v-spacer>
        <v-btn flat class="">
          <span class="white--text">logout</span>
        </v-btn>
      </v-toolbar> 
     <br>
     
     
      <v-toolbar  flat depressed class="white">
          <v-toolbar-title class="text-uppercase grey--text">
              <span class="font-weight-light">light tittle</span>
              <span class="font-weight-bold"> depe</span>
             </v-toolbar-title>

      </v-toolbar>
      <v-navigation-drawer  v-model='drawer' app  >
        <p>test</p>
      </v-navigation-drawer>
<br>
      <v-btn v-on:click='() => this.drawer = !this.drawer'>drawer</v-btn>
  </nav>
</template>

<script>
export default {
data(){
  return{
    drawer:false
  }
}
}
</script>

<style>

</style>