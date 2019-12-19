<template>
    <div class="login" :class="{h:open===true}">
        <div class="title">
            <i @click="toClose" class="iconfont icon">&#xe608;</i>
            <span>会员注册/登录</span>
        </div>
        <div class="content">
            <div class="ico"></div>
            <span>新会员注册获得新人大礼包</span>
            <cube-switch v-model="isAdministrator" class="switch">是否为管理员</cube-switch>
            <div class="warning">
                <span  v-show="isexist">该账号不存在</span>
            </div>
            <input type="text" name="account" @blur="isaccount()" placeholder="点击输入账号" v-model='account' autocomplete="off">
            <input type="password" name="password" placeholder="点击输入密码" v-model='password'>
            <div class="warning">
                <span  v-show="isfault">密码错误</span>
            </div>
            <input type="submit" value="登录" class="button" @click="login">
            <!--<input type="button" value="注册" class="button">-->
    </div>
    </div>
</template>

<script>
export default {
    props:['open'],
    data(){
        return{ 
          isAdministrator:false, //是否为管理员
          account:'',
          password:'',
          isexist:false,    //是否存在
          isfault:false     //是否是错误的
        }
    },
    methods:{
        toClose(){
            this.$emit('toClose',false);
        },
        isaccount(){    //判断账号输入是否正确
            var that=this;
            this.axios.post('http://localhost:80/mcdonald/account.php',{'isAdministrator':that.isAdministrator.toString()},{
                  headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
            }
            ).then(function(response){
                for(let i=0;i<response.data.length;i++){
                     if(response.data[i].account===that.account){
                            that.isexist=false; 
                            break;
                        }else{
                            that.isexist=true;
                        }
                }
            })
        },
        login(){    //判断输入的密码是否正确。若正确，获取相关的用户消息，若不正确，弹出报错窗口。
            var that=this;
            this.axios.post('http://localhost:80/mcdonald/password.php',{
                "account":that.account,"password":that.password,'isAdministrator':that.isAdministrator.toString()},{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
            }).then(function(response){
                            if(response.data==true){
                                 that.$emit('toClose',false);
                                 that.isfault=false;
                                 let sess = window.sessionStorage;
                                 sess.setItem('account',that.account);
                                 sess.setItem('password',that.password);
                                 if(that.isAdministrator==true)
                                 {
                                     sess.setItem('identity','administrator');
                                     that.$router.push('/index/user/administratorIndex');
                                 }else{
                                    sess.setItem('identity','client');
                                    that.$store.commit('setAccount',that.account);
                                    that.$router.push({path:'/index/user/client'});
                                 }
                            }else{
                                that.isfault=true;
                            }
                        }
                    )
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
    background-image:url("http://localhost:80/mcdonald/assets/img/memberbg.png"); 
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
            background-image: url("http://localhost:80/mcdonald/assets/img/m标.png");
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
            margin:10vw 15vw 0;
            background-color: #FFC836;
            width: 50vw;
            height: 10vw;
            border-bottom: 0;
        }
        .warning{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 6vw;
            width: 100%;
            margin-top: 2vw;
            transition: 1s;
            -webkit-transition: 1s;
            span{
                margin: 0;
                text-align: center;
                line-height: 6vw;
                background-color: red;
                color:#f8f8f8;
                border-radius: 1vw; 
                width: 35vw;
                height: 6vw;
            }
        }
    }
    .footer{
        flex: 5;
    }
    }
</style>