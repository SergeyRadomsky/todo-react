import React from 'react'

export const Footer = (props) => {
  // console.log(props.todos);
  
  const qwe = () => {
    props.setTab('all');
    props.visibleList()
  }

  return (
    <div>
      {props.todos.length === 0 ? 
        true : (
          <div>
          <button onClick={() => props.doAll(props.todos)}>Done All</button>
          <button onClick={qwe}>All</button> 
          <button onClick={() => {props.setTab('active')}}>Active</button>
          <button onClick={() => {props.setTab('completed')}}>Completed</button>
          <button onClick={() => props.removeCompleted()}>Clear completed</button> 
        </div>
        )
      }
    </div>
  )
}
