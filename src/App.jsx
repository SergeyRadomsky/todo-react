import React from 'react';
import { Header } from './components/Header/Header.jsx';
import { TodoForm } from './components/TodoForm/TodoForm';
import styles from './App.module.css';
import { TodoList } from './components/TodoList/TodoList.jsx';
import { useState } from 'react';
import { v4 as uuidv4} from "uuid";

const App = (props) => {
const [todos, SetTodos] = useState([])

const addTodo = (title) => {
  if (title.trim() !== "") {
    const newTodo = {
      text: title,
      id: uuidv4(),
      comleted: false,
    };
    SetTodos([newTodo, ...todos]);
    
  }
};
console.log(todos);


  return (
    <div className={styles.App}>
      {/* <div className=''></div> */}
      <Header/>
      <button
        onClick={() => props.object2.t(todos)}
      >
        call
      </button>
      <TodoForm addTodo={addTodo}/>
      <TodoList />
    </div>
  );
}

export default App;
