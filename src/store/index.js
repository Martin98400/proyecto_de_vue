import Vue from 'vue'
import Vuex from 'vuex'

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
    }
  },
  mutations: {
    SET_TODOS(state, todo) {
      state.todos.push(todo);
    }
  },
  actions: {
    setTodos({commit}, todo) {
      commit('SET_TODOS', todo);
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
