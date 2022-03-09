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
      <v-navigation-drawer  v-model='drawer' app class="indigo" >
       
        <v-list>

          <v-list-tile v-for='page in pages' :key="page.text"  :to='page.route'>
            <v-list-tile-action>
              <v-icon class="white--text">{{page.icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-tittle class="white--text">
                {{page.text}}
              </v-list-tile-tittle>
            </v-list-tile-content>
          </v-list-tile>
         
          
        </v-list>

      </v-navigation-drawer>
<br>
      <v-btn v-on:click='() => this.drawer = !this.drawer' class="mx-4">drawer</v-btn>
  </nav>
</template>

<script>
export default {
data(){
  return{
    drawer:false,
      pages:[
        {icon:'dashboard',text:'dashboard',route:"/"},
        {icon:'settings',text:'settings',route:"/settings"},
        {icon:'users',text:'users',route:"/users"},
        {icon:'likes',text:'likes',route:"/likes"},
      ]
    }
  }
}
</script>

<style>

</style>