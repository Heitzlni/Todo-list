import { useState } from "react";
import "./App.css";
import TodoList from "./components/ToDoList";
import CheckedToDoList from "./components/CheckedToDoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { name: todo, done: false }]);
    setTodo("");
  };

  const deleteTodoFunction = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodofunction = (index) => {
    setEditTodo(index);
    if (editTodo === index) {
      setEditTodo(null);
    }
  };

  const doneTodoFunction = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={handleSubmit}>Eingabe</button>
      </form>
      <button
        className="deleteButtonAll"
        onClick={() => {
          setTodos([]);
        }}
      >
        Alles Löschen
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <TodoList
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
        <div>
          <p>fertige Todos:</p>
        </div>
        <CheckedToDoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
}

export default App;
