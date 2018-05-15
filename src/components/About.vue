<template lang="html">
  <div class="about">
    <Nav></Nav>
    <div class="about-wrap">
      <div class="about">
        <h2>关于博客</h2>
    <div class="text">

           <p>入行前端快一年了，虽然还是个前端菜鸡，但是也有想成为大神的心。一直想做个自己的博客，或者说一个可以记录自己成长的地方。  </p>
             <p>平时自己学到的东西或者经验的积累只能放在文本文档里，然后保存在电脑上，随着文件的增多，看起来很乱，找起来也很麻烦。 </p>
             <p>正好看完了vue的教程，很多东西还不熟练，就用vue做了这个小博客，算是练练手，也可以将自己遇到的问题分享出来，记录自己的成长之路。 </p>
             <p>看了很多博客的界面，最终决定还是做的简单一点，东西太多效果太多会让人眼花缭乱，心烦气躁，气喘吁吁，花里胡哨，吞吞吐吐，恍恍惚惚。（其实是不知道那些效果用vue怎么实现比较好哈哈） </p>
             <p>博客还没做完，但是想不出来还要做点什么了，暂时就这样吧，后面想到什么东西了再加。 </p>
           </div>

      </div>

      <div class="about">
        <h2>关于我们</h2>
        <div class="text">

               <p>我们指的是两个很懒的小胖子。我是菜鸡前端，他是后台小菜。我们一起买了服务器和域名，然后一起完善这个小博客。</p>
              <p>因为域名是Sakura Bird，所以此博客命名为樱鸟。</p>
              <p>我喜欢看海贼王，他喜欢看铁胆火车侠。</p>
              <p>我说年轻的时候要勇敢一点，</p>
              <p>他说:"烤~鸡翅膀~~，我~喜欢吃~~"。</p>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
export default {
  name:"About",
  components:{
    Nav
  }
}
</script>

<style scoped lang="scss">
 .about-wrap{

   padding:0 20vw;
   text-align: left;

   .about{
     margin:20vh 0;

     .text{
       font-size:1rem;
       text-indent: 2rem;
       margin-top:3vh;
       p{
         line-height: 3;
       }
     }
   }
 }
</style>
