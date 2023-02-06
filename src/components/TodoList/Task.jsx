import React from 'react'
// import { TodoForm } from '../TodoForm/TodoForm'
// import styles from './Task.module.css'
import styles from './Task.module.css'
import { TodoList } from './TodoList'
// import { useState } from 'react'

export const Task = (props) => {
//  const []

  // todo.find(item => item.id === id)

  const handleChange = (id) => {
    props.completedTodo(id);
  }

  return (
    <div className={styles.Task}>
      <input type="checkbox" onChange={() => handleChange(props.id)} className={styles.checkbox} checked={props.completed}></input>
      <p className={styles.taskText}>{props.text}</p>
      <button className={styles.delete}>X</button>
    </div>
  )
}
