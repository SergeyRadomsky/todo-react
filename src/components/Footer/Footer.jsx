import React from 'react'

export const Footer = (props) => {
  // console.log(props.todos);
  
  return (
    <div>
      {props.todos.length === 0 ? 
        true : (
        <div>
          <button onClick={() => props.selectAll(props.todos)}>Done All</button>
          <button>Active</button>
          <button>Completed</button>
          <button>Clear All</button> 
        </div>
        )
      }
    </div>
  )
}
