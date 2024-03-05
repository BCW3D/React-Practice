import React from "react";
import Todo from "./Todo";

function Todos(props) {
  const todos = props.todos;

  //console.log(props);

  return (
    <>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          todo={todo}
          onHandleRemoveTodo={props.onHandleRemoveTodo}
        />
      ))}
    </>
  );
}

export default Todos;
