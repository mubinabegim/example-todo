import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faTrash } from "@fortawesome/free-solid-svg-icons";
import CardFooter from './CardFooter';

const Card = ({addTodo, todoList, deleteTodo, deleteAll}) => {
    return (
        <div className="card border rounded shadow mx-auto my-10">
        <div className="card-title border-b-2 border-amber-200">
          <p className="text-amber-500 p-2 font-semibold">Today's todo</p>
        </div>
        <div className="card-body divide-y divide-slate-200">
          <form onSubmit={addTodo}>
            <div className="flex justify-between p-2">
              <input type="text" className="outline-0 w-full" placeholder="Add your comments" />
              <button type="submit">
                <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
              </button>
            </div>
          </form>
          {todoList.map((todo) => {
            return (
              <div
                className="card-body flex justify-between items-center my-2 p-2"
                key={todo.id}
              >
                {todo.title}
                <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTrash} onClick={()=>deleteTodo(todo.id)}></FontAwesomeIcon>
              </div>
            );
          })}
          <CardFooter deleteAll={deleteAll} />
        </div>
      </div>
    );
}

export default Card;