<template>
    <div class="statistics">
        <van-dropdown-menu>
            <van-dropdown-item v-model="value" :options="option" @change="x" />
            <van-dropdown-item title="筛选" ref="item">
               <van-checkbox-group v-model="result" ref="checkboxGroup">
                <van-cell-group>
                    <van-cell
                    v-for="(item, index) in 3"
                    clickable
                    :key="item"
                    :title="`复选框 ${item}`"
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
                <van-button type="primary" @click="checkAll">全选</van-button>
                <van-button type="info" @click="toggleAll">反选</van-button>
            </van-dropdown-item>
        </van-dropdown-menu>
    </div>
</template>

<script>

export default {

  data(){
      return{
            value: '安格斯黑金系列',
            switch1: false,
            switch2: false,
            option: [
                { text: '安格斯黑金系列', value: '安格斯黑金系列' },
                { text: '超值三件套', value: '超值三件套' },
                { text: '随心配', value: '随心配' },
                { text: '金拱门桶', value: '金拱门桶' },
                { text: '500大卡套餐', value: '500大卡套餐' },
                { text: '开心乐园餐', value: '开心乐园餐' },
                { text: '小食甜点玩具', value: '小食甜点玩具' },
                { text: '主食', value: '主食' },
                { text: '饮品', value: '饮品' },

            ],
            result:[
                {

                },
                {

                },
                {

                }
            ]
      }
  },
  methods:{
      onConfirm() {
      this.$refs.item.toggle();
    },
    x(){
        console.log(this.value);
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
        background-color: skyblue;
        margin-top: 13vw;
    }
</style>