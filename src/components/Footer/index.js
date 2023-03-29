import React from 'react'
import logo from './logo.png'
import './style.css'

function Footer() {
  return (
    <footer>
      <img src={logo} alt='logo'/>
      <div className='text'>
          <h2>&copy; CARLOS DANIEL RODRIGUES</h2>
          <h3>Todos os Direitos Reservados</h3>
      </div>
    </footer>
  )
}

export default Footer
