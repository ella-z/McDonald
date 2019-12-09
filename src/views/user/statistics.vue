<template>
    <div class="statistics">
        <headerNav></headerNav>
        <van-dropdown-menu>
            <van-dropdown-item v-model="value" :options="option" @change="changSeries" />
            <van-dropdown-item title="筛选" ref="item">
               <van-checkbox-group v-model="result" ref="checkboxGroup">
                <van-cell-group>
                    <van-cell
                    v-for="(item, index) in this.submenu"
                    clickable
                    :key="item.name"
                    :title="item.name"
                    @click="toggle(index)"
                    >
                    <van-checkbox
                        :name="item"
                        ref="checkboxes"
                        slot="right-icon"
                    />
                    </van-cell>
                </van-cell-group>
                </van-checkbox-group>
                <van-button type="primary" @click="checkAll" class="vanButton">全选</van-button>
                <van-button type="info" @click="toggleAll" class="vanButton">反选</van-button>
            </van-dropdown-item>
        </van-dropdown-menu>
        <chart :seriess="this.series"></chart>
    </div>
</template>

<script>
import chart from '../../components/chart'
import headerNav from '../../components/headerNav'

export default {
    components:{
        chart,
        headerNav
    },
  data(){
      return{
            value: '全部',
            series:'全部',
            option: [
                { 
                    text: '全部', 
                    value: '全部',
                    submenu:[]
                },
                { 
                    text: '安格斯黑金系列', 
                    value: '安格斯黑金系列', 
                    submenu:[
                        {
                            name:"安格斯厚牛菠萝堡套餐"
                        },
                        {
                            name:"双层安格斯厚牛菠萝堡套餐"
                        },
                        {
                            name:"安格斯厚牛培根堡套餐"
                        },
                        {
                            name:"安格斯厚牛芝士堡套餐"
                        },
                        {
                            name:"双层安格斯厚牛培根堡套餐"
                        },
                        {
                            name:"双层安格斯厚牛芝士堡套餐"
                        }
                    ]
                },
                { 
                    text: '超值三件套', 
                    value: '超值三件套',
                    submenu:[
                        {
                            name:"麦辣鸡腿汉堡套餐"
                        },
                        {
                            name:"板烧鸡腿堡套餐"
                        },
                        {
                            name:"巨无霸套餐"
                        },
                        {
                            name:"不素之霸双层牛堡套餐"
                        },
                        {
                            name:"双层深海鳕鱼堡套餐"
                        },
                        {
                            name:"川辣双鸡堡套餐"
                        },
                        {
                            name:"双层吉士汉堡套餐"
                        },
                        {
                            name:"麦香鸡套餐"
                        },
                        {
                            name:"麦香鱼套餐"
                        },
                        {
                            name:"麦乐鸡套餐"
                        },
                        {
                            name:"培根蔬萃双层牛堡套餐"
                        },
                        {
                            name:"吉士汉堡包套餐"
                        },
                        {
                            name:"麦辣鸡翅"
                        }
                    ] 
                },
                { 
                    text: '随心配', 
                    value: '随心配', 
                    submenu:[
                        {
                            name:"随心配1+1=￥12"
                        }
                    ]
                },
                { 
                    text: '金拱门桶', 
                    value: '金拱门桶', 
                    submenu:[
                        {
                            name:"金拱门桶A"
                        },
                        {
                            name:"金拱门桶B"
                        },
                        {
                            name:"家有金桶(汉堡版)"
                        },
                        {
                            name:"家有金桶(脆鸡版)"
                        },
                        {
                            name:"小食缤纷盒"
                        }
                    ]
                },
                { 
                    text: '500大卡套餐', 
                    value: '500大卡套餐', 
                    submenu:[
                        {
                            name:"想吃鲜的套餐"
                        },
                        {
                            name:"来点小食套餐"
                        },
                        {
                            name:"只爱甜套餐"
                        }
                    ]
                },
                { text: '开心乐园餐', value: '开心乐园餐' },
                { text: '小食甜点玩具', value: '小食甜点玩具' },
                { text: '主食', value: '主食' },
                { text: '饮品', value: '饮品' },
            ],
            submenu:[],
            result:[]
      }
  },
  watch:{
      result(val){
           //console.log(this.result)
      }
  },
  methods:{
      onConfirm() {
      this.$refs.item.toggle();
    },
    changSeries(){
        this.series=this.value;
        for(let i=0;i<this.option.length;i++){
            if(this.option[i].text===this.series)
            {
               this.submenu=this.option[i].submenu;
            }
        }
    },
    checkAll() {
      this.$refs.checkboxGroup.toggleAll(true);
    },
    toggleAll() {
      this.$refs.checkboxGroup.toggleAll();
    },
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    }
  }
}

</script>

<style lang="scss">
    .statistics{
        width: 100vw;
        height: 100vh;
        background-color: #f8f8f8;
        margin-top: 13vw;
        .vanButton{
            width: 30vw;
            height: 10vw;
            background-color: #FFC836;
            border: none;
            outline: none;
            border-radius: 5vw;
            margin:3vw 9.5vw;
        }
    }
</style>