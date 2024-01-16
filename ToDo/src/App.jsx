import { useState } from 'react'
import './App.css'


function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);

  }
  return (
    <>

      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleSubmit} >Eingabe</button>
      <div>
        {todos}
      </div>
    </>
  )
}


export default App

