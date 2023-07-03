<script  setup>
 import { RouterLink, RouterView } from 'vue-router'
 
 // import CommonVue from './components/VuHelper/CommonVue.vue';
import VuMenu from './components/VuHelper/VuMenu.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue'; 

 
</script>  

<template>
 

  <VuMenu/>
  <!-- //////////// STRT TMP -->
  <Header></Header>

  <div class="main">
  <RouterView />
  </div>

  <div class="v-gaper is-60"></div>

  <Footer></Footer>
  <!-- //////////// END TMP -->

</template>
 