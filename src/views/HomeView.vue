<template>
<div class="grey lighten-4">
<Nav/>
<center>
  <br>
   <br>
   <br>
   <h1 class="indigo--text">This is Heading</h1>
   <p class="red--text">This is a Text</p>
   <!-- lightening [lighten - light degree] -->
   <p class="pink lighten-4 red--text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum animi cupiditate aliquid dolorum! Maiores nam voluptates optio consequuntur repellendus dolor nobis non? Sit?</p>

  <!-- text sizing -->
  <h1 class="display-4" > display-4</h1>
  <h1 class="display-3" > dispaly-3</h1>
  <h1 class="display-2" > display-2</h1>
  <h1 class="display-1" > display-1</h1>
  <h1 class="headline" > Headline</h1>
  <h1 class="caption font-weight-italic ">caption and bold</h1>
  <p class="text-capitalize">capitalizing</p>
  <p class="text-uppercase">uppercase</p>
  <p class="text-lowercase">LOWERCASE</p>


    <!-- Buttons && icons -->
  <v-btn class="pink white--text">Button</v-btn> &nbsp
  <v-btn color="red" dark> click </v-btn> &nbsp
  <v-btn dark depressed color=black>depressed</v-btn> <br>
  <br> <v-btn text color="red ">text insted flat, bcs flat has been removed</v-btn>&nbsp
   <!-- --icons-- -->
   <!-- --there is a problem in icons review it  -->
   <v-btn dark depressed color=black>
     <v-icon left>email</v-icon>
     <span>email</span>
     </v-btn>
      <br> <br>
  <v-btn small dark>small btn</v-btn>&nbsp
  <v-btn large dark>large btn</v-btn>&nbsp
  <v-btn x-large dark>x-large btn</v-btn>&nbsp
  <v-btn depressed dark color='purple'>practice</v-btn>
  <br><br>
  <!-- fab buttons -->
  this is a happy fab : 
  <v-btn fab color="info white--text ml-7">f</v-btn>
  <br> <br>
  this is a depressed fab : 
  <v-btn fab depressed color="red white--text">f</v-btn>
  <br>
  <br>
  <br>
  <!-- padding and margin  -->
  <!-- how we use them :
  prpertydirection-size in a class  -->

<!--   
  properties :
   m- for margin 
   p- padding 
  directions:
   a-  all
   t-  top
   b-  bottom
   l-  left 
   r-  right
   x- left and right
   y- bottom and top 
  sizes : 
    -auto 
    -0 : $spacer * 0
    -1 : $spacer * .25
    -2 : $spacer * .50
    -3 : $spacer 
    -4 : $spacer  * 1.5
    -5 : $spacer  * 3
 -->

<v-btn class="indigo ml-7 mb-4" dark> test </v-btn>
<br><br>

  <!-- Grid System -->
  <v-container>
    <v-layout row>
      <v-flex xs12 md6 >
        <v-btn outlined dark block class="primary ma-1"> test </v-btn>
      </v-flex> 
     <v-flex xs12 md6 >
        <v-btn outlined dark block class="primary ma-1"> test2 </v-btn>
      </v-flex>
     <v-flex xs12 md6 >
        <v-btn outlined dark block class="primary ma-1"> test3 </v-btn>
      </v-flex>

    </v-layout>
  </v-container>

</center>
</div>
</template>

<script>
  import Nav from '../components/Nav'

  export default {
    name: 'Home',

    components: {
      Nav
    },
  }
</script>
