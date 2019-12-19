<template>
    <div class="client">
        <div class="administratorIndex-nav"></div>
        <div class="card">
            <span class="userName">{{UserDetail.userName}}</span>
            <span>可用积分</span>
        </div>
        <div class="list">
            <div class="listItem orders" @click="toAllOrder">
                <span>所有订单</span>
                <i class="iconfont icon">&#xe731;</i>
            </div>
            <!--<div class="address listItem">
                <span>送餐地址</span>
                <i class="iconfont icon">&#xe731;</i>
            </div>-->
        </div>
       <!-- <div class="list">
            <div class="orders listItem">
                <span>投诉与建议</span>
                <i class="iconfont icon">&#xe731;</i>
            </div>
            <div class="address listItem">
                <span>条款与规则</span>
                <i class="iconfont icon">&#xe731;</i>
            </div>
        </div>-->
        <div class="removal" @click="remove">注销账号</div>
    </div>
</template>

<script>
import headerNav from '../../components/headerNav'
import { doesNotThrow } from 'assert';

export default {
    components:{headerNav},
    data(){
        return{
            account:this.$store.state.account,
            UserDetail:this.$store.state.accountDetail
        }
    },
    created(){
        if(window.sessionStorage.accountDetail){
            this.UserDetail=JSON.parse(window.sessionStorage.accountDetail);
        }else{
            var that=this;
            this.axios.post('http://localhost:80/mcdonald/getUser.php',{'account':that.account},{
                  headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
            }
            ).then(function(response){
                that.UserDetail=response.data[0];
                that.$store.commit('setAccountDetail',response.data[0]);
            }) 
        }
    },
    methods:{
        remove(){
            sessionStorage.removeItem('account');
            sessionStorage.removeItem('password');  //注销账号
            sessionStorage.removeItem('identity');
            sessionStorage.removeItem('userName');
            sessionStorage.removeItem('accountDetail');
            this.$router.push('/index/user/member');
        },
        toAllOrder(){   //显示所有订单消息
            let that=this;
            this.$router.push({path:'/index/user/allOrder',query:{
                isclient:true
            }})
        }
        
    }
}
</script>

<style lang="scss" scoped>
.client{
    height: 100vh;
    width: 100vw;
    background-color: #f8f8f8;
    display:flex;
    flex-direction: column;
    align-items: center;
    .administratorIndex-nav{
        background-color: #fff;
        width: 100vw;
        height: 12vw;
    }
     .card{
        margin-top: 16vw;    
        width: 75vw;
        height: 42vw;
        border-radius: 2.5vw;
        box-shadow: 4px 4px 5px rgb(177, 177, 177);
        background-color: #fff;
        background: url('http://localhost:80/mcdonald/assets/img/member/card.png') no-repeat center;
        background-size: 100%;
        .userName{
            padding-top:5vw;
            font-size:3.8vw;
            font-weight: 700;
        }
        span{
            display: block;
            margin: 10vw 5vw 0;
            font-size: 3.2vw;
        }
    }
    .list{
        margin-top: 5vw;
        width: 80vw;
        height: 10vw;
        background-color: #fff;
        border-radius: 2vw;
        .listItem{
            width: 70vw;
            height: 10vw;
            margin:0 auto;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            span{
                font-size: 3.5vw;
            }
            .icon{
                font-size: 3.5vw;
                font-weight: 700;
                color: #000;
            }
        }
    }
    .removal{
        width: 40vw;
        height: 10vw;
        margin:0 auto;
        background-color: rgb(245, 199, 72);
        border-radius: 2vw;
        line-height: 10vw;
        margin-top: 20vw;
        text-align: center;
    }
}
</style>