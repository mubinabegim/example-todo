import React from "react";
import "./styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
function App() {
  let todoList = [
    { id: 111, title: "write the code" },
    { id: 121, title: "clean the home" },
    { id: 131, title: "cook food" },
  ];
  return (
    <div className="App">
      <div className="card border rounded shadow mx-auto my-10">
        <div className="card-title border-b-2 border-amber-200">
          <p className="text-amber-500 p-2 font-semibold">Today's todo</p>
        </div>
        <div className="card-body divide-y divide-slate-200">
          {todoList.map((todo, index) => {
            return (
              <div className="flex justify-between items-center my-2 p-2" key={todo.id}>
                {todo.title}
                <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
