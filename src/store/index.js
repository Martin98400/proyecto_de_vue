import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos:[],
    todo:{
      id: '',
      Name: '',
      Publisher: '',
      Category: [],
      Description: '',
      Year: ''
    },
    juegos:[],
    loading:false
  },
  mutations: {
    SET_TODOS(state, todo) {
      state.todos.push(todo);
    },
    SET_JUEGOS  (state,juegos){
      state.juegos=juegos;
    },
    SET_LOADING (state, newValues){
      state.loading=newValue;
    }
  },
  actions: {
    
    setTodos({commit}, todo) {
      commit('SET_TODOS', todo);
    },
    listarjuegos({commit}){
      commit('SET_LOADING', true)
      axios.get('http://localhost:3000/boardgames')
      .then(res => commit('SET_JUEGOS',res.data))
      .finally(() => commit('SET_LOADING', false))
    }
  },
  getters: {
    allTodos: state => {
      return state.todos.map(todo => ({
        ...todo,
        nuevoNombre: `${todo.id} - ${todo.Name}`
      }));
    }
  }
})
