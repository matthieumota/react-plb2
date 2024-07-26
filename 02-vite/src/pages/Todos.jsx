import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../store';
import { useState } from 'react';

function Todo({ todo }) {
  const dispatch = useDispatch();

  return (
    <li>
      {todo.name}

      <button onClick={() => dispatch(deleteTodo(todo.id))}>X</button>
    </li>
  );
}

const TodoForm = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');
  const handleTodo = (e) => {
    e.preventDefault()

    dispatch(addTodo(newTodo))
  }

  return (
    <form onSubmit={(e) => handleTodo(e)}>
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button>Ajouter</button>
    </form>
  );
}

function Todos() {
  const todos = useSelector(state => state.todo);

  return (
    <>
      <ul>
        {todos.map((todo) => <Todo todo={todo} key={todo.id} />)}
      </ul>
      <TodoForm />
    </>
  );
}

export default Todos;
