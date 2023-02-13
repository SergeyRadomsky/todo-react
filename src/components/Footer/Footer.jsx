import React from 'react'
import styles from './Footer.module.css'
export const Footer = (props) => {

  const all = () => {
    props.setTab('all');
  }
  const active = () => {
    props.setTab('active');
  }

  const completed = () => {
    props.setTab('completed');
  }

  return (
    <div>
      {props.todos.length === 0 ?
        true : (
          <div>
            <button className={styles.btnFooter} onClick={props.doAll}>Done All</button>
            <button className={props.tab === "all" ? styles.btnFooterActive : styles.btnFooter} onClick={all}>All</button>
            <button className={props.tab === "active" ? styles.btnFooterActive : styles.btnFooter} onClick={active}>Active</button>
            <button className={props.tab === "completed" ? styles.btnFooterActive : styles.btnFooter} onClick={completed}>Completed</button>
            <button className={styles.btnFooter} onClick={props.removeCompleted}>Clear completed</button>
          </div>
        )
      }
    </div>
  )
}
