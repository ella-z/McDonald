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
        <div class="wrapper">  
            <div class="MenuTabs">
                    <div class="Tab" ref="left">
                        <ul class="lcontent">
                            <!--<li class="search">
                                <i class="iconfont">&#xe62e;</i>
                                搜索
                            </li>-->
                            <li :key='index' 
                                v-for="(item,index) in TabList"
                                ref="lItem"
                                @click="_inchange(index)"
                                :class="{is_active:index==actli}">
                                <div 
                                class="icon" 
                                :style="{background:'url('+item.url+') no-repeat',backgroundSize:'100%'}" 
                                v-show="open==index+1" 
                                :class="{drink:item.label==='饮品'}"></div>
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
                                :style="{background: 'url(' + food.url + ') no-repeat  ',backgroundSize:'100%'}"
                                @click="toMenuCard(index,submenuIndex)"
                                >    
                                <div class="rotate"></div>
                                    <div v-show="index<2" class="icombo">
                                        <div class=" optional" v-show="!item.submenu[submenuIndex].count">
                                             套餐<i class="iconfont" >&#xe731;</i>
                                        </div>
                                        <div v-show="item.submenu[submenuIndex].count">
                                            <i class="iconfont" @click.stop="reduceCar(index,submenuIndex)">&#xe620;</i>
                                            <span class="itemsCount" >{{item.submenu[submenuIndex].count}}</span>
                                            <i class="iconfont" @click.stop="addCar(index,submenuIndex)">&#xe626;</i>
                                        </div>
                                    </div>
                                     <div class="optional" v-show="index===2">
                                         <i class="iconfont" v-show="!item.submenu[submenuIndex].count">&#xe731;</i>
                                        <div v-show="item.submenu[submenuIndex].count" class="operator">
                                            <i class="iconfont" @click.stop="reduceCar(index,submenuIndex)">&#xe620;</i>
                                            <span class="itemsCount" >{{item.submenu[submenuIndex].count}}</span>
                                            <i class="iconfont" @click.stop="addCar(index,submenuIndex)">&#xe626;</i>
                                        </div>
                                    </div>
                                     <div class="single" v-show="index>2" >
                                         <i class="iconfont" v-show="item.submenu[submenuIndex].count" @click.stop="reduceCar(index,submenuIndex)">&#xe620;</i>
                                         <span class="itemsCount" v-show="item.submenu[submenuIndex].count">{{item.submenu[submenuIndex].count}}</span>
                                         <i class="iconfont" @click.stop="addCar(index,submenuIndex)">&#xe626;</i>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <shopCar :foodList="foodList" @changeList="changeList" :distribution="distribution"></shopCar>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
import slideBanner from '../../components/slideBanner'
import headerNav from '../../components/headerNav'
import Vue from "vue"
import shopCar from '../../components/shopCar'

export default {
    components:{slideBanner,headerNav,shopCar},
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
            items: [],
            num:0,
            session:JSON.parse(window.sessionStorage.getItem('foodList'))
        }
    },
   created () {
        // 初始化 better-scroll 必须要等 dom 加载完毕
        setTimeout(() => {
            this._initSrcoll()
        }, 20);
    },
    watch:{
        TabList(val){
            console.log(val);
        }
    },
    computed:{
         goods () {
            return this.$store.state.msg.goods
        },
        foodList(){    //筛选被添加进入购物车的选项
            let foodList=[];
            for(let i=0;i<this.TabList.length;i++){
                for(let j=0;j<this.TabList[i].submenu.length;j++){
                    if(this.TabList[i].submenu[j].count)
                    {
                        foodList.push(this.TabList[i].submenu[j]);
                    }
                }
            }
            this.$store.commit('setValue',this.TabList);
            return  foodList;
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
    methods:{
        changeList(){
            for(let i=0;i<this.TabList.length;i++){
                for(let j=0;j<this.TabList[i].submenu.length;j++){  //清空购物车
                    if(this.TabList[i].submenu[j].count)
                    {
                        Vue.delete(this.TabList[i].submenu[j],"count");
                    }
                }
            }
        },
        reduceCar(index,submenuIndex){
            this.TabList[index].submenu[submenuIndex].count--;
        },
        addCar(index,submenuIndex){
            if(!this.TabList[index].submenu[submenuIndex].count){
                Vue.set(this.TabList[index].submenu[submenuIndex],"count",1);
            }else{
                this.TabList[index].submenu[submenuIndex].count++;
            }
        },
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
                click:false,
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
/*.rotate{
    position:relative;
    animation:mymove 5s infinite 0 1;
    -webkit-animation:mymove 5s infinite;
    animation-iteration-count:1;
    background-color: pink;                   //动画效果
}
@keyframes mymove
{
	from {left:0px; transform:rotate(0deg);}
	to {left:10vw; transform:rotate(360deg); background-color: skyblue;}
}

@-webkit-keyframes mymove //Safari and Chrome
{
	from {left:0px; transform:rotate(0deg);}
	to {left:10vw; transform:rotate(360deg);}
}*/

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
                        width: 9vw;
                        height: 12vw;
                        
                    }
                    .drink{
                        width: 5vw;
                        height: 13vw;
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
                    height: 10vw;
                    width: 68vw;
                    padding: 35vw 0 0 5vw;
                    .optional{
                        display: flex;
                        z-index:5;
                        width: 18vw;
                        flex-direction: row;
                        align-items: center; 
                        i{
                            color:#000;
                            font-size: 6vw;
                        }
                        .operator{
                            i{
                                font-size: 5vw;
                            }
                        }
                    }
                    .icombo{
                        margin-top: 6vw;
                        i{
                            color: #000;
                            font-size: 5vw;
                        }
                    }
                    .single{
                        display: flex;
                        flex-direction: row;
                         i{
                             font-size: 5vw;
                             color: #000;
                         }
                          
                    }
                }
                .big{
                    height: 20vw;
                }
            }
        }
    }
}
.itemsCount{
                            text-align: center;
                            color: rgb(173, 2, 2);
                            min-width: 5vw;
                            font-size: 5vw;
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
