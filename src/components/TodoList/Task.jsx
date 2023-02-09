import React from 'react'
import styles from './Task.module.css'

export const Task = (props) => {

  const handleChange = (id) => {
    props.completeTodo(id);
  }

  return (
    <>
    <div className={styles.Task}>
      <input 
        type="checkbox" 
        onChange={() => handleChange(props.id)} 
        className={styles.checkbox} 
        checked={props.completed}>
      </input>
      {!props.completed ? <p className={styles.taskText}>{props.text}</p> : 
        <p className={`${styles.taskText} ${styles.TaskComplete}`}>{props.text}</p>
      }
      <button 
        className={styles.delete} 
        onClick={() => props.removeTodo(props.id)}>X</button>
    </div>
    </>
  )
}
