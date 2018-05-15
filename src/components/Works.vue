 <template lang="html">
  <div class="works">
    <Nav></Nav>

    <div class="item-wrap" >

    <div class="item" v-for="(item,index) in itemList">
       <img :src="item.src" alt=""/>
       <p> {{item.name}}</p>
    </div>


  </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
export default {
  name:'Works',
  data(){
     return{
       itemList:[
         {
           name:'HQ是个大胖子？？',
           src:'/1.jpg'
         },
         {
           name:'是的',
           src:'/2.jpg'
         },
         {
           name:'为什么这么胖啊',
           src:'/3.jpg'
         },
         {
           name:'因为就知道吃啊',
           src:'/4.jpg'
         },
         {
           name:'哦 他是猪吗',
           src:'/5.jpg'
         },
         {
           name:'他比猪还能吃',
           src:'/6.jpg'
         },
         {
           name:'那他怎么穿衣服啊',
           src:'/7.jpg'
         },
         {
           name:'他一般都把两件衣服扯开',
           src:'/8.jpg'
         },
         {
           name:'做成一件穿',
           src:'/9.jpg'
         },
         {
           name:'那他能走路吗',
           src:'/10.jpg'
         },
         {
           name:'他走路很困难',
           src:'/11.jpg'
         },
         {
           name:'但滚起来很快',
           src:'/12.jpg'
         },
         {
           name:'哇 那我能把他当皮球踢吗',
           src:'/13.jpg'
         },
         {
           name:'当然可以',
           src:'/14.jpg'
         },
         {
           name:'如果你愿意的话',
           src:'/15.jpg'
         },
         {
           name:'你还可以用他投个篮',
           src:'/16.jpg'
         },
         {
           name:'或者做个热气球，让他上天',
           src:'/17.jpg'
         },
         {
           name:'生气的时候',
           src:'/18.jpg'
         },
         {
           name:'扎烂他',
           src:'/19.jpg'
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
 .item-wrap{
   display: flex;
   flex-wrap: wrap;
   width:88vw;
   justify-content:space-between;
    margin:8vh auto 0;

   .item{
     width:24rem;
     // width:28vw;
    margin:1rem .4rem;
    text-align:left;

     & img{
       height:35vh;
       width:100%;
       // height:auto;
     }
     & p{
       font-size:.8rem;
       width:100%;
       text-overflow:ellipsis;
       overflow: hidden;
       white-space: nowrap;
     }
   }
 }
</style>
