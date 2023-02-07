import { useState } from 'react'
import styles from './TodoForm.module.css'

export const TodoForm = (props) => {
const [text, setText] = useState("")

const handleAddTodo = (e) => {
  e.preventDefault()
  props.addTodo(text)
  setText("")
}


const handleInputSubmit = (e) => {
  setText(e.target.value)
  // console.log(e.target.value);
  // return false
}


  return (
    <form className={styles.TodoForm} onSubmit={handleAddTodo}>
      <input 
        className={styles.inputArea}
        placeholder="What needs to be done?"
        type="text"
        onChange={handleInputSubmit}
        value={text}
        // onChange={}
      />
      <button 
        className={styles.btnInput}>
          New To do
      </button>
    </form>
  )
}
