<template>
    <div>
        <div class="wrapper" ref="wrapper"> 
            <!-- <div class="head">
                <div class="icon" @click="back()">
                    <i class="iconfont">&#xe61b;</i>
                </div>
            </div>-->
            <div class="MenuTabs">
                <div class="Tab" ref="left">
                    <ul class="lcontent">
                        <li :key='index' 
                            v-for="(item,index) in TabList"
                            ref="lItem"
                            @click="_inchange(index)"
                            :class="{is_active:index==actli}">
                            <img :src="item.src" v-show="open==index+1" :class="{drink:item.label==='饮品'}"/>
                            <span  v-html="item.label"> {{item.label}}</span>
                        </li>
                    </ul>
                </div>
                <div class="Card" ref="righ"> 
                    <div>
                        <div ref="good" :key="index" v-for="(item,index) in TabList">
                            <ul class="rcontent" >
                                    <li v-for="food in item.foods" :key="food.name">{{food.name}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'

export default {
    data(){
        return{
            actli: 0,
            arr: [0],
            activeName:'1',
            flag: true,
            open:1,
            scrollY:0,
            current:"1",
              carouselList:[
                {
                      
                      src:require('../views/img/takeout/takeout1.png')
                 },
                {
                      src:require('../views/img/takeout/takeout2.png')
                 },
                {
                      src:require('../views/img/takeout/takeout3.png')
                 },
                {
                      src:require('../views/img/takeout/takeout4.png')
                 },
            ],
            TabList:[
                {
                   name:"雪人奇缘系列",
                   src:require('../views/img/MenuTabsIcon/雪人奇缘.png'),
                   label:"雪人<br />奇缘<br />全系列",
                    foods:[
                    {
                        name:"a1"
                    },
                     {
                        name:"b1"
                    },
                     {
                        name:"c1"
                    }
                    ]
                   
                },
                {
                    name:"安格斯黑金系列",
                   src:require('../views/img/MenuTabsIcon/安格斯.png'),
                    label:"安格斯<br />黑金<br />系列",
                    foods:[
                    {
                        name:"a2"
                    },
                     {
                        name:"b2"
                    },
                     {
                        name:"c2"
                    }
                    ]
                },
                 {
                     name:"超值三件套",
                      src:require('../views/img/MenuTabsIcon/超值三件套.png'),
                    label:"超值<br />三件套",
                    foods:[
                    {
                        name:"a3"
                    },
                     {
                        name:"b3"
                    },
                     {
                        name:"c3"
                    }
                    ]
                },
                 {
                     name:"随心配1+1=12",
                    src:require('../views/img/MenuTabsIcon/随心配.png'),
                    label:"随心配<br />1+1=12",
                    foods:[
                    {
                        name:"a4"
                    },
                     {
                        name:"b4"
                    },
                     {
                        name:"c4"
                    }
                    ]
                },
                 {
                     name:"金拱门桶",
                     src:require('../views/img/MenuTabsIcon/全家桶.png'),
                    label:"金拱门<br />桶",
                    foods:[
                    {
                        name:"a5"
                    },
                     {
                        name:"b5"
                    },
                     {
                        name:"c5"
                    }
                    ]
                },
                 {
                     name:"500大卡套餐",
                      src:require('../views/img/MenuTabsIcon/500大卡套餐.png'),
                    label:"500<br />大卡<br />套餐",
                    foods:[
                    {
                        name:"a6"
                    },
                     {
                        name:"b6"
                    },
                     {
                        name:"c6"
                    }
                    ]
                },
                 {
                     name:"开心乐园餐",
                      src:require('../views/img/MenuTabsIcon/开心乐园.png'),
                    label:"开心<br />乐园餐",
                    foods:[
                    {
                        name:"a7"
                    },
                     {
                        name:"b7"
                    },
                     {
                        name:"c7"
                    }
                    ]
                },
                 {
                     name:"小食甜点玩具",
                      src:require('../views/img/MenuTabsIcon/小吃.png'),
                    label:"小食<br />甜点<br />玩具",
                    foods:[
                    {
                        name:"a8"
                    },
                     {
                        name:"b8"
                    },
                     {
                        name:"c8"
                    }
                    ]
                },
                 {
                     name:"主食",
                      src:require('../views/img/MenuTabsIcon/主食.png'),
                    label:"主食",
                    foods:[
                    {
                        name:"a9"
                    },
                     {
                        name:"b9"
                    },
                     {
                        name:"c9"
                    }
                    ]
                },
                {
                    name:"饮品",
                     src:require('../views/img/MenuTabsIcon/饮品.png'),
                    label:"饮品",
                    foods:[
                    {
                        name:"a10"
                    },
                     {
                        name:"b10"
                    },
                     {
                        name:"c10"
                    }
                    ]
                },
            ]
        }
    },
   created () {
        // 初始化 better-scroll 必须要等 dom 加载完毕
        setTimeout(() => {
            this._initSrcoll()
        }, 20)
    },
    computed:{
         goods () {
            return this.$store.state.msg.goods
        }
    },
    mounted () {
        setTimeout(() => {
    /* eslint-disable no-new */
     this.Lscroll = new Bscroll(this.$refs.left, {
                click:true
            });
        this.Rscroll = new Bscroll(this.$refs.righ, {
                // 获取 scroll 事件，用来监听。
                click:true,
                probeType: 3
            });
      this.$refs.good.forEach((el, index) => {
        this.arr.push(el.offsetHeight + this.arr[index])
      })      
      this.Rscroll.on('scroll', (res) => {
       if (this.flag) {
          this.scrollY = Math.abs(res.y)
          for (let i = 0; i < this.arr.length; i++) {
            if (this.scrollY > this.arr[i] && this.scrollY < this.arr[i + 1]) {
              this.actli = i
              this.open=i+1
              if (i === this.$refs.lItem.length - 2) {
                this.Lscroll.scrollToElement(this.$refs.lItem[1], 100, 0, 0)
              }
              if (i === 2) {
                this.Lscroll.scrollToElement(this.$refs.lItem[0], 100, 0, 0)
              }
            }
          }
        }
      })
    })
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        change(index){
            this.cur=index;
           this.open=index;
        },
      _initSrcoll(){
        
        this.Rscroll.on('scroll', (res) => {
            this.scrollY = Math.abs(res.y)
      })
      },
      _inchange (index) {
          this.flag = false
          this.actli = index
          this.open=index+1
          this.Rscroll.scrollToElement(this.$refs.good[index], 100, 0, 0)
          setTimeout(() => {
            this.flag = true
          }, 100)
        },
    },
   
}
</script>
<style lang="scss" scoped>
@font-face {
  font-family: 'iconfont';  /* project id 1451681 */
  src: url('//at.alicdn.com/t/font_1451681_a1rz7adghrl.eot');
  src: url('//at.alicdn.com/t/font_1451681_a1rz7adghrl.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1451681_a1rz7adghrl.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1451681_a1rz7adghrl.woff') format('woff'),
  url('//at.alicdn.com/t/font_1451681_a1rz7adghrl.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1451681_a1rz7adghrl.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    font-size: 6vw;
    color: #9D9D9D;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}

.wrapper{
    position: absolute;
    top:0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display:flex;
    flex-direction: row;
    .MenuTabs{
        display: flex;
        flex-direction: row;
        .Tab{
            ul{
                padding: 0;
                margin: 0;
                li{
                    background-color: #fff;
                    list-style: none;
                    border-bottom:1px solid #F8F8F8;
                    width: 19vw;
                    height: 20vw;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    span{
                        color: #2c2b2b;
                        font-size: 3.5vw;
                        text-align: center
                    }
                }
                .search{
                    i{
                        font-size: 5vw;
                        color: #000;
                        }
                    
                }
                .is_active{
                    border-left:1vw solid #FFC836;
                    background-color: #F8F8F8 ;
                    height: 33vw;
                    img{
                        width: 8vw;
                        height: 8vw;
                        margin:10% 0; 
                    }
                    .drink{
                        width: 5vw;
                        height: 10vw;
                    }
                }
                
            }
        }
        .Card{
            width: 80vw;
            .rcontent{
                li{
                    border-radius: 2vw;
                    margin:0 0 5% 6%;
                    background-color: pink;
                    height: 40vw;
                    width: 70vw;
                }
            }
        }
    }
}


.head{
    height: 10vw;
    width: 100%;
    padding: 2%;
    background-color: #ffffff;
    position: fixed;
    top:0;
    z-index: 999999;
    .icon{
        width: 0vw;
       padding-top: 2%;
    }
}

</style>
