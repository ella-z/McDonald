<template>
    <div class="tabbar">
        <ul>
            <li :class="{checked:ischecked=='1'}" @click="check(1)" >
                <router-link to='/' class="link">
                <i class="iconfont">&#xe66f;</i><span>点餐</span>
                </router-link>
                </li>
            <li :class="{checked:ischecked=='2'}" @click="check(2)">
                <router-link to='/index/discover' class="link">
                <i class="iconfont">&#xe62b;</i><span>超值好礼</span>
                </router-link>
            </li>
            <li :class="{checked:ischecked=='3'}" @click="check(3)">
                 <router-link to='/index/user' class="link">
                <i class="iconfont">&#xe663;</i><span>我的</span>
                 </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            ischecked:'1'
        }
    },
    methods:{
        check(index){
            this.ischecked=index;
        }
    }
}
</script>
<style lang="scss" scoped>
.tabbar{
    height: 13vw;
    width: 100%;
    background-color: #292929;
    position: fixed;
    bottom: 0;  
    z-index: 99;
    ul{
        padding: 0;
        margin: 0;
        list-style: none;
        display:flex;
        flex-direction: row;
        justify-content: space-around;
         li{
            height: 12.5vw;
            width: 15vw;
            background-color: #292929;
            color: #999;
            border-radius: 5%;
            .link{
                height: 100%;
                width: 100%;
                text-decoration: none;
                list-style: none; 
                display:flex;
                flex-direction: column;
                align-items: center;
                color: #999;
                margin-top:1vw;
                }
            span{
                font-size: 3.5vw;
                margin-top:1.5vw;
            }
        }
        .checked{
            background-color: #333;
            .link{
                i{
                     color: #FFC836;
                }
                color: #FFC836;
            }
        }
    }
   
}

</style>