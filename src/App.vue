<template>
  <div id="app">
    <router-view/>

  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style lang="scss">
 *{
   margin:0;
   padding:0;
 }
 $bg_color:rgb(250,250,250);

#app {
  // font-family: '宋体', Helvetica, Arial, sans-serif;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
  font-size:1.6vw;
  background:$bg_color;
}
a{
  text-decoration: none;
  color:#000;
  display: block;
&.router-link-active{
    color: rgb(108,181,252);
}
}

</style>
