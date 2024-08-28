import React, { useState, useEffect } from "react";

const TodoForm = () => {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  // const [task, setTask] = useState({ date:'', title:'', description:''});

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date && title && description) {
      const newTodo = { date, title, description };
      setTodos([...todos, newTodo]);
      setDate("");
      setTitle("");
      setDescription("");
    }
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Add Todo</button>
      </form>

      <h2>Todo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <ul>
              <h2>{todo.title}</h2>
              <li>
                Date: {todo.date}
              </li>
              <li>
                Description: {todo.description}
              </li>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoForm;
