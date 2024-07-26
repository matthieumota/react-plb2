import { useDispatch, useSelector } from 'react-redux';
import { addTodo, allTodos, deleteTodo, loadTodos, toggleTodo } from '../store';
import { useEffect, useMemo, useState } from 'react';

function Todo({ todo }) {
  const dispatch = useDispatch();

  return (
    <li>
      {todo.name}
      <input type="checkbox" checked={todo.done} onChange={(e) => dispatch(toggleTodo(todo.id))} />

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
  const todos = useSelector(allTodos);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const count = useMemo(() => {
    console.log('CALL');
    return todos.length;
  }, [todos]);

  useEffect(() => {
    dispatch(loadTodos())
  }, [])

  return (
    <>
      <ul>
        {todos.map((todo) => <Todo todo={todo} key={todo.id} />)}
      </ul>
      {count} todos
      <button onClick={() => setShow(!show)}>Changer</button>
      <TodoForm />
    </>
  );
}

export default Todos;
