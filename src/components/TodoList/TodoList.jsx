import React from 'react'
import { Task } from './Task'
import styles from './TodoList.module.css'
import {useSelector} from 'react-redux'

export const TodoList = () => {
  const todos = useSelector(state => state.todos.todosState)
  console.log(todos);

  const counterActive = () => {
    return todos.filter((todo) => !todo.completed).length
  }
  // console.log( counterActive())

  // const counterActive = useMemo(() => {
  //   return todos.filter((todo) => !todo.completed).length
  // }, [todos])
// 
// 

  // console.log(props.todo.);

  return (
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
            // setTodos={todo.setTodos}
            // removeTodo={todo.removeTodo}
            // completeTodo={todo.completeTodo}
            // changeValueInTodo={todo.changeValueInTodo}
          />
        )
      )}
    </div>
  )
}
