import React from 'react'
import TopPage from '../components/TopPage'
import MiddlPage from '../components/MiddlPage'
import NewTodoSection from '../components/NewTodoSection'

const NewTodo = () => {
  return (
    <>
      <TopPage />
      <MiddlPage data={false} />
      <NewTodoSection/>
    </>
  )
}

export default NewTodo
