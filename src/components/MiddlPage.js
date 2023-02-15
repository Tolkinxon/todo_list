import React from 'react'

const MiddlPage = () => {
  return (
    <>
      <div className="adding-tasks">
        <h1>
        You've got <span>7 task </span> today
        </h1>
        <div className="adding-field">
        <select name="task" id="1" className="select">
            <option value="">Your task today</option>
            <option value="">---</option>
        </select>
        <button className="add-btn">+ Add new</button>
        </div>
    </div>
    <h1 className='alone'>Your task today</h1>
  </>
  )
}

export default MiddlPage