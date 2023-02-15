import React from 'react'
import '../styles/NewTodoSection.css'
import { StyledButton } from '../components/Button'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {children}

      
    </div>
  )
}

export default Layout
