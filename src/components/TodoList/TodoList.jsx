import React from 'react'
import { Footer } from '../Footer/Footer';
import { Task } from './Task'
import styles from './TodoList.module.css'


export const TodoList = (props) => {

// console.log(props);


  return (
    <div>
      {props.todos.length > 0 ? 
        <div className={styles.TaskCounterFrase}>{props.todos.length} tasks for tooday</div> : true
      }
      {
        props.todos.length === 0 ? <p className={styles.TaskCounterFrase}>No tasks for you today</p> : (
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
    {/* <Footer /> */}
    </div>
  )
}
