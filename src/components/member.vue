<template>
<div>
    <div class="member">
        <div class="nav"></div>
        <div class="card">
            <div class="cardLeft">
                <img src="../assets/img/m.png" />
                <span @click="toLogin">立即注册/登录></span>
                <span class="intro">
                    成为麦当劳会员，<br />
                    更多优惠，更快取餐
                </span>
            </div>
            <div class="cardRight"></div>
        </div>
        <div class="content">
            <span>注册/登录后可获得大批优惠券！</span>
        </div>
    </div>    
    <div class="login" :class="{h:open===true}">
        <div class="title">
            <i @click="toClose" class="iconfont icon">&#xe608;</i>
            <span>会员注册/登录</span>
        </div>
        <div class="content">
            <div class="ico"></div>
            <span>新会员注册获得新人大礼包</span>
            <cube-switch v-model="value" class="switch">是否为管理员</cube-switch>
            <input type="text" name="account" placeholder="点击输入账号">
            <input type="password" name="password" placeholder="点击输入密码">
            <input type="submit" value="登录" class="button">
            
        </div>
        <div class="footer"></div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
          open:false,
          value:false
        }
    },
    methods:{
        toLogin(){
            this.open=true;
        },
        toClose(){
            this.open=false;
        }
    }
}
</script>
<style lang="scss" scoped>
.iconfont{
    font-size: 3.8vw;
}

.h{
    height: 100vh!important;
}
.login{
    background-image:url("../assets/img/memberbg.png"); 
    background-size: 100%  100%;
    height: 0vh;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index:999;
    overflow-y: hidden;
    transition: 0.5s;
    display: flex;
    flex-direction: column;
    .title{
        flex:1;
        padding: 4vw 0 0 3vw;
        span{
            display: block;
            text-align: center;
            margin-top:-2vw;
            font-size: 5vw;
        }
    }
    .content{
        flex: 10;
        display: flex;
        flex-direction: column;
        align-items: center;
        .ico{
            width: 15vw;
            height: 15vw;
            background-image: url("../assets/img/m标.png");
            background-size: 100%;
            margin:5vw 0;
        }
        span{
            margin-bottom: 7vw;
        }
        .switch{
            width: 50vw;
            margin: 0 25vw 5vw 0;
        }
        input{
            width: 75vw;
            height: 12vw;
            background: rgba(255,255,255,0);
            border-bottom: 1px solid #000;
            -web-kit-appearance:none;//除去input默认css
            -moz-appearance: none;
            outline:0;
        }
        .button{
            margin: 15vw;
            background-color: #FFC836;
            width: 50vw;
            height: 10vw;
            border-bottom: 0;
        }
    }
    .footer{
        flex: 5;
    }
    }
.member{
    width: 100vw;
    height: 100vh;
    overflow-y: hidden;
    background-color: #f8f8f8;
    .nav{
    height: 12vw;
    background-color: #fff;
    }
    .card{
        margin: 2% 12% 8%; 
        width: 75vw;
        height: 42vw;
        border-radius: 2.5vw;
        box-shadow: 4px 4px 5px rgb(177, 177, 177);
        background-color: #fff;
        display: flex;
        flex-direction: row;
        .cardLeft{
            width: 40vw;
            margin-left: 5vw;
            display: flex;
            flex-direction: column;
            img{
                width: 7vw;
                height: 6vw;
                margin: 5vw 0 7vw 0;
            }
            .intro{
                margin-top: 1vw;
                color: rgb(124, 124, 124);
                line-height: 3vw;
                font-size: 2.2vw;
            }
        }
        .cardRight{
            width: 50vw;
            background-image: url('../assets/img/cardbackground.png');
            background-size: 100% 100%;
            border-radius: 2.5vw;
        }
        
    }
    .content{
        display: flex;
        flex-direction: column;
        align-items: center;
        span{
            margin-top:5vw;
            font-size: 3.5vw;
        }
    }
}
</style>