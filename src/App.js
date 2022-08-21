import TodoList from "./TodoList";
import React, { useState, useRef } from "react";

function App() {
  const [todos, setTodos] = useState([{ id: 1, name: 'Todo 1', complete: false}]);
  const todoNameRef = useRef();

  function handleAddTodo(e){
    const name = todoNameRef.current.value;
    if (name=== '') return;
    setTodos(prevTodos => {
      return [...prevTodos, {id:1, name: name, complete:false}]
    })
    todoNameRef.current.value = null;
  }

  return (
    <>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Completed Todos</button>
      <div>{todos.length} left to do</div>
      </>
  )
}

export default App;
