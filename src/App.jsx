import React from 'react';
import { Header } from './components/Header/Header.jsx';
import { TodoForm } from './components/TodoForm/TodoForm';
import styles from './App.module.css';
import { TodoList } from './components/TodoList/TodoList.jsx';
import { useState } from 'react';
import { v4 as uuidv4} from "uuid";

const App = (props) => {
const [todos, setTodos] = useState([])

const addTodo = (title) => {
  if (title.trim() !== "" && title.length < 150) {
    const newTodo = {
      text: title,
      id: uuidv4(),
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    
  }
};

const completedTodo = (id) => {
  const newTodos = todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        completed: !todo.completed,
      };
    }

    return todo;
  });

  setTodos(newTodos);
};

  return (
    <div className={styles.App}>
      {/* <div className=''></div> */}
      <Header/>
      <TodoForm addTodo={addTodo}/>
      <TodoList completedTodo={completedTodo} todos={todos}/>
      {/* <button onClick={() => call2.allTasks(todos)}>
        call
      </button> */}
    </div>
  );
}

export default App;
