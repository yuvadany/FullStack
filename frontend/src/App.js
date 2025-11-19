import React, { useEffect, useState } from 'react';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from './api';
import './styles.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    loadTodos();
  }, []);

  async function loadTodos() {
    const data = await fetchTodos();
    setTodos(data);
  }

  async function addTodo() {
    if (!text.trim()) return;
    const newTodo = await createTodo(text.trim());
    setTodos([...todos, newTodo]);
    setText('');
  }

  async function toggleTodo(todo) {
    const updated = { ...todo, completed: !todo.completed };
    await updateTodo(updated);
    setTodos(todos.map(t => t.id === updated.id ? updated : t));
  }

  async function removeTodo(id) {
    await deleteTodo(id);
    setTodos(todos.filter(t => t.id !== id));
  }

  return (
    <div className="container">
      <h1>Todo App</h1>

      <div className="input-row">
        <input
          type="text"
          value={text}
          placeholder="New Todo..."
          onChange={e => setText(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'done' : ''}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo)}
              />
              <span>{todo.title}</span>
            </label>
            <button className="del" onClick={() => removeTodo(todo.id)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
