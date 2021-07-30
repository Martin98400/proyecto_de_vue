import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    juegos: [],
    favorites:[],
    boardgames:[],
    loading:false
  },
  mutations: {
   
    SET_JUEGOS  (state,juegos){
      state.juegos=juegos;
    },
    SET_FAVORITES (state,favorites){
      state.favorites=favorites;
    },
    SET_LOADING (state, newValue){
      state.loading=newValue;
    },
    SET_BOARDGAMES (state,boardgames){
      state.boardgames=boardgames
    }
  },
  actions: {
    listarjuegos({commit}){
      commit('SET_LOADING', true)
      axios.get('http://localhost:3500/BOARDGAMES')
      .then(res => commit('SET_JUEGOS',res.data))
      .finally(() => commit('SET_LOADING', false))
    },
    listarfavorites({commit}){
      commit('SET_LOADING', true)
      axios.get('http://localhost:3500/FAVORITES')
      .then(res => commit('SET_FAVORITES',res.data))
      .finally(() => commit('SET_LOADING', false))
    },
    TBoardGames ({ commit }) {
      axios.get('http://localhost:3500/BOARDGAMES')
      .then(res => commit('SET_BOARDGAMES',res.data))
      .finally(() => commit('SET_LOADING', false))
    }
  },

  agregarJuego({commit},{params,onComple,onError}){
    axios.post('http://localhost:3500/boardgames',params)
    .then(onComple)
    .catch(onError);
  },
  modules:{

  }

})