import React from 'react'
import { Task } from './Task'
import styles from './TodoList.module.css'


export const TodoList = (props) => {

  return (
    <div>
      {props.counterActive > 0 ? 
        (<div className={styles.TaskCounterFrase}>{props.counterActive} tasks for tooday</div>) : 
        (<div className={styles.TaskCounterFrase2}></div>)
      }
      {(props.todos.length === 0) ? (
        <p className={styles.TaskCounterFrase} >
          No {props.tab} tasks for you today
        </p>
      ) : (
        props.todos.map((todo) =>
          <Task
          todo={todo}
          key={todo.id}
          setTodos={props.setTodos}
          removeTodo={props.removeTodo}
          completeTodo={props.completeTodo}
          changeValueInTodo={props.changeValueInTodo}
          />
        )
      )}
    </div>
  )
}
