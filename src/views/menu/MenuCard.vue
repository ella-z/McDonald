<template>
    <div class="MenuCard">
        <headerNav :title="title"></headerNav>
        <div class="poster" :style="{backgroundImage: 'url('+product.poster+')'}" ></div>
        <div class="introduction">
            <span class="productName">{{product.name}}</span>
            <span class="englishName">{{product.englishName}}</span>
            <span class="intro">{{product.introduce}}</span>
        </div>
        <div class="snack" v-show="isFirstItems">
            <horizontalScroll :items='firstItems' :ScrollName="first" @updateChecked="updateChecked1"></horizontalScroll>
        </div>
        <div class="drink" v-show="isSecondItems">
           <horizontalScroll :items='secondItems' :ScrollName="second" @updateChecked="updateChecked2"></horizontalScroll>
        </div> 
        <div class="stapleFood" v-show="isStapleFood">
            <span>主食</span>
            <div class="food" :style="{backgroundImage: 'url('+product.stapleFoodPicture+')',backgroundSize:'100%'}"></div>
            <div class="foodName">{{product.stapleFoodName}}</div>
        </div>
        <price :product="product"></price>
    </div>
</template>
<script>
import headerNav from '../../components/headerNav'
import horizontalScroll from '../../components/horizontalScroll'
import price from '../../components/price'
import { log } from 'util';

export default {
    components:{headerNav,horizontalScroll,price},
    data(){ 
        return{
            ScrollName:'',
            title:'',
            first:'',
            second:'',
            indexID:this.$route.query.indexID,
            submenuIndex:this.$route.query.submenuIndex,
            product:'',
            isStapleFood:true,
            isFirstItems:true,
            isSecondItems:true,
            firstItems:[
            ],
            secondItems:[
            ],
        }
    },
    mounted(){
        this.product=this.$store.state.data[this.indexID].submenu[this.submenuIndex];
        this.title=this.product.name;
        if(this.indexID<2)
        {
            this.firstItems=this.$store.state.data[this.indexID].snackItems;
            this.secondItems=this.$store.state.data[this.indexID].drinkItems;
            this.first='选择套餐内小食';
            this.second='选择套餐内饮品';
        }
        else if(this.indexID===2){
            this.firstItems=this.$store.state.data[this.indexID].redProduct;
            this.secondItems=this.$store.state.data[this.indexID].whiteProduct;
            this.isStapleFood=false;
            this.first='选择红区产品';
            this.second='选择白区产品';
        }else{
            this.isFirstItems=false;
            this.isSecondItems=false;
            this.isStapleFood=false;
        }
        
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        updateChecked1(res){
            this.$store.commit('setHScrollChecked1',res);
        },
        updateChecked2(res){
            this.$store.commit('setHScrollChecked2',res);
        }
    }
}
</script>
<style lang="scss">
.MenuCard{
    background-color: #f8f8f8;
    margin-bottom: 30vw;
    .poster{
        height: 58vw;
        margin-top: 12vw;
        background-size: 100%;
        
    }
    .introduction{
        height: 25vw;
        background-color: #f8f8f8;
        padding: 8vw 5vw;
        display: flex;
        flex-direction: column;
        .productName{
            line-height: 8vw;
            font-size: 5.5vw;
            font-weight: 500;
        }
        .intro{
            margin-top: 5vw;
            font-size: 2.8vw;
            line-height: 4vw;
        }
    }
    .stapleFood{
        height: 60vw;
        padding: 5vw 6vw;
        border-top: 1px solid #adacac;  
        background-color: #fff;
        margin-bottom: 30vw;
        .food{
            margin:8vw auto;
            width: 30vw;
            height: 30vw;
            background: url('http://localhost:80/mcdonald/assets/img/hamburger/双层安格斯厚牛芝士堡.png') no-repeat center; 
            background-size: 100%;
        }
        .foodName{
            text-align: center;
            margin:auto;
        }
    }
}

</style>