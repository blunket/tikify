<template>
  <div id="app" class="app">
    <link  rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.css">
    <router-view/>
  </div>
</template>




<style lang="scss">
#app {
  width: 100%;
  overflow: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url(~@/assets/texture.jpg);
  background-repeat: no-repeat;
  background-position: top;


}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
<script>

