import React from 'react'

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
          <button onClick={() => props.doAll(props.todos)}>Done All</button>
          <button onClick={() => all()}>All</button> 
          <button onClick={() => active()}>Active</button>
          <button onClick={() => completed()}>Completed</button>
          <button onClick={() => props.removeCompleted()}>Clear completed</button> 
        </div>
        )
      }
    </div>
  )
}
