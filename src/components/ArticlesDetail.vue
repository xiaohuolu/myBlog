<template lang="html">
   <div class="article-wrap">
     <Nav></Nav>

      <div class="article" v-for="item in articleList">
        <h1>小程序学习手册：hello world</h1>
        <router-view class="aaa"></router-view>
        <div class="postMessage">
          <p>作者：{{item.author}}</p>
          <p>发布于：{{item.releaseTime}}</p>
          <p>更新于：{{item.updateTime}}</p>
        </div>
        <div class="description">
          {{item.description}}
        </div>
      </div>
   </div>

</template>

<script>
import Nav from '@/components/Nav'
export default {
  name:'ArticlesDetail',
  data(){
    return{
      articleList:[
        {
          title:"小程序学习手册：hello world",
          author:"cxn",
          releaseTime:"2018-03-29 09:35",
          updateTime:"2018-03-29 09:35",
          description:"  我们现在有了一个空白的微信小程序项目，现在要去一步一步理解小程序里面的东西。下面我们要了解一下小程序的主配置，创建小程序应用，添加小程序上的页面。还要明白 wxml（标签） 与 wxss （样式）。 我们现在有了一个空白的微信小程序项目，现在要去一步一步理解小程序里面的东西。下面我们要了解一下小程序的主配置，创建小程序应用，添加小程序上的页面。还要明白 wxml（标签） 与 wxss （样式）。 我们现在有了一个空白的微信小程序项目，现在要去一步一步理解小程序里面的东西。下面我们要了解一下小程序的主配置，创建小程序应用，添加小程序上的页面。还要明白 wxml（标签） 与 wxss （样式）。 我们现在有了一个空白的微信小程序项目，现在要去一步一步理解小程序里面的东西。下面我们要了解一下小程序的主配置，创建小程序应用，添加小程序上的页面。还要明白 wxml（标签） 与 wxss （样式）。 我们现在有了一个空白的微信小程序项目，现在要去一步一步理解小程序里面的东西。下面我们要了解一下小程序的主配置，创建小程序应用，添加小程序上的页面。还要明白 wxml（标签） 与 wxss （样式）。 我们现在有了一个空白的微信小程序项目，现在要去一步一步理解小程序里面的东西。下面我们要了解一下小程序的主配置，创建小程序应用，添加小程序上的页面。还要明白 wxml（标签） 与 wxss （样式）。 我们现在有了一个空白的微信小程序项目，现在要去一步一步理解小程序里面的东西。下面我们要了解一下小程序的主配置，创建小程序应用，添加小程序上的页面。还要明白 wxml（标签） 与 wxss （样式）。 我们现在有了一个空白的微信小程序项目，现在要去一步一步理解小程序里面的东西。下面我们要了解一下小程序的主配置，创建小程序应用，添加小程序上的页面。还要明白 wxml（标签） 与 wxss （样式）。 我们现在有了一个空白的微信小程序项目，现在要去一步一步理解小程序里面的东西。下面我们要了解一下小程序的主配置，创建小程序应用，添加小程序上的页面。还要明白 wxml（标签） 与 wxss （样式）。 我们现在有了一个空白的微信小程序项目，现在要去一步一步理解小程序里面的东西。下面我们要了解一下小程序的主配置，创建小程序应用，添加小程序上的页面。还要明白 wxml（标签） 与 wxss （样式）。 我们现在有了一个空白的微信小程序项目，现在要去一步一步理解小程序里面的东西。下面我们要了解一下小程序的主配置，创建小程序应用，添加小程序上的页面。还要明白 wxml（标签） 与 wxss （样式）。"
        }
      ]
    }
  },
  components:{
    Nav
  }
}
</script>

<style scoped lang="scss">
.article-wrap{


   & .article{
     padding:15vh 15vw;

    & h1{
        cursor: pointer;
        text-align: center;
      & a{
          color:#000;
        }
      }

      & .postMessage{
       display: flex;
       justify-content: space-around;
        margin:8vh 0;
        font-size:1rem;
        color:#999;

        & p{
          line-height:2;
        }
      }
   }

   .description{
      font-size:1.1rem;
      text-align: left;
      line-height:2;
      text-indent: 2rem;
   }
   }
</style>
