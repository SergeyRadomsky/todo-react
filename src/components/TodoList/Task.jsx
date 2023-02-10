import React, { useState } from 'react'
import styles from './Task.module.css'

export const Task = (props) => {
  const [nextValue, setNextValue] = useState(props.todo.text)
  const [isChange, setIsChange] = useState(false)


const fuck = (e) => {
  e.preventDefault()
  // console.log(nextValue);
  setNextValue(e.target.value)
}

const fuck2 = (e) => {
 e.preventDefault()
 console.log(nextValue);
 console.log(e.target);
}





  const handleChangeText = (e) => {
    e.preventDefault()
    setIsChange(true)
    // setNextValue(e.target.value)
    // if (nextValue.trim() !== "") {
    //   props.changeValueInTodo(nextValue , props.todo.id)
    // } else {
    //   props.changeValueInTodo(props.todo.text, props.todo.id)
    // }
  }

  const noChangeText = (e) => {
    e.preventDefault()
    setNextValue(props.todo.text)
    setIsChange(false)
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

        (<form onChange={fuck} onSubmit={fuck2}>
          <input 
            type="text"
            key={props.id}
            value={nextValue}
            className={styles.inputInTask} 
            onBlur={noChangeText}
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
        onClick={() => props.removeTodo(props.todo.id)}>X</button>
    </div>
    </>
  )
}
