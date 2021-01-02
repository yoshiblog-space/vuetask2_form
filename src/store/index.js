import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gender: '',
    birthyear: '',
    birthmonth: '',
    birthday: '',
    firsta: '',
    seconda: '',
    thirda: '',
    requesttext: ''
  },
  getters: {
    gender(state){
      return state.gender
    },
    birthyear(state){
      return state.birthyear
    },
    birthmonth(state){
      return state.birthmonth
    },
    birthday(state){
      return state.birthday
    },
    firsta(state){
      return state.firsta
    },
    seconda(state){
      return state.seconda
    },
    thirda(state){
      return state.thirda
    },
    requesttext(state){
      return state.requesttext
    }
  },
  mutations: {
    stepone (state, steponeans){
      state.gender = steponeans.gender,
      state.birthyear = steponeans.birthyear,
      state.birthmonth = steponeans.birthmonth,
      state.birthday = steponeans.birthday
    },
    steptwo (state, steptwoans){
      state.firsta = steptwoans.firsta,
      state.seconda = steptwoans.seconda,
      state.thirda = steptwoans.thirda
    },
    stepthree (state,stepthreeans){
      state.requesttext = stepthreeans.requesttext
    }
    
  },
  actions: {},
  modules: {}
});
