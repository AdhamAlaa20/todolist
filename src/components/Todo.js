import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div    className='Todo'>
        <p  onClick={() => toggleComplete(task.id) }    className={`${task.completed ? 'completed' :""}`}>
            {task.task}</p>
        <div>
            <FontAwesomeIcon icon={faPenToSquare}
            onClick={() => editTodo(task.id)}/>
            <FontAwesomeIcon icon={faTrash} 
            onClick={() => deleteTodo(task.id)}/>
        </div>
    </div>
  )
}
