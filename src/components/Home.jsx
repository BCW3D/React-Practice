import React, { useState } from "react";
import Todos from "./Todos";
import style from "./home.module.css";
import NewTodo from "./NewTodo";

const dummyTodos = [
  { id: 1, title: "Todo01", desc: "Desc01" },
  { id: 2, title: "Todo02", desc: "Desc02" },
];
function Home() {
  const [todos, setTodos] = useState([]);

  const handleNewTodo = (newTodo) => {
    setTodos((todos) => {
      return [...todos, newTodo];
    });
  };

  const handleRemoveTodo = (id) => {
    setTodos((prevTodos) => {
      const filteredTodo = prevTodos.filter((todo) => todo.id != id);
      return filteredTodo;
    });
  };

  return (
    <div className={style.container}>
      <h1>TODO APP</h1>
      <NewTodo onHandleNewTodo={handleNewTodo} />
      <Todos todos={todos} onHandleRemoveTodo={handleRemoveTodo} />
    </div>
  );
}

export default Home;
