<template>
    <div class="detail">
        <div class="head">
            <div class="icon" @click="back()">
                <i class="iconfont">&#xe61b;</i>
            </div>
            <span>详情</span>
            <div class="share">分享</div>   
        </div>
        <div class="picture">
            <img :src="src"/>
        </div>
        <div class="explain">
            <div class="state">商品说明</div>
            <div class="Detail">
                <div class="stateDetail" >
                    <span v-for="(item,index) in productDetails" :key="index">
                        {{item.name}} <br /><br />
                    </span>
                </div>
                <div class="stateValue" >
                    <span v-for="(item,index) in productDetails" :key="index">
                        {{item.value}}<br /><br />
                    </span>
                </div>
            </div>
        </div>
        <div class="productDetail">
            <div class="state">商品详情</div>
            <img src='../assets/img/detail/麦满分组合.png' />
        </div>
        <div class="notice">
            <div class="state">购买须知</div>
            <div class="noticeDetail"> 
                1.【兑换内容】：本券可兑换板烧鸡腿麦满分产品组合10次，每次/每单可兑换板烧鸡腿麦满分组合一份。<br />
                2.【适用门店】：本券仅限于中国（本活动场景下不包括港澳台地区）部分麦当劳餐厅，并限于该食品的供应时段内使用，机场、火车站等交通枢纽餐厅、旅游景区餐厅等特殊餐厅除外，详询门店。 <br />
                3.【适用渠道】：本券仅适用于麦当劳官方app的到店取餐功能及微信“i麦当劳”小程序的点餐功能，不适用于柜台、麦乐送送餐服务、自助点餐机、其他网上订餐、第三方外送平台等渠道。 <br />
                4.【使用方式】：请于点餐时在麦当劳官方app的到店取餐页面或微信“i麦当劳”小程序的点餐页面下单使用本券。每券的使用次数仅限图示次数，达到验证次数即表明此券作废。 <br />
                5.【积分/退款】：麦当劳会员购买后自动积分。本券为特殊数字化特惠商品，不支持在线退款，敬请谅解。 <br />
                6.【谨慎保管】：本券不记名，不可充值，不找零，不支持挂失。请注意保管，谨防遗失或泄露。 <br />
                7.【发票】：本券购买之日起九十（90）天内可以线上申请开具发票。使用本券消费时，麦当劳餐厅不再重复提供发票。 <br />
                8.【转赠限制】：本券可以在购买时赠送他人，放入卡包后不再支持转赠。<br />
                9.【产品售罄】：如遇产品售罄，餐厅将视餐厅供应情况为您替换为价格相当的产品，以餐厅实际供应为准。 <br />
                10.【优惠不叠加】：本券不可以与已享受其他优惠的同类产品同时叠加优惠使用；食品及包装以实物为准，图片仅供参考。 <br />
                11.【价格解释】：除非图示另有解释，否则图示如有节省的金额或折扣比例，是与不参加优惠活动情况下单独购买该产品的常规价格（或者其中所含单品的常规单买价总和）相比较。图示如有划线价格，并非指原价，而是指不参加优惠活动情况下该产品的常规价格（或者其中所含单品的常规单买价总和）。 <br />
                12.【禁止作弊】：本券不能转让、转售、转发、截图，也不能兑换现金，伪造或变造无效。麦当劳仅认可在麦当劳官方渠道发布的电子券，从其他途径获得的电子券将不能使用。通过假冒身份、机器人软件、蜘蛛软件、爬虫软件、刷屏软件或其他非法手段获得的电子券，麦当劳有权拒绝兑换、使其失效并取消活动参与资格。 <br />
                13.【联系方式】：如有疑问，请向餐厅柜台咨询，或拨打麦当劳顾客关怀热线4009-200-205。<br />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            src:this.$route.query.src,
            productDetails:[
                {
                    name:'卡券渠道:',
                    value:'到店取餐'
                },
                {
                    name:'卡券类型:',
                    value:'产品券'
                },
                {
                    name:'总可用次数:',
                    value:'10次'
                },
                {
                    name:'每日可用次数:',
                    value:'1次'
                },
                {
                    name:'使用时间:',
                    value:'05:00-10:00'
                },
                {
                    name:'有效期:',
                    value:'60天'
                },
                {
                    name:'购买条件:',
                    value:'不限购'
                },
            ], 
        }
    }, 
    methods:{
        back(){
             this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" scoped>
.iconfont{
    font-size: 5.5vw;
}
 .state{
            width: 95%;
            padding-left: 5vw;
            font-size: 3.5vw;
            line-height: 14vw;
            height: 14vw;
            border-bottom: 0.5px solid #c2c2c2;
        }
.detail{
    background-color: #f8f8f8;
    .head{    
        position: fixed;
        top:0;
        z-index: 999;
        height: 14vw;
        width: 100%;
        background-color: #fff;
        font-size: 2.2vh;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .icon{
            margin-left: 3vw;
        }
        .share{
            margin-right: 8vw;
            font-size: 3.5vw;
        }
    }
    .picture{
        width: 100%;
        height: 55vw;
        background-color: #fff;
        margin-top:14vw;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 81vw;
            height: 46vw;
            border-radius: 1vw;
            box-shadow: 0 0.8vw 1vw rgb(228, 228, 228);
        }
    }
    .explain{
        margin: 2vw 0;
        width: 100%;
        height: 66vw;
        background-color: #fff;
        .Detail{
            display: flex;
            flex-direction: row;
            .stateDetail{
                padding: 3vh 0 0 5vw;
                font-size: 3vw;
                width: 25vw;
                color: rgb(107, 107, 107);
            }
            .stateValue{
                padding-top: 6vw;
                font-size: 3vw;
            }
        }
        
    }
    .productDetail{
        height: 94vw;
        background-color: #fff;
        margin-bottom: 4vw; 
        img{
            width: 100%;
            height: 80vw;
        }
    }
    .notice{
        width: 100%;
        height: 150vw;
        background-color: #fff;
        .noticeDetail{
            line-height: 5vw;
            padding: 2vw;
            font-size: 3vw;
        }
    }
}


</style>