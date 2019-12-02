<template>
    <div class="allOrder">
       <orderCard></orderCard>
    </div>    
</template>

<script>
import orderCard from '../../components/orderCard'

export default {
    components:{
        orderCard
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