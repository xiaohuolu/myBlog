<template lang="html">
   <div class="articles-wrap">
     <Nav></Nav>

      <div class="article" v-for="item in articleList">
        <h1> <router-link to="/articles/detail"> {{item.title}}</router-link></h1>
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
  name:'Articles',
  data(){
    return{
      articleList:[
        {
          title:"小程序学习手册：hello world",
          author:"cxn",
          releaseTime:"2018-03-29 09:35",
          updateTime:"2018-03-29 09:35",
          description:"  我们现在有了一个空白的微信小程序项目，现在要去一步一步理解小程序里面的东西。下面我们要了解一下小程序的主配置，创建小程序应用，添加小程序上的页面。还要明白 wxml（标签） 与 wxss （样式）。"
        },
        {
          title:"小程序学习手册：创建小程序项目",
          author:"cxn",
          releaseTime:"2018-04-01 22:54",
          updateTime:"2018-04-01 22:54",
          description:"现在我们可以去理解应用里的 模型（Models）相关的东西了。一个模型是一个类，你可以使用框架里的命令行工具去创建模型文件。每个模型都会对应数据库里的一个数据表，比如你创建了一个叫 User 的模型，默认它对应的就是数据库里的 users 数据表。注意模型是单数，数据表是复数形式。"
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
.articles-wrap{


  & .article{
     border-bottom:1px solid #ccc;
     padding:15vh 15vw;

      & h1{
        cursor: pointer;
        text-align: left;
      }

      & .postMessage{
        text-align: left;
        margin:8vh 0;
        font-size:.9rem;
        color:#999;

        & p{
          line-height:1.5;
        }
      }
   }

   .description{
      font-size:1rem;
      text-align: left;
      line-height:2;
      display: -webkit-box;
      -webkit-box-orient:vertical;
      -webkit-line-clamp:5;
      overflow: hidden;
   }
   }
</style>
