<template>
    <div>
        <div class="orange" :class="{night:isnight===true,data:isdata===true}">
            <span>{{time}} {{userName}}</span>
        </div>
        <div class="content">
            <div class="way"> 
                <cube-popup type="my-popup" position="center" :mask-closable="true"  ref="PopupOrder" >
                    <div class="Popup">
                        <span>选择送达时间</span>
                        <div class="orderButton" @click="totake">现在就送</div>
                        <div class="orderButton" @click="showTimePicker">预约订单</div>
                    </div>
                    </cube-popup>
                <div class="link" @click="show()">
                    <div class="wayList" id="wayOne">
                        <span>麦乐送外卖</span>
                        <br />
                        <span class="small">30分钟必达</span>
                        <img src="http://localhost:80/mcdonald/assets/img/外卖.png" class="takeOut"/>
                    </div>
                </div>
                 <div class="link" @click="toshop">
                    <div class="wayList">
                        <span>到店取餐</span>
                        <br />
                        <span class="small">快速取餐免排队</span>
                        <img src="http://localhost:80/mcdonald/assets/img/堂食.png" class="eatIn"/>
                    </div>
                 </div>
            </div>
            <List :list='list' class="list"></List>
        </div>
    </div>
</template>

<script>
import List from '../components/list'
import { sync } from 'glob';

export default {
    components:{
        List,    //声明组件List
    },
    data()
    {
        return{
            gettime:'', //获取当前时间
            isnight:false,  //判断是白天还是晚上
            isdata:false,
            time:'',      //根据时间，显示信息
            list:'',
            isGet:this.$store.state.isGet,
            userName:'' //登录用户的用户名
        }
    },
    created(){
        //window.localStorage.removeItem('num');
        this.currentTime();
        if(window.sessionStorage.list){     //刷新之后购物车不变
            this.$store.commit('getvalue',JSON.parse(window.sessionStorage.list));
        }else{
            if(!this.isGet)
                {
                    this.$store.dispatch('getdata');
                    this.$store.commit('changeGet');
                }
        }
        if(window.sessionStorage.account){
            if(window.sessionStorage.identity==='administrator'){
                this.userName='管理员'
            }else{
                 this.userName=window.sessionStorage.account; 
            }
        }
    },
    mounted(){ 
        var that = this;     //向数据库请求poster信息
        this.axios.get('http://localhost:80/mcdonald/poster.php').then(function(response){
             that.list=response.data;
        },function(err){
            console.log('poster.php请求失败');
        });
    },
    methods:{
        show(){
             const component = this.$refs.PopupOrder
            component.show()
        },
        showTimePicker(){
              this.$createTimePicker({
                showNow: true,
                minuteStep: 10,
                delay: 60,
                day: {                                 //时间选择器
                        len: 8,
                        filter: ['今天', '明天'],
                        format: 'M月d日'
                    },
                onSelect: (selectedTime, selectedText, formatedTime) => {
                    this.$store.commit('setReserve',true);
                    this.$router.push({path:'/menu',query:{distribution:"麦乐送",formatedTime:formatedTime}});
                }
            }).show()
              
        },
        totake(){
            this.$store.commit('setReserve',false);    
            this.$router.push({path:'/menu',query:{distribution:"麦乐送"}});
        },                                                                           //根据就餐方式的不同，传递不同的数据并跳转
        toshop(){
            this.$store.commit('setReserve',false);
            this.$router.push({path:'/menu',query:{distribution:"到店取餐"}});
        },
        getTime(){
            var _this=this;
            let hh = new Date().getHours();
            let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
            let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();   //获取当前时间
            _this.gettime = hh+':'+mf+':'+ss;
            if(hh>18||hh<6)
            {
                this.isnight=true;
                this.time="晚上好";
            }else if(hh>=6&&hh<=18)
            {
                this.isdata=true;
                if(hh>=6&&hh<12)
                {
                    this.time="早上好";
                }else{
                    this.time="下午好";
                }
            }
        },
        currentTime(){
            setInterval(this.getTime,300);     
        }
    }
}
</script>

<style lang="scss">
.orange{
    position: absolute;
    width: 100%;
    height: 45vw;
    z-index: -1;
    background-size: 100% 100%;
    background-color: #fff;
    span{
        display: block;
        min-width: 25vw;
        text-align: center;
        height: 10vw;
        margin-top:30vw;
        font-size: 4vw;
    }
}
.data{
        background-image: url("http://localhost:80/mcdonald/assets/img/data.png");
}
.night{
        background-image: url("http://localhost:80/mcdonald/assets/img/night.png");
        color:#fff;
    }
</style>
<style lang="scss" scoped>
.content{
 .way{
     display: flex;
     flex-direction: row;
     justify-content: center;
     padding: 40% 0 5%;
     .Popup{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 5%;
        height: 55vw;
        width: 80vw;
        background-color: #fff;
        span{
            font-size: 5vw;
            margin-bottom: 0%;
        }
        .orderButton{
            font-size: 4vw;
            margin-top: 10%;
            border-radius: 1vw;
            width: 40vw;
            height: 10vw;
            text-align: center;
            line-height: 10vw;
            background-color: #FFC836;
         }
     }
     .link{ 
           text-decoration: none;
           list-style: none;
            color:inherit;
     .wayList{
         width: 38vw;
         height: 45vw;
         box-shadow: 2px 2px 5px #A6A5A1;
         border-radius: 2%;
         background-color: #fff;
         padding:5vw 0 0 4.5vw;
         font-size: 4vw;
         .small{
             font-size: 3vw;
             color: #444;
         }
         .takeOut{
            width: 32vw;
            height: 28vw;
            margin: 24% 0 0 12%;
         }
         .eatIn{
            width: 33vw;
            height: 25vw;
            margin: 32% 0 0 5%;
         }
     }
    #wayOne{
         margin-right: 6vw;
     }}
 }
}
.list{
    padding: 0 0 15% 3%;
}
</style>