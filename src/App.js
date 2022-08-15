import TodoList from "./TodoList";
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([])


  return (
    <>
      <TodoList />
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Completed Todos</button>
      <div>0 left to do</div>
      </>
  )
}

export default App;
