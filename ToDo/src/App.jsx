import { useState } from "react";
import "./App.css";

function DeleteButton({ deleteFunction }) {
  return (
    <>
      <button
        // className="deleteButton"
        onClick={() => {
          deleteFunction();
        }}
      >
        <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
          <path d="M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5v7a.5.5 0 01-1 0v-7a.5.5 0 011 0z" />
        </svg>
      </button>
    </>
  );
}
function EditTodo({ EditTodofunction }) {
  return (
    <>
      <button
        className="editTodo"
        style={{ marginLeft: "10px" }}
        onClick={() => {
          EditTodofunction();
        }}
      >
        <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
          <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z" />
          <path
            fillRule="evenodd"
            d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z"
          />
        </svg>
      </button>
    </>
  );
}

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const [editTodo, setEditTodo] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
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
        {todos.map((todo, index) => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px auto",
              width: "60vw",
              border: "1px solid black",
              padding: "10px",
              borderRadius: "5px",
              alignItems: "center",
              background: "#000",
              flexDirection: "row",
            }}
            key={index}
          >
            {editTodo === index ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setEditTodo(null);
                }}
              >
                <input
                  value={todo}
                  onChange={(e) => {
                    const newTodos = [...todos];
                    newTodos[index] = e.target.value;
                    setTodos(newTodos);
                  }}
                />
              </form>
            ) : (
              <p>{todo}</p>
            )}
            <div>
              <DeleteButton
                deleteFunction={() => {
                  const newTodos = [...todos];
                  newTodos.splice(index, 1);
                  setTodos(newTodos);
                }}
              />
              <EditTodo
                EditTodofunction={() => {
                  setEditTodo(index);

                  if (editTodo === index) {
                    setEditTodo(null);
                  }
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default App;
