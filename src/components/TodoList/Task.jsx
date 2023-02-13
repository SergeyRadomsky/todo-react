import React, { useState } from 'react'
import styles from './Task.module.css'

export const Task = (props) => {
  const [nextValue, setNextValue] = useState(props.todo.text)
  const [isChange, setIsChange] = useState(false)


  const changeTaskForm = (e) => {
    e.preventDefault()
    setNextValue(e.target.value)
  }

  const submitTaskForm = (e) => {
    e.preventDefault()
    setIsChange(true)
    if (nextValue.trim() !== "") {
      props.changeValueInTodo(nextValue, props.todo.id)
    }
    else { setNextValue(props.todo.text) }
    setIsChange(false)
  }

  const escFunc = (e) => {
    e.preventDefault()
    if (e.code === "Escape") {
      setNextValue(props.todo.text)
      setIsChange(false)
    }
  }

  const handleChangeText = (e) => {
    e.preventDefault()
    setIsChange(true)
  }

  const handleChange = () => {
    props.completeTodo(props.todo.id);
  }

  return (
    <>
      <div className={styles.Task}>
        <input
          type="checkbox"
          onChange={handleChange}
          className={styles.checkbox}
          checked={props.todo.completed}>
        </input>
        {isChange ?
          (<form
            onChange={changeTaskForm}
            onSubmit={submitTaskForm}
          >
            <input
              onKeyUp={escFunc}
              autoFocus
              type="text"
              key={props.id}
              value={nextValue}
              className={styles.inputInTask}
            >
            </input>
          </form>) :
          (!props.todo.completed ?
            (<div
              className={styles.taskText}
              onDoubleClick={handleChangeText}>
              {nextValue}
            </div>)
            :
            (<div
              className={`${styles.taskText} ${styles.TaskComplete}`}
              onClick={handleChangeText}>
              {nextValue}
            </div>)
          )
        }
        <button
          className={styles.delete}
          onClick={() => props.removeTodo(props.todo.id)}>X
        </button>
      </div>
    </>
  )
}
