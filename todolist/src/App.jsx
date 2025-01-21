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

  return (
    <div className="flex flex-col items-center">
      <div className="m-10 flex justify-center flex-col gap-4">
        <div className="flex flex-row justify-center mb-10">
          <input
            className="bg-gray-300 p-2 rounded-l-lg border-b-2 border-t-2 border-l-2 border-black"
            type="text"
            placeholder="Todos?"
            onChange={handleChange}
          ></input>
          <button
            className="bg-gray-300 p-2 rounded-r-lg border-2 border-black"
            onClick={printTodo}
          >
            Add
          </button>
        </div>
        <div className="bg-blue-300 flex flex-col rounded-lg items-end ">
          {state.map(function (object) {
            return (
              <TodoItemComponent
                id={object.id}
                title={object.title}
                completed={object.completed}
                handleStatusProp={handleStatus}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
