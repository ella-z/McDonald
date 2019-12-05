import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data:[],
    test:'1'
  },
  mutations: {
    getvalue(state,res){
      state.data.push(res);
      console.log(state.data);
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
