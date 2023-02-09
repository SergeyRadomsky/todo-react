import React from 'react'
import { Task } from './Task'
import styles from './TodoList.module.css'


export const TodoList = (props) => {



  return (
    <div>
      {props.counterActive() > 0 ? 
        <div className={styles.TaskCounterFrase}>{props.counterActive()} tasks for tooday</div> : null
      }
      {
        (props.todos.length === 0) ? <p className={styles.TaskCounterFrase}>No tasks for you today</p> : (
        props.todos.map(( todo ) => 
          <Task 
            completeTodo={props.completeTodo} 
            key={todo.id} id={todo.id} 
            text={todo.text} 
            completed={todo.completed} 
            removeTodo={props.removeTodo}/>
          )
        )
      }
    </div>
  )
}
