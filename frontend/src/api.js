const API = "/api/todos";

export const fetchTodos = () => fetch(API).then(res => res.json());

export const createTodo = (title) =>
  fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, completed: false }),
  }).then(res => res.json());

export const updateTodo = (todo) =>
  fetch(`${API}/${todo.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  }).then(res => res.json());

export const deleteTodo = (id) =>
  fetch(`${API}/${id}`, { method: "DELETE" });
