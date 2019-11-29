<template>
    <div class="administrator">
        <headerNav></headerNav>
        <router-view></router-view>
    </div>
</template>
<script>
import headerNav from '../../components/headerNav'

export default {
    components:{headerNav},
    created(){
        this.$router.push('/index/user/administrator/administratorIndex');
    }
}
</script>
<style lang="scss" >
.administrator{
    height: 100vh;
    width: 100vw;
    background-color: #f8f8f8;
}
</style>