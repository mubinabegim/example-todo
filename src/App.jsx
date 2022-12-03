import React, { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [todo, setTodo] = useState([
    { id: 111, title: "write the code" },
    { id: 121, title: "clean the home" },
    { id: 131, title: "cook food" },
  ]);

  useEffect(() => {
    localStorage.getItem("todoList")
      ? setTodo(JSON.parse(localStorage.getItem("todoList")))
      : localStorage.setItem("todoList", JSON.stringify(todo));
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    let newObj = {
      id: Date.now(),
      title: e.target[0].value,
    };
    if (newObj.title !== "") {
      setTodo([...todo, newObj]);
      localStorage.setItem("todoList", JSON.stringify([...todo, newObj]));
      e.target.reset();
    }
  };

  const deleteTodo = (id) => {
    let confirmation =window.confirm("Are you sure to delete this item?");
    if(confirmation){
      let data = todo.filter((t) => t.id !== id);
      setTodo(data);
      localStorage.setItem("todoList", JSON.stringify(data));
    }
  };
  const deleteAll = (id) =>{
    let confirm = window.confirm("Are you sure you want to delete all items?");
    if(confirm){
      setTodo([]);
      localStorage.setItem("todoList", JSON.stringify([]));
    }
  }

  return (
    <div className="App">
      <Card addTodo={addTodo} todoList={todo} deleteTodo={deleteTodo} deleteAll={deleteAll} />
    </div>
  );
}

export default App;
