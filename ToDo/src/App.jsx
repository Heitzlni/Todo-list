import { useState } from 'react';
import './App.css';

function DeleteButton({ deleteFunction }) {
  return (
    <>
      <button
        className='deleteButton'
        onClick={() => {
          deleteFunction();
        }}>
        Löschen
      </button>
    </>
  );
}
function EditTodo({ EditTodofunction }) {
  return (

    <>
      <button
        className='editTodo'
        onClick={() => {
          EditTodofunction();
        }}>
        Todo Editieren
      </button>
    </>
  )
}

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo('');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={handleSubmit}>Eingabe</button>
      </form>

      <button
        className='deleteButtonAll'
        onClick={() => {
          setTodos([]);
        }}>
        Alles Löschen
      </button>
      <div>
        {todos.map((todo, index) => (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: '10px auto',
              width: '80vw',
              border: '1px solid black',
              padding: '10px',
              borderRadius: '5px',
              alignItems: 'center',
              background: '#000',
            }}
            key={index}>
            <p>{todo}</p>
            <DeleteButton
              deleteFunction={() => {
                const newTodos = [...todos];
                newTodos.splice(index, 1);
                setTodos(newTodos);
              }}
            />
            <p>{todo}</p>
            <EditTodo
             EditTodofunction={(updatedTodo) => {
               const newTodos = [...todos];
               newTodos[index] = updatedTodo;
               setTodos(newTodos);
             }}
/>



          </div>
        ))}
      </div>
    </>
  );
}
export default App;
