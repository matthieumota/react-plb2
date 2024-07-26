import { configureStore, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// La partie concernant les todos
const todoSlice = createSlice({
  name: 'todo',

  // Les données
  initialState: [
    { id: 1, name: 'Faire les courses', done: false },
    { id: 2, name: 'Travailler', done: true },
    { id: 3, name: 'Surveiller Fiorella', done: true },
  ],

  // Les actions sur ces données
  reducers: {
    addTodo(state, action) {
      const newTodo = { id: Date.now(), name: action.payload, done: false }
      // state.push(newTodo)
      return [ ...state, newTodo ]
    },
    toggleTodo: (state, action) => {
      // { type: 'todo/toggleTodo', payload: 20 }
      const todo = state.find(t => t.id === action.payload);
      todo.done = !todo.done;
    },
    // { type: 'todo/deleteTodo', payload: 2 }
    deleteTodo: (state, action) => {
      return state.filter(t => t.id !== action.payload)
    },
    initTodos: (state, action) => {
      return action.payload.map(todo => ({
        ...todo,
        name: todo.title,
        done: todo.completed
      }));
    }
  },

  // Les sélecteurs permettent de "filtrer" les données
  selectors: {
    allTodos: (state) => state,
    countUncompletedTodos: (state) => state.filter(t => !t.done).length,
  }
});

export const { addTodo, deleteTodo, toggleTodo, initTodos } = todoSlice.actions;
export const { allTodos, countUncompletedTodos } = todoSlice.selectors;

// Actions asynchrones (Pas obligatoire on peut le faire dans le composant)
export const loadTodos = () => (dispatch, getState) => {
  axios.get('https://jsonplaceholder.typicode.com/todos').then(
    response => dispatch(initTodos(response.data))
  )
}

// On va créer le store global
export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  },
});
