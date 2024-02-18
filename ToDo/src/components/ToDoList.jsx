import DeleteButton from "./buttons/DeleteButton";
import EditButton from "./buttons/EditButton";
import DoneButton from "./buttons/DoneButton";

function ToDoList({ todos, setTodos, editTodo, setEditTodo }) {
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
    // const newTodos = todos.filter((t) => t !== todo);
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  return todos.map((todo, index) => {
    if (todo.done == false) {
      return (
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
                value={todo.name}
                onChange={(e) => {
                  const newTodos = [...todos];
                  newTodos[index].name = e.target.value;
                  setTodos(newTodos);
                }}
              />
            </form>
          ) : (
            <p>{todo.name}</p>
          )}
          <div>
            <DeleteButton
              deleteFunction={() => {
                deleteTodoFunction(index);
              }}
            />
            <EditButton
              editFunction={() => {
                editTodofunction(index);
              }}
            />
            <DoneButton
              doneFunction={() => {
                doneTodoFunction(index);
              }}
            />
          </div>
        </div>
      );
    } else {
      return null;
    }
  });
}

export default ToDoList;
