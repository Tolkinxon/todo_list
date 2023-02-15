import React from 'react'
import TopPage from '../components/TopPage'
import MiddlPage from '../components/MiddlPage'
import TaskList from '../components/TaskList'

const TodoList = ({ img }) => {
  return (
    <div >
      <TopPage />
      <MiddlPage />
      <TaskList />
    </div>
  )
}

export default TodoList
