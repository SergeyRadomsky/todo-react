import React from 'react';
import { Header } from './components/Header/Header.jsx';
import { TodoForm } from './components/TodoForm/TodoForm';
import styles from './App.module.css';
import { TodoList } from './components/TodoList/TodoList.jsx';
import { useState, useMemo } from 'react';
import { v4 as uuidv4 } from "uuid";
import { Footer } from './components/Footer/Footer.jsx';

const App = () => {
  const [todos, setTodos] = useState([])
  // const [filterTodos, setFilterTodos] = useState([])

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

  const completeTodo = (id) => {
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




  // (todos.every((todo) => todo.completed === false))
  // console.log([1,1,1,1,1].every(item => item === 1))

  const selectAll = () => {
    const activeTask = todos.find((todo) => !todo.completed);
    const targetCompletedValue = Boolean(activeTask);

    const newTodos = todos.map((todo) => ({
      ...todo,
      completed: targetCompletedValue,
    }));

    setTodos(newTodos);

  //   const newTodos = todos.map((todo) => {
  //     if (todo.completed === false) {
  //       return {
  //         ...todo,
  //         completed: !todo.completed,
  //       };
  //     }
  //     return todo;
  //   })

  //   if (todos.every(elem => elem.completed === true)) {
  //     const newTodos2 = todos.map((todo) => {
  //       if (todo.completed) {
  //         return {
  //           ...todo,
  //           completed: !todo.completed,
  //         };
  //       };
  //       return todo;
  //     })
  //     setTodos (newTodos2);
  //     return newTodos;
  //   }
  //   setTodos (newTodos);
  }


  // const checkCompleted = (todos) => {
  //   const checkArr = todos.filter((todo) => {
  //     if (todo.completed) {
  //       console.log(checkArr);
  //       return {
  //         ...todo,
  //         completed: !todo.completed,
  //       };
  //     }
  //     return todo
  //   })
  //   setTodos(checkArr)
  // }


  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos)
  }

  return (
    <div className={styles.App}>
      {/* <div className=''></div> */}
      <Header />
      <TodoForm addTodo={addTodo} />
      <TodoList
        completeTodo={completeTodo}
        todos={todos}
        removeTodo={removeTodo} />
      {/* <button onClick={() => call2.allTasks(todos)}>
        call
      </button> */}
      <Footer selectAll={selectAll} todos={todos} />
    </div>
  );
}

export default App;
