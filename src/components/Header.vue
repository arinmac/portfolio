<template>

<b-container fluid class="">
  <!-- <b-row no-gutters> -->
    <!-- <b-col cols="3"> -->
      <b-navbar toggleable="lg" vertical type="dark" variant="dark">
        <b-navbar-brand href="#">
            <b-img width="80" class="arinlogo" src="../assets/Asset 1.svg" alt="arin"></b-img>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
         <b-nav-item to="/portfolio">Portfolio</b-nav-item>
          </b-navbar-nav>
        </b-collapse>



     
      

      </b-navbar>
    <!-- </b-col> -->
  <!-- </b-row> -->
</b-container>

</template>
<script>
export default {
    name: 'Header'
}
</script>

<style scoped lang="scss">
.arinlogo{
  opacity: 0.5;
}
</style>