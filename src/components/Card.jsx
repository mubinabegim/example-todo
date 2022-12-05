import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faTrash } from "@fortawesome/free-solid-svg-icons";
import CardFooter from "./CardFooter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Card = ({ addTodo, todoList, deleteTodo, deleteAll, strikeMode }) => {
  return (
    <>
      <ToastContainer />
      <div className="card border rounded shadow mx-5 md:mx-auto my-10">
        <div className="card-title border-b-2 border-amber-200">
          <p className="text-amber-500 p-2 font-semibold">Today's todo</p>
        </div>
        <div className="card-body divide-y divide-slate-200">
          <form onSubmit={addTodo}>
            <div className="flex justify-between p-2">
              <input
                type="text"
                required
                className="outline-0 w-full"
                placeholder="Add your comments"
              />
              <button type="submit">
                <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
              </button>
            </div>
          </form>

          {todoList.length === 0 ?  <p className="p-2 text-center text-red-500">No item here yet</p> :  todoList.map((todo) => {
            if (todo.isdone) {
              return (
                <div
                  className="card-body flex justify-between items-center my-2 p-2"
                  key={todo.id}
                >
                  <div className="flex items-center gap-2">
                    <input
                      className="checkbox"
                      onChange={() => strikeMode(todo.id)}
                      type="checkbox"
                    />

                    <span className={"line-through "}> {todo.title}</span>
                  </div>

                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => deleteTodo(todo.id)}
                  ></FontAwesomeIcon>
                </div>
              );
            } else {
              return (
                <div
                  className="card-body flex justify-between items-center my-2 p-2"
                  key={todo.id}
                >
                  <div className="flex items-center gap-2">
                    <input
                      onChange={() => strikeMode(todo.id)}
                      type="checkbox"
                    />
                    <span>{todo.title}</span>
                  </div>

                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => deleteTodo(todo.id)}
                  ></FontAwesomeIcon>
                </div>
              );
            }
          })}
          <CardFooter deleteAll={deleteAll} />
        </div>
      </div>
    </>
  );
};

export default Card;
