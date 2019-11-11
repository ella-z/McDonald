<template>
    <div>
        <div class="nav"></div>
        <div class="card">
            <div class="cardLeft">
            <img src="../views/img/m.png" />
            <span>立即注册/登录</span>
            </div>
            <div class="cardRight"></div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.nav{
 height: 10vw;
 border-bottom:0.5px solid grey;
}
.card{
    margin: 4% 12% 8%; 
    width: 75vw;
    height: 42vw;
    border-radius: 10px;
     box-shadow: 2px 2px 8px #A6A5A1;
     display: flex;
     flex-direction: row;
     .cardLeft{
         width: 40vw;
         margin-left: 5vw;
          display: flex;
     flex-direction: column;
            img{
            width: 7vw;
            height: 6vw;
            margin: 5vw 0 7vw 0;
        }
     }
     .cardRight{
         width: 29vw;
         background: url('../views/img/cardbackground.png')
     }
     
}
</style>