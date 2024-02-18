import DeleteButton from "./buttons/DeleteButton";
import DoneButton from "./buttons/DoneButton";

function CheckedToDoList({ todos, setTodos }) {
  const deleteTodoFunction = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const doneTodoFunction = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  return todos.map((todo, index) => {
    if (todo.done == true) {
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
          <p style={{ textDecoration: "line-through" }}>{todo.name}</p>
          <div>
            <DeleteButton deleteFunction={() => deleteTodoFunction(index)} />
            <DoneButton doneFunction={() => doneTodoFunction(index)} />
          </div>
        </div>
      );
    } else {
      return null;
    }
  });
}
export default CheckedToDoList;
