<template lang="html">
   <div class="nav">
     <ul>

       <li v-for="(item,index) in navList"> <router-link  :to="item.path">{{item.text}}</router-link> </li>

     </ul>
   </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      navList: [{
          text: "home",
          path: '//'
        },
        {
          text: "articles",
          path: '/articles'
        },
        {
          text: "works",
          path: '/works'
        },
        // {
        //   text: "friends",
        //   path: '/friends'
        // },
        {
          text: "about",
          path: '/about'
        }

      ],
      current: 0
    }


  }

}
</script>

<style scoped lang="scss">

.nav {
    width: 100vw;
    padding: 1.4vmax 0;
    margin: 0 -1vmax;
    background:#fff;
    // min-height:3.2rem;
    ul {
        list-style: none;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: auto;
        font-size: 60%;
        letter-spacing: 0.25rem;
        text-transform: uppercase;

        li {
            cursor: pointer;
            margin: 0 1.5%;
            line-height: 2;
            // transform:translateY(-50%);
            font-weight: bold;


        }
    }
}
</style>
