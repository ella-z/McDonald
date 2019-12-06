<template>
    <div class="container">
        <headerNav :title="distribution"></headerNav>
        <cube-slide ref="slide" :data="items" @change="changePage" class="slide">
            <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
                <a>
                    <img :src="item.src">
                </a>
            </cube-slide-item>
        </cube-slide>
        <div class="wrapper" > 
            <div class="MenuTabs">
                    <div class="Tab" ref="left">
                        <ul class="lcontent">
                            <li class="search">
                                <i class="iconfont">&#xe62e;</i>
                                搜索
                            </li>
                            <li :key='index' 
                                v-for="(item,index) in TabList"
                                ref="lItem"
                                @click="_inchange(index)"
                                :class="{is_active:index==actli}">
                                <div class="icon" :style="{background:'url('+item.url+') no-repeat',backgroundSize:'100%'}" v-show="open==index+1" :class="{drink:item.label==='饮品'}"></div>
                                <span  v-html="item.label"> {{item.label}}</span>
                            </li>
                        </ul>
                </div>
                <div class="Card" ref="righ"> 
                    <div>
                        <div ref="good" :key="index" v-for="(item,index) in TabList">
                            <ul class="rcontent" >
                                <li v-for="(food,submenuIndex) in item.submenu" 
                                :key="submenuIndex" :class="{big:index<2}" 
                                :style="{background: 'url(' + food.url + ') no-repeat center ',backgroundSize:'100%'}"
                                @click="(index<2)?toMenuCard(index,submenuIndex):''"
                                >    
                                     <span class="icombo" v-show="index<2">套餐<i class="iconfont" >&#xe731;</i></span>
                                     <span class="optional" v-show="index===2"><i class="iconfont" >&#xe731;</i></span>
                                     <span class="single" v-show="index>2"><i class="iconfont">&#xe626;</i></span>
                                </li>
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
import slideBanner from '../../components/slideBanner'
import headerNav from '../../components/headerNav'

export default {
    components:{slideBanner,headerNav},
    data(){
        return{
            distribution:this.$route.query.distribution,
            actli: 0,
            arr: [0],
            activeName:'1',
            flag: true,
            open:1,
            scrollY:0,
            current:"1",
            TabList:this.$store.state.data,
            items: []
        }
    },
   created () {
        // 初始化 better-scroll 必须要等 dom 加载完毕
        setTimeout(() => {
            this._initSrcoll()
        }, 20);
    },
    computed:{
         goods () {
            return this.$store.state.msg.goods
        }
    },
    
    mounted () {
    var that =this;
        this.axios.post('http://localhost:80/mcdonald/poster.php').then(function(response){
        that.items=response.data;
    })
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
            if(this.$refs.good!==undefined){
                   this.$refs.good.forEach((el, index) => {
                    this.arr.push(el.offsetHeight + this.arr[index])
                })    
            }
     
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
    updated(){
       //试试使用vuex解决
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
             this.Rscroll = new Bscroll(this.$refs.righ, {
                // 获取 scroll 事件，用来监听。
                click:true,
                probeType: 3
            });
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
        changePage(current) {
            //console.log('当前轮播图序号为:' + current)
        },
        clickHandler(item, index) {
            //console.log(item, index)
        },
        toMenuCard(index,submenuIndex){
            this.$router.push({path:'/MenuCard',query:{indexID:index,submenuIndex:submenuIndex}});
        }
    },
   }
</script>
<style lang="scss" scoped>
.container{
    background-color: #F8F8F8;
}
.wrapper{
    position: absolute;
    top:60vw;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display:flex;
    flex-direction: row;
    background-color: #F8F8F8;
    padding-top: 3vw;
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
                   margin: 0;
                   display: flex;
                   flex-direction: column;
                   width: 20vw;
                   height: 20vw;
                   align-items: center;
                   justify-content: center;
                   background-color: #fff;
                   i{
                        margin-bottom: 2vw;
                        font-size: 4vw;
                        color: #000;
                   }
                }
                .is_active{
                    border-left:1vw solid #FFC836;
                    background-color: #F8F8F8 ;
                    height: 33vw;
                    .icon{
                        width: 8vw;
                        height: 8vw;
                        
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
                    border-radius: 1vw;
                    margin:0 0 5% 6%;
                    box-shadow:1px 1px 5px 0px #9D9D9D;
                    height: 45vw;
                    width: 73vw;
                    span{
                        display: flex;
                        z-index:5;
                        flex-direction: row;
                        align-items: center;
                    }
                    i{
                        color:#000;
                        font-size: 6vw;
                    }
                    .icombo{
                        padding: 41vw 0 0 5vw;
                    }
                    .optional{
                         padding: 35vw 0 0 5vw;
                    }
                    .single{
                         padding: 35vw 0 0 5vw;
                         i{
                             font-size: 5vw;
                         }
                    }
                }
                .big{
                    height: 55vw;
                }
            }
        }
    }
}

.x{
    width: 100%;
    height: 48vw;
    margin-top: 14vw;
}
.slide{
    margin-top:12vw;
    height: 48vw;
    img{
        width: 100%;
        height: 100%;
    }
}
</style>
