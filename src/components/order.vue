<template>
    <div>
        <div class="orange">
           <img src="../views/img/M记图标.png" />
        </div>
        <div class="content">
            <div class="way"> 
                <router-link  to="/menu" class="link">
                <div class="wayList" id="wayOne">
                    麦乐送外卖
                    <br />
                    <span>30分钟必达</span>
                    <img src="../views/img/外卖.png"/>
                </div>
                    </router-link>
                      <router-link  to="/menu" class="link">
                <div class="wayList">
                    到点取餐
                    <br />
                    <span>快速取餐免排队</span>
                    <img src="../views/img/堂食.png" />
                </div>
                 </router-link>
            </div>
 
            <div class="List">
                <ul 
                    :key="index"
                    v-for="(item,index) in list" >
                    <li><img :src="item.src"/></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components:{
   
    },
    data()
    {
        return{
            list:[
                {
                    src:require('../views/img/list1.png')
                },
                {
                     src:require('../views/img/list2.png')
                },
                 {
                     src:require('../views/img/list3.png')
                },
                 {
                     src:require('../views/img/list4.png')
                },
                 {
                     src:require('../views/img/list5.png')
                },
                 {
                     src:require('../views/img/list6.png')
                },
                 {
                     src:require('../views/img/list7.png')
                }
            ]
        }
    },
    methods:{

    }
}
</script>

<style lang="scss" >
.orange{
    position: absolute;
    background-color: #1B1B33;
    width: 100%;
    height: 40vw;
    z-index: -1;
    img{
        background-color: #fff;
        width: 15vw;
        height: 15vw;
        margin: 5% 0 0 41%;
        border-radius: 50%;
    }
}
.content{
 .way{
     display: flex;
     flex-direction: row;
     justify-content: center;
     padding: 35% 0 10%;
     .link{ 
           text-decoration: none;
           list-style: none;
            color:inherit;
     .wayList{
         width: 35vw;
         height: 45vw;
         box-shadow: 2px 2px 5px #A6A5A1;
         border-radius: 5%;
         background-color: #fff;
         padding:4%  0 0 4%;
         font-size: 4.5vw;
         span{
             font-size: 1.5vw;
             color: #444;
         }
         img{
            width: 29vw;
            height: 28vw;
            margin: 14% 0 0 12%;
         }
     }
    #wayOne{
         margin-right: 10vw;
     }}
 }
 .List{
     ul{
         padding: 0 0 0 3%;
         margin: 0;
          li{
                list-style: none;
                margin-bottom: -10%;
                img{
                    width: 94vw;
                    height: 38vw;
                    border-radius: 8px;
                    box-shadow: 0px 3px 3px #A6A5A1;
                }
            }
            margin-bottom: 16vw;
     }
 }
}

</style>
