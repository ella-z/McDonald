<template>
    <div class="allOrder">
        <headerNav></headerNav>
        <orderCard
        :key="index"
        v-for="(order,index) in orders"
        :orderId="order.idorder"
        :getMealTime="order.getMealTime" 
        :foodList="foodList[index]"
        ></orderCard>
    </div>    
</template>

<script>
import orderCard from '../../components/orderCard'
import headerNav from '../../components/headerNav'

export default {
    components:{
        orderCard,
        headerNav
    },
    data(){
        return{
            orders:[],
            foodList:[],
            isclient:this.$route.query.isclient,
        }
    },
     created(){
        let that=this;
        this.axios.post('http://localhost:80/mcdonald/getOrder.php',{
            "isclient":that.isclient,
            "account":window.sessionStorage.account
        },{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }}).then(
            function(response){
                that.orders=response.data;
                for(let i=0;i<response.data.length;i++){
                    that.foodList.push(JSON.parse(response.data[i].foodList))
                } 
            }
        )
    },
 
}
</script>

<style lang="scss" scoped>
.allOrder{
    width: 100vw;
    min-height: 100vh;
    background-color: #f8f8f8;
    padding: 15vw 0;
}
</style>