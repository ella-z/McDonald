<template>
    <div class="cart" :style="{'left':left+'px','top':top+'px'}" ref="cart">
            <img src="../views/img/discover/袋子.png" />
    </div>
</template>

<script>
export default {
    data(){
        return{
             left:0,
            top:0,
            timer:null,
            scrolllTop:0,
        }
    },
     created(){
        this.left = document.documentElement.clientWidth - 50;
        this.top = document.documentElement.clientHeight*0.8;
   },
   mounted(){
       window.addEventListener('scroll', this.handleScrollStart);
        this.$nextTick(()=>{
        const cart = this.$refs.cart;
        cart.addEventListener("touchstart",()=>{
            cart.style.transition = 'none';
        });
        cart.addEventListener("touchmove",(e)=>{
            if (e.targetTouches.length === 1) {//一根手指
            let touch = event.targetTouches[0];
            this.left = touch.clientX-25;
            this.top = touch.clientY-25;
          }
        });
        cart.addEventListener("touchend",()=>{
            cart.style.transition = 'all 0.3s';
           if(this.left>document.documentElement.clientWidth/2){
             this.left = document.documentElement.clientWidth - 50;
           }else{
             this.left = 0;
           }
        });
      });
   },
   methods:{
       handleScrollStart(){
        this.timer&&clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
          this.handleScrollEnd();
        },300);
        this.currentTop = document.documentElement.scrollTop || document.body.scrollTop;
         if(this.left>document.documentElement.clientWidth/2){
          this.left = document.documentElement.clientWidth - 25;
        }else{
          this.left = -25;
        }
       },
       handleScrollEnd(){
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop === this.currentTop){
           if(this.left>document.documentElement.clientWidth/2){
            this.left = document.documentElement.clientWidth - 50;
          }else{
            this.left = 0;
          }
          clearTimeout(this.timer);
        }
      }
   },
    beforeDestroy(){
      window.removeEventListener('scroll', this.handleScrollStart);
    }
}
</script>

<style lang="scss">
 .cart{
        position: fixed;
        z-index:20;
        background-color: #fff;
        border-radius: 50%;
        width: 11vw;
        height: 11vw;
        transition: all 0.3s;
        img{
            width: 5vw;
            height: 8vw;
            margin: 1vh 0 0 3vw;
        }
    }
</style>