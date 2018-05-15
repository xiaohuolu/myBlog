<template lang="html">
  <div class="">
    <Nav></Nav>
   <div class="home-wrap">

     <img src="/home_img1.png" alt="" >
     <h1>Sakura Bird!</h1>
   </div>

 </div>
</template>

<script>
import Nav from '@/components/Nav'
export default {
  name: 'Home',
  components:{
    Nav
  },
  data(){
     return{
       img_rotate:false
     }
  }
  // methods:{
  //   img_xz:function(){
  // this.img_rotate=true
  //   }
  // }
}
</script>

<style scoped lang="scss">
$radius:50%;
$imgHW:200px;
$fz:4rem;
$color:rgb(108,181,252);
$mt10:3vh;

.home-wrap{
    // height:auto;
    padding-top:15vh;
  & img{
    width:$imgHW;
    height:$imgHW;
    margin:auto;
    border-radius:$radius;
    transition:1s;
   &:hover{
      transform: rotate(-360deg);

    }
  }

  h1{
    margin-top:$mt10;
    font-size:$fz;
    color:$color;
  }
}

</style>
