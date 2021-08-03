<template>
  <div id="app">
    <img alt="Vue logo" :src="src">
    <img alt="Vue logo" src="./assets/logo.png">
    {{ src }}
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Calculator />
  </div>
</template>

<script>
import Logo from './assets/logo.png'
import HelloWorld from './components/HelloWorld.vue'
import Calculator from './components/Calculator.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Calculator
  },
  data() {
    return {
      src: Logo
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
