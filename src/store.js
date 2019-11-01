import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) 

export default new Vuex.Store({
  state: {
      person_name:'',
      person_src:'/person/primary/person.jpg',
      host:'http://localhost:3000'
  },
  mutations: {
     loginSuccess(state,value){
        state.person_name=value.name;
        state.person_src=value.path?value.path:'/person/primary/person.jpg';
     }
  },
  actions: {

  }
})
