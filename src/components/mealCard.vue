<template>
    <div class="mealCard" id="mealCard">
                <div class="detail">查看详情 ></div>
                <div class="cardTop">
                    <img :src="mealCard.src1"/>
                </div>
                <div class="cardBottom">
                    <div class="smallcard MR">
                        <img :src="mealCard.src2" />
                    <span>{{mealCard.name1}}</span><br />
                    <span>{{mealCard.price1}}</span>
                    <span class="eliminate">{{mealCard.discountPrice1}}</span>
                    </div>
                    <div class="smallcard">
                        <img :src="mealCard.src3"/>
                        <span>{{mealCard.name2}}</span><br />
                        <span>{{mealCard.price2}}</span>
                        <span class="eliminate">{{mealCard.discountPrice2}}</span>
                    </div>
                </div>
    </div>
</template>

<script>
export default {
    name:"mealCard",
    props:['mealCard'],
    data()
    {
        return{
           
        }
    },
}
</script>

<style lang="scss" >
     .MR{
         margin-right: 2vw;
     }
     .mealCard{
            margin-bottom: 2vh;
            border-radius:1vw; 
            width: 100%;
            height:103vw;
             background-color: pink;
            .detail{
                position: absolute;
                z-index: 2;
                margin:50vw 0 0 70vw;
                font-size: 3vw;
            }
            .cardTop{
                width: 100%;
                height: 62vw;
                img{
                    border-top-left-radius:1vw;
                    border-top-right-radius:1vw; 
                    height: 62vw;
                    width: 100%;
                }
            }
            .cardBottom{
                border-bottom-left-radius:1vw;
                border-bottom-right-radius:1vw; 
                height: 41vw;
                background-color: #fff;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                .smallcard{
                    border-radius:1vw; 
                    height: 35vw;
                    width: 40vw;
                    img{
                        border-radius:1vw;
                        width: 40vw;
                        height: 23vw;
                        box-shadow: 0 0.7vw 1vw #dfdede;
                        margin-bottom: 2vw;
                    }
                    span{
                        font-size: 3vw;
                    }
                    .eliminate{
                        font-size: 2.5vw;
                        color: #616060;
                        text-decoration: line-through;
                    }
                }
            }
        }
</style>
