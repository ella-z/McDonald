<template>
    <div class="statistics">
        <headerNav></headerNav>
        <van-dropdown-menu>
            <van-dropdown-item v-model="value" :options="options" @change="changSeries" />
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
                <van-button type="info" @click="toggleAll" class="vanButton">反选</van-button>
            </van-dropdown-item>
        </van-dropdown-menu>
        <chart :seriess="this.series" :chartSeries="this.chartSeries" ></chart>
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
            submenu:[],
            result:[],
            options:this.$store.state.data,
            chartSeries:[]
      }
  },
  watch:{
      result(val){
        //console.log(val);
        // console.log(val.length);

      }
  },  
  created(){
        this.options.push(                
                { 
                    text: '全部', 
                    value: '全部',
                    submenu:[]
                });
  },
  methods:{
    onConfirm() {
      this.$refs.item.toggle();
    },
    changSeries(){
        this.series=this.value;
        let submenuList=[];
        let that =this;
        for(let i=0;i<this.options.length;i++){
            if(this.options[i].text===this.series)
            {
               this.submenu=this.options[i].submenu;
            }
        }
        for(let i=0;i<this.submenu.length;i++){
            submenuList.push({
                name:this.submenu[i].name,
                data:[0,0,0,0,0,0,0,0,0,0,0,0]
            })
        }
        this.axios.post('http://localhost:80/mcdonald/getSales.php',{
                    'seriesName':that.series
                },{
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            }).then(function(response){
                 for(let i=0;i<response.data.length;i++){
                    
                 }
            },function(err){
                console.log('请求getSales失败');
            })
        console.log(submenuList[0].data[0]);
        this.chartSeries=submenuList;
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
            margin:3vw 35vw;
        }
    }
</style>