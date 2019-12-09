<template>
    <div class="allOrder">
        <headerNav></headerNav>
        <orderCard></orderCard>
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
            
        }
    },
 
}
</script>

<style lang="scss" scoped>
.allOrder{
    width: 100vw;
    height: 100vh;
    background-color: #f8f8f8;
    padding-top: 15vw;
    
}
</style>