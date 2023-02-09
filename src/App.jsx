import React from 'react';
import { Header } from './components/Header/Header.jsx';
import { TodoForm } from './components/TodoForm/TodoForm';
import styles from './App.module.css';
import { TodoList } from './components/TodoList/TodoList.jsx';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { Footer } from './components/Footer/Footer.jsx';







const App = () => {
  const [todos, setTodos] = useState([])
  const [tab, setTab] = useState('all')

const visibleTodos = (tab) => {
  if (tab === 'all') {
    const all = todos
    return all
  }
  else if (tab === 'active') {
    const active = todos.filter((todo) => !todo.completed)
    return active
  }
  else if (tab === 'completed') {
    const completed = todos.filter((todo) => todo.completed)
    return completed
  }
}

const counterActive = () => {
  // console.log(todos);
  return todos.filter((todo) => !todo.completed).length 
}

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

  const doAll = () => {
    // const activeTask = todos.find((todo) => !todo.completed);
    // const targetCompletedValue = Boolean(activeTask);

    // const newTodos = todos.map((todo) => ({
    //   ...todo,
    //   completed: targetCompletedValue,
    // }));

    // setTodos(newTodos);

    const newTodos = todos.map((todo) => {
      if (todo.completed === false) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    })

    if (todos.every(elem => elem.completed === true)) {
      const newTodos2 = todos.map((todo) => {
        if (todo.completed) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        };
        return todo;
      })
      setTodos (newTodos2);
      return newTodos;
    }
    setTodos (newTodos);
  }

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos)
  }
  
  const removeCompleted = () => {
    const newTodos = todos.filter((todo) => todo.completed !== true);
    setTodos(newTodos)
  }

  return (
    <div className={styles.App}>
      <Header />
      <TodoForm addTodo={addTodo} />
      <TodoList
        counterActive={counterActive}
        completeTodo={completeTodo}
        todos={visibleTodos(tab)}
        removeTodo={removeTodo} 
        visibleTodos={visibleTodos} 
        todosLength={visibleTodos('active')}
      />
      <Footer
        doAll={doAll} 
        todos={todos} 
        removeCompleted={removeCompleted} 
        setTab={setTab}
        tab={tab}
      />
    </div>
  );
}

export default App;
