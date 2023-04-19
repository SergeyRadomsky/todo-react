import { useState } from 'react'
import React from 'react'
import styles from './TodoForm.module.css'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/TDSlice'
// import {useSelector} from 'react-redux'




export const TodoForm = () => {
  const [text, setText] = useState("")
  const dispatch = useDispatch()
  // const todos = useSelector(state => state.todos.todosState)
  
  const handleAddTodo = (e) => {
    e.preventDefault()
    dispatch(addTodo(text))
    // console.log({text});
    // console.log({todos});
    setText("")
}

const handleInputSubmit = (e) => {
  setText(e.target.value)
}

  return (
    <form className={styles.TodoForm} onSubmit={handleAddTodo}>
      <input 
        className={styles.inputArea}
        placeholder="What needs to be done?"
        type="text"
        onChange={handleInputSubmit}
        value={text}
      />
      <button 
        className={styles.btnInput}>
          New To do
      </button>
    </form>
  )
}
