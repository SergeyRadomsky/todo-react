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
  // const  [savetodos, setSaveTodos] = useState(todos)
  const [tab, setTab] = useState('all')

const visibleList = () => {
  if (tab === "all") {
     const a = React.memo(visibleTodos.all)
    console.log("all ", a);
  }
  if (tab === "active") {
    const b = React.memo(visibleTodos.active)
    console.log("active ", b);
  }
  if (tab === "completed") {
    const c = React.memo(visibleTodos.completed)
    console.log("completed", c);
  }
}

const visibleTodos = useMemo(
  () => ({
    // tab: tab,
    all: todos,
    active: todos.filter((todo) => !todo.completed),
    completed: todos.filter((todo) => todo.completed),
  }),
  [todos]
  );
  // setTodos(todos)
  console.log(tab);
  // console.log(todos, "  TOOODDDDDDDDDDDOOOOOOOOOS");
console.log(visibleTodos);

// ИЛИ СНОСИТЬ ИЛИ УДАЛИТЬ
  // const filterTodos = (todos, tab) => {
  //   return todos.filter(todo => {
  //     if (tab === 'All') {
  //       console.log(tab);
  //       return true
  //     }
  //     else if ( tab === 'active') {
  //       console.log(tab);
  //       return todo.completed
  //     }
  //     else if ( tab === 'completed') {
  //       console.log(tab);
  //       return !todo.completed
  //     }
  //   });
  // }



  // const showActive = () => {
  //   console.log(savetodos);
  //   setSaveTodos(todos)
  //   if (1) {
  //     setTodos(todos.filter((todo) => !todo.completed === true))
  //   }
  //   setSaveTodos( todos)
  //   console.log(savetodos);
  // }

  // const showAll = () => {
  //   console.log(savetodos);
  //   setSaveTodos(todos)
  //   if (1) {
  //     setTodos(todos.filter((todo) => todo))
  //   }
  //   setTodos(todos)
  //   setSaveTodos( savetodos)

  //   console.log(savetodos);
  // }

  // const showCompleted = () => {
  //   console.log(savetodos);
  //   setSaveTodos(todos)
  //   // setSaveTodos(todos)
  //   if (1) {
  //     setTodos(todos.filter((todo) => !todo.completed === false))
  //   }
  //   setSaveTodos( todos)
  //   console.log(savetodos);
  // }

  // console.log(tab);
  // let timeTodo = todos
  // console.log(timeTodo);


  // const changeTab = (e) => {
  //   setTab("Active")
  //   todos = todos
  //   let a = todos
  //   setTodos(todos.filter((todo) => !todo.completed))
  //   console.log(tab);
  // }

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
  
  const removeCompleted = () => {
    const newTodos = todos.filter((todo) => todo.completed !== true);
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
      <Footer
      visibleList={visibleList}
      visibleTodos={visibleTodos}
        // showAll={showAll}
        // showActive={showActive}
        // showCompleted={showCompleted}
        doAll={doAll} 
        todos={todos} 
        removeCompleted={removeCompleted} 
        // changeTab={changeTab}
        setTab={setTab}
        tab={tab}
        />
    </div>
  );
}

export default App;
