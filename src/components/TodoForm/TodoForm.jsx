import styles from './TodoForm.module.css'

export const TodoForm = () => {
  return (
    <form className={styles.TodoForm}>
      <input className={styles.inputArea}
      // className={}
      placeholder="What needs to be done?"
      type="text"
      // value={}
      // onChange={}
    />
    <button className={styles.btnInput}>New To do</button>
  </form>
    
    // <div className='TodoForm'>
    //   <input type="" />
    //   ib
    // </div>
  )
}
