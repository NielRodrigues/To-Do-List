import React, { useState } from 'react';
import PropTypes from 'prop-types'
import './style.css'

const AddTask = ({ onAddTask }) => {

  const ENTER_KEY = 13,
  ESCAPE_KEY = 27

  const [value, setValue] = useState("");


  const erase = (event) => {
    setValue('')
    event.target.value = ''
  }
  const submit = (event) => {

    if(!onAddTask){
      return
    }

    // Acrescentando uma tarefa nova
    onAddTask(value)
    erase(event);
  }
  const onChange = (event) => {
    setValue(event.target.value);
  }
  const onKeyDown = (event) => {
    if(event.which === ENTER_KEY){ // Enter Key Pressed
      submit(event);
    } else if (event.which === ESCAPE_KEY) { // Escape Key (ESC) Pressed
      erase(event);
    }
  }

  return (
    <input
      className='new-todo'
      placeholder='Adicione uma tarefa...'
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}

AddTask.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default AddTask;
