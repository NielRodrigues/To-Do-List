import React, { useState } from 'react';
import AddTask from './components/AddTask';
import List from './components/List';
import Footer from './components/Footer';
import './App.css';

const App = () => {

  // States
  const [todos, setTodos] = useState([]);



  // Lógica/Funções
  const onAddTask = (value) => {
    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        title: value,
        checked: false
      }
    ])
  }
  const onToggle = (todo) => {

    setTodos(
      todos.map((obj) => obj.id === todo.id ? {...obj, checked: !todo.checked} : obj)
    );



  }
  const onRemove = (todo) => {

    var notRemove = []
    for(let i = 0; i < todos.length; i++){
      if(todos[i].id !== todo.id){
        console.log(todos[i])
        notRemove.push(todos[i])
      } else {
        // Remove the task
        continue
      }
    }
    setTodos(notRemove)

  }



  // Retornos
  return (
    <section id="app" className='container'>
      <header>
        <h1 className='title'>Lista de Tarefas</h1>
      </header>
      <section className='main'>
        <AddTask onAddTask={onAddTask} />
        <List todos={todos} onToggle={onToggle} onRemove={onRemove} />
      </section>
      <Footer />
    </section>
  );
}

export default App;
