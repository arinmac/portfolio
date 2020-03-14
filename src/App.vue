<template>
  <b-container fluid class="m-4" id="app" >
    <Header></Header>
    <router-view></router-view>
    
  </b-container>
</template>

<script>
import Header from './components/Header'
import router from './router'
export default {
  name: 'App',
  router,
  components: {
    Header
  }

}
</script>

<style lang="scss">
@import '/../src/assets/styles.scss';

#app {
  font-family:  Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $white;
  padding: 25px 150px;
  margin: 0 !important;
}





</style>
