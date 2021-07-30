import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    juegos: [],
    loading:false
  },
  mutations: {
   
    SET_JUEGOS  (state,juegos){
      state.juegos=juegos;
    },
    SET_LOADING (state, newValue){
      state.loading=newValue;
    }
  },
  actions: {
    listarjuegos({commit}){
      commit('SET_LOADING', true)
      axios.get('http://localhost:3500/boardgames')
      .then(res => commit('SET_JUEGOS',res.data))
      .finally(() => commit('SET_LOADING', false))
    }
  },
})