import { useState } from "react";
import TodoItemComponent from "./Components/TodoItemComponent";

function App() {
  const [state, setState] = useState([]);

  const [todo, setTodo] = useState("");

  function handleChange(e) {
    setTodo(e.target.value);
  }

  const printTodo = () => {
    const newItem = { id: state.length, title: todo, completed: false };
    setState([...state, newItem]);
  };

  const handleStatus = (id, completed) => {
    let newState = [...state];

    if (completed == false) {
      newState[id].completed = true;
    } else if (completed == true) {
      newState[id].completed = false;
    }
    setState(newState);
  };

  const deleteTask = (id) => {
    const newState = state.filter((item) => item.id !== id);
    setState(newState);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mt-40 flex justify-center flex-col gap-4 bg-orange-50 p-10 rounded-lg">
        <div className="flex flex-row justify-center mb-10">
          <input
            className="bg-orange-100 p-2 rounded-l-lg border-b-2 border-t-2 border-l-2 border-orange-300 text-xl font-bold"
            type="text"
            placeholder="Todos?"
            onChange={handleChange}
          ></input>
          <button
            className="bg-orange-100 p-2 rounded-r-lg border-2 border-orange-300 text-xl font-bold
            "
            onClick={printTodo}
          >
            Add
          </button>
        </div>
        <div className="bg-orange-100 flex flex-col rounded-lg items-center border-8 border-orange-300 shadow-lg">
          {state.map(function (object) {
            return (
              <TodoItemComponent
                id={object.id}
                title={object.title}
                completed={object.completed}
                handleStatusProp={handleStatus}
                deleteTask={deleteTask}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
