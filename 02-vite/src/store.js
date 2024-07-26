import { configureStore, createSlice } from '@reduxjs/toolkit';

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
    // { type: 'todo/deleteTodo', payload: 2 }
    deleteTodo: (state, action) => {
      return state.filter(t => t.id !== action.payload)
    }
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

// On va créer le store global
export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  },
});
