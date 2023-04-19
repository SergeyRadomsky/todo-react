import React, { useState } from 'react'
import styles from './Task.module.css'
import { useDispatch} from 'react-redux'
import { changeValueInTodo, completeTodo, removeTodo} from '../../store/TDSlice'

export const Task = (props) => {
  const dispatch = useDispatch()
  // const todos = useSelector(state => state.todos.todosState)
  // console.log(todos);
  const [nextValue, setNextValue] = useState(props.todo.text)
  console.log(nextValue);
  const [isChange, setIsChange] = useState(false)


  const changeTaskForm = (e) => {
    e.preventDefault()
    setNextValue(e.target.value)
  }

  const submitTaskForm = (e) => {
    e.preventDefault()
    setIsChange(true)
    if (nextValue.trim() !== "") {
      dispatch(changeValueInTodo(nextValue, props.todo.id))
    }
    else { 
      setNextValue(props.todo.text) 
      dispatch(changeValueInTodo(nextValue, props.todo.id))
    }
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
    dispatch(completeTodo(props.todo.id))
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
          onClick={() => dispatch.removeTodo(props.todo.id)}>X
        </button>
      </div>
    </>
  )
}
