import React from 'react'
import { Task } from './Task'
import styles from './TodoList.module.css'


export const TodoList = (props) => {

console.log(props);


  return (
    <div >
      <div className={styles.tyr}>Your tasks for tooday</div>
      {
        props.todos.map(( todo ) =>
         <Task completedTodo={props.completedTodo} key={todo.id} id={todo.id} text={todo.text} completed={todo.completed}/>
        )
      }
    </div>
  )
}
