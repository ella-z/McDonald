import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data:'',
    ischecked:1,
    isGet:false,
    test:1
  },
  mutations: {
    getvalue(state,res){
      state.data=res;
    },
    setValue(state,res){
      state.data=res;
      let sess = window.sessionStorage;
      sess.setItem('list',JSON.stringify(res));
    },
    changeGet(state){
      state.isGet=!state.isGet;
    },
    changChecked(state,index){
      state.ischecked=index;
    },
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
