import db from '../../config/firebaseInit'

const state = {
  todos: []
}

const getters = {
  allTodos: state => state.todos
}

const actions = {
  fetchTodos: function ({
    commit
  }) {
    let allTodos = []

    db.collection('todos')
      .orderBy('title')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            'id': doc.id,
            'title': doc.data().title,
            'completed': doc.data().completed
          }
          allTodos.push(data);
        })
        commit('setTodos', allTodos)
      })
  },

  async addTodo({ commit }, title) {
    const newTodo = {title, completed: false}
    const res = await db.collection('todos').add(newTodo)
    commit('newTodo', { ...newTodo, id: res.id })
  },

  async deleteTodo({ commit }, id) {
    db.collection('todos').doc(id).delete();
    commit('removeTodo', id)
  },

  async updateTodo({ commit }, updTodo) {
    db.collection('todos').doc(updTodo.id).set(updTodo)
    commit('updateTodo', updTodo)
  }
}

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id != id),
  updateTodo: (state, updTodo) => {
    const index = state.todos.findIndex(todo => todo.id === updTodo.id)
    if (index != -1) {
      state.todos.splice(index, 1, updTodo)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}