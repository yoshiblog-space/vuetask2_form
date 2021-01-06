import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stockedDataGender: '',
    stockedDataBirthYear: '',
    stockedDataBirthMonth: '',
    stockedDataBirthDay: '',
    stockedDataFirstQuestionAnswer: '',
    stockedDataSecondQuestionAnswer: '',
    stockedDataThirdQuestionAnswer: '',
    stockedDataDetailsOfConsultation: ''
  },
  getters: {
    geteDataGender(state){
      return state.stockedDataGender
    },
    getDataBirthYear(state){
      return state.stockedDataBirthYear
    },
    getDataBirthMonth(state){
      return state.stockedDataBirthMonth
    },
    getDataBirthDay(state){
      return state.stockedDataBirthDay
    },
    getFirstQuestionAnswered(state){
      return state.stockedDataFirstQuestionAnswer
    },
    getSecondQuestionAnswered(state){
      return state.stockedDataSecondQuestionAnswer
    },
    getThirdQuestionAnswered(state){
      return state.stockedDataThirdQuestionAnswer
    },
    getDetailsOfConsultation(state){
      return state.stockedDataDetailsOfConsultation
    }
  },
  mutations: {
    commitStepOneAnswer (state, answeredStepOne){
      state.stockedDataGender = answeredStepOne.inputGender,
      state.stockedDataBirthYear = answeredStepOne.inputBirthYear,
      state.stockedDataBirthMonth = answeredStepOne.inputBirthMonth,
      state.stockedDataBirthDay = answeredStepOne.inputBirthDay
    },
    commitStepTwoAnswer (state, answeredStepTwo){
      state.stockedDataFirstQuestionAnswer = answeredStepTwo.inputFirstQuestion,
      state.stockedDataSecondQuestionAnswer = answeredStepTwo.inputSecondQuestion,
      state.stockedDataThirdQuestionAnswer = answeredStepTwo.inputThirdQuestion
    },
    commitStepThreeAnswer (state,answeredStepThree){
      state.stockedDataDetailsOfConsultation = answeredStepThree.inputDetailConsultation
    }
  },
  actions: {},
  modules: {}
});
