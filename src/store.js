import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data:'',
    ischecked:1,
    isGet:false,
    account:0,
    test:1,
    isReserve:false, //是否有预定时间
    num:0, //orderId
    accountDetail:'',
    isPushAll:false,
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
    setNum(state,res){
      state.num=res;
      let sess = window.localStorage;
      sess.setItem('num',JSON.stringify(res));
    },
    setReserve(state,res){
      state.isReserve=res;
    },
    setAccount(state,res){
      state.account=res;
    },
    setAccountDetail(state,res){
      state.accountDetail=res;
    //  console.log(res.UserName)
      let sess = window.sessionStorage;
      sess.setItem('accountDetail',JSON.stringify(res));
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
      },
    getNum(context){
      if(window.localStorage.num){
        context.commit('setNum',window.localStorage.num);
      }else{
        context.commit('setNum',0);
      }
    },
      getAccount(context){
        if(window.sessionStorage.account){
          context.commit('setAccount',window.sessionStorage.account);
        }else{
          context.commit('setAccount',0);
        }
      }
    } 
   
});
