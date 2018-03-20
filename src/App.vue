<template>
  <div id="app">
    <app-header></app-header>
    <div class="container">
      <router-view></router-view>      
    </div>
  </div>
</template>

<script>
  import Home from './components/Home'
  import Header from './components/Header'

  export default {
    name: 'App',
    data() {
      return {

      }
    },
    components: {
      'appHeader': Header,
    }
  }
</script>

<style>
  a {
   outline: 0;
  }
</style>
