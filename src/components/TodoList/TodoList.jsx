import React from 'react'
import { Task } from './Task'
import styles from './TodoList.module.css'
import {useSelector} from 'react-redux'
import { visibleTodos } from '../../store/TDSlice'
// import { useMemo } from 'react'
// import { useDispatch } from 'react-redux'


export const TodoList = () => {
  // const dispatch = useDispatch()
  // const visibleTodos = useDispatch(state => state.todos)
  const todos = useSelector(state => state.todos.todosState)
  // const visibleTodo = useSelector(visibleTodos)
  console.log(todos);

  const counterActive = () => {
    // console.log(todos.filter((todo) => !todo.completed).length);
    return todos.filter((todo) => !todo.completed).length
  }
  // console.log( counterActive())

  // const counterActive = useMemo(() => {
  //   return todos.filter((todo) => !todo.completed).length
  // }, [todos])
// 
// 

  return (
    // <div>
    //   {() => counterActive}
    // </div>
    <div>
      {counterActive() <= 0 ?
        (<div className={styles.TaskCounterFrase}>{"No "} task for today</div>) :
        (<div className={styles.TaskCounterFrase2}>You have to do {counterActive()} {(counterActive() === 1 ? " task" : " tasks")}</div>)
      }
      {(todos.length <= 0) ? 
      (
        <p className={styles.TaskCounterFrase}>
          {(counterActive() === 0) ? "" : (counterActive())} 
        </p>
      ) : (
        todos.map((todo) =>
          <Task
            todo={todo}
            key={todo.id}
            setTodos={todo.setTodos}
            removeTodo={todo.removeTodo}
            completeTodo={todo.completeTodo}
            changeValueInTodo={todo.changeValueInTodo}
          />
        )
      )}
    </div>
  )
}
