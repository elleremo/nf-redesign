<template>
  <div class="vue-container" :class="{'open':showList}">
    <!-- <button class="vue-button-list" v-on:click="showList=!showList">?</button> -->


    <div class="vue-wrapper" v-if="showList">
      <!-- <HelloWorld msg="NF REDESIGN!" /> -->

      <nav class="vue-nav">

        <div v-for="(route) in this.routes">
          <RouterLink :to="route.path"> {{ route.name }}</RouterLink>
        </div>
      </nav>

    </div>
    <div class="vue-show-button">></div>

  </div>
</template>



<script  >
import { RouterLink } from 'vue-router'
import router from '../../router/index.js'

export default {
  data() {
    return {
      showList: false,
      routes: router.getRoutes()
    }
  },
  mounted() {
  

    document.addEventListener('keypress', (event) => {
      if (event.key === 'f' || event.key === 'F') {
        this.showList = !this.showList;
        // console.log(this);
      }
    });

    document.querySelector('.vue-show-button')
    .addEventListener('click', ()=>{
      this.showList = !this.showList;
    })
  }
};
</script>



<style scoped lang="less">
.vue-container {

  font-family: 'Courier New', Courier, monospace;

  line-height: 1.5;
  // max-height: 100vh;
  position: fixed;
  background-color: black;
  opacity: .9;


  box-shadow:5px -5px 20px 10px #00000036;

  left: 0;
  bottom: 1dvh;

  z-index: 999;
  margin: 2em;
  &.open{
  padding: 1em;

  }

  .vue-show-button{
    content: '>';
    display: block;
    color: wheat;
    cursor: pointer;
    padding: 20px 15px;
    line-height: 0;
    position: absolute;
    left: -16px;
    bottom: -16px;
    background-color: #3a3a3a;  
  } 

  .vue-button-list {
    width: 30px;
    height: 30px;
    background-color: black;
    color: gray;
    border: 1px solid #333;
    border-radius: 5px;
    cursor: pointer;
  }


}



.vue-nav {
  width: auto;
  font-size: 14px;
  text-align: center;

  display: flex;
  flex-direction: column;
  // margin-top: 2rem;
}

.vue-nav a.router-link-exact-active {
  color: lightgreen;
  text-decoration: underline;


}

.vue-nav a.router-link-exact-active:hover {
  background-color: transparent;
}

.vue-nav a {
  text-decoration: none;
  color: wheat;
  display: inline-block;
  padding: 0 1rem;
  font-size: 19px;
  // margin-left: .5rem;
  border-left: 1px solid var(--color-border);

  &:hover {
    color: lightskyblue;
  }
}

.vue-nav a:first-of-type {
  // border: 0;
}


.vue-container {
  display: flex;
  // place-items: top;
  // padding-right: calc(var(--section-gap) / 2);
}

.logo {
  margin: 0 2rem 0 0;
}

.vue-container .vue-wrapper {
  margin-left: 34px;
  display: flex;
  // place-items: flex-start;
  flex-wrap: wrap;
}

.vue-nav {
  text-align: left;
  margin-left: -1rem;
  font-size: 1rem;

  padding: 0rem 0;
  // margin-top: 1rem;
}
</style>
