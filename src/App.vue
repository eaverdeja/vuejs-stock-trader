<template>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    
  </head>
  <body>
    <div class="container" id="app">
      <app-header></app-header>
      <transition name="slide" mode="out-in">
        <router-view class="mt-3"></router-view>
      </transition>
    </div>
  </body>
</html>
</template>

<style>

.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-10px);
    opacity: 0;
  } to {
    transform: translateY(0);
    opacity: 1;
  } 
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  } to {
    transform: translateY(-10px);
    opacity: 0;
  }
}

</style>

<script>
import Header from "./components/Header.vue";

export default {
  name: 'app',
  components: {
    appHeader: Header
  },
  created() {
    this.$store.dispatch('initStocks')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
