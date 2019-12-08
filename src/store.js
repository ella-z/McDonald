import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data:'',
    ischecked:1
  },
  mutations: {
    getvalue(state,res){
      state.data=res;
    },
    changChecked(state,index){
      state.ischecked=index;
    }
  },
  actions: {
    getdata(context){
            axios.post('http://localhost:80/mcdonald/menu.php').then(function(response){
              //state.data=response.data;
              context.commit('getvalue',response.data);
        })
      }
    } 
   
});
