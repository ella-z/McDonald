<template>
    <div class="MenuCard">
        <headerNav :title="title"></headerNav>
        <div class="poster" :style="{backgroundImage: 'url('+product.poster+')'}" ></div>
        <div class="introduction">
            <span class="productName">{{product.name}}</span>
            <span class="englishName">{{product.englishName}}</span>
            <span class="intro">{{product.introduce}}</span>
        </div>
        <div class="snack">
            <horizontalScroll :items='snackItems' :ScrollName="snack"></horizontalScroll>
        </div>
        <div class="drink">
           <horizontalScroll :items='drinkItems' :ScrollName="drink"></horizontalScroll>
        </div>
        <div class="stapleFood">
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
            snack:'小食',
            drink:'饮料',
            title:'',
            indexID:this.$route.query.indexID,
            submenuIndex:this.$route.query.submenuIndex,
            product:'',
            snackItems:[
      
            ],
            drinkItems:[
               

            ]
        }
    },
   
    mounted(){
        this.product=this.$store.state.data[this.indexID].submenu[this.submenuIndex];
        this.title=this.product.name;
        this.snackItems=this.$store.state.data[this.indexID].snackItems;
        this.drinkItems=this.$store.state.data[this.indexID].drinkItems;
        console.log(this.$store.state.data[this.indexID].snackItems);
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        
    }
}
</script>
<style lang="scss">
.MenuCard{
    background-color: #f8f8f8;
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
        margin-bottom: 30vw;
        padding: 5vw 6vw;
        border-top: 1px solid #adacac;  
        background-color: #fff;
        .food{
            background-color: pink;
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