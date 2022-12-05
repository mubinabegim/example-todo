import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Card from "./components/Card";

function App() {
  const [todo, setTodo] = useState([
    // { id: 111, title: "write the code", isdone:true },
    // { id: 121, title: "clean the home", isdone:false },
  ]);

  useEffect(() => {
    localStorage.getItem("todoList")
      ? setTodo(JSON.parse(localStorage.getItem("todoList")))
      : localStorage.setItem("todoList", JSON.stringify(todo));
  }, []);

  const cardFooter = document.querySelector('.card-footer');
  const addTodo = (e) => {
    e.preventDefault();
    let newObj = {
      id: Date.now(),
      title: e.target[0].value,
    };
    if (newObj.title !== "") {
      setTodo([...todo, newObj]);
      localStorage.setItem("todoList", JSON.stringify([...todo, newObj]));
      toast("New item added successfully!")
      e.target.reset();
      cardFooter.classList.remove('hidden')
    }
  };

  const deleteTodo = (id) => {
    let confirmation =window.confirm("Are you sure to delete this item?");
    if(confirmation){
      let data = todo.filter((t) => t.id !== id);
      setTodo(data);
      toast("This item has been deleted")
      localStorage.setItem("todoList", JSON.stringify(data));
    }
  };
  const deleteAll = (id) =>{
    // const cardBody = document.querySelector('.card-body')
    const cardFooter = document.querySelector('.card-footer')
    let confirm = window.confirm("Are you sure you want to delete all items?");
    if(confirm){
      setTodo([]);
      toast("All items deleted")
      // cardBody.innerHTML+="no items here"
      cardFooter.classList.add('hidden')
      localStorage.setItem("todoList", JSON.stringify([]));
    }
  }
const strikeMode = (id) =>{
  setTodo(
    todo.map(checkedBox =>{
      if(checkedBox.id===id){
        checkedBox.isdone = !checkedBox.isdone
      console.log(checkedBox);
        if(checkedBox.isdone){
          toast('This item has been marked')
        }else toast('This item has  been removed')
        return checkedBox
      } return checkedBox

    })
    )

}
  return (
    <div className="App">
      <Card addTodo={addTodo} todoList={todo} deleteTodo={deleteTodo} deleteAll={deleteAll} strikeMode={strikeMode} />
    </div>
  );
}

export default App;
