import React, { useMemo } from 'react';
import { Header } from './components/Header/Header.jsx';
import { TodoForm } from './components/TodoForm/TodoForm';
import styles from './App.module.css';
import { TodoList } from './components/TodoList/TodoList.jsx';
// import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { Footer } from './components/Footer/Footer.jsx';

const App = () => {
  // const [todos, setTodos] = useState([])
  // const [tab, setTab] = useState('all')

  // const visibleTodos = useMemo(() => {
  //   if (tab === 'all') {
  //     return todos
  //   }
  //   else if (tab === 'active') {
  //     return todos.filter((todo) => !todo.completed)
  //   }
  //   else if (tab === 'completed') {
  //     return todos.filter((todo) => todo.completed)
  //   }
  // }, [tab, todos])

  // const counterActive = useMemo(() => {
  //   return todos.filter((todo) => !todo.completed).length
  // }, [todos])

  // const addTodo = (title) => {
  //   if (title.trim() && title.length < 150) {
  //     const newTodo = {
  //       text: title,
  //       id: uuidv4(),
  //       completed: false,
  //     };
  //     setTodos([newTodo, ...todos]);
  //   }
  // };

  // const changeValueInTodo = (nextValue, id) => {
  //   const changedValueInTodo = () => todos.map((todo) => {
  //     if (todo.id !== id) {
  //       return todo;
  //     }
  //     return {
  //       ...todo,
  //       text: nextValue,
  //     }
  //   })
  //   setTodos(changedValueInTodo)
  // }

  // const completeTodo = (id) => {
  //   const newTodos = todos.map((todo) => {
  //     if (todo.id !== id) {
  //       return todo;
  //     }
  //     return {
  //       ...todo,
  //       completed: !todo.completed,
  //     };
  //   });
  //   setTodos(newTodos);
  // };

  // const doAll = () => {
  //   const isAllCompleted = todos.every(elem => elem.completed)
  //   const newTodos = todos.map((todo) => {
  //     return {
  //       ...todo,
  //       completed: !isAllCompleted,
  //     };
  //   })
  //   setTodos(newTodos);
  // }

  // const removeTodo = (id) => {
  //   const newTodos = todos.filter((todo) => todo.id !== id);
  //   setTodos(newTodos)
  // }

  // const removeCompleted = () => {
  //   const newTodos = todos.filter((todo) => todo.completed !== true);
  //   setTodos(newTodos)
  // }

  return (
    <div className={styles.App}>
      <Header />
      <TodoForm/>
      <TodoList
        // counterActive={counterActive}
        // visibleTodos={visibleTodos}
        // todos={visibleTodos}
        // tab={tab}
        // setTodos={setTodos}
        // changeValueInTodo={changeValueInTodo}
        // removeTodo={removeTodo}
        // completeTodo={completeTodo}
      />
      {/* <Footer
        todos={todos}
        tab={tab}
        doAll={doAll}
        setTab={setTab}
        removeCompleted={removeCompleted}
      /> */}
    </div>
  );
}

export { App };
