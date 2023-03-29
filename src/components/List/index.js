import React from 'react'
import PropTypes from 'prop-types'
import {MdDelete} from 'react-icons/md'
import './style.css'

function List({todos, onToggle, onRemove}) {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
          <li key={todo.key}>
            <span
              onClick={() => onToggle && onToggle(todo)}
              onKeyPress={() => onToggle && onToggle(todo)}
              role='button'
              tabIndex={0}
              className={todo.checked ? 'checked' : ''}
            >{todo.title}</span>

            <button
              type='button'
              onClick={() => onRemove && onRemove(todo)}
            >
              <MdDelete size={24}/>
            </button>
          </li>
        ))}
    </ul>
  );
}

List.prototype = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default List
