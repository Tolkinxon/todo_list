import React from 'react'
import '../styles/todoList.css'

const TaskItem = ({ data }) => {
  return (
    <div className="task-item">
      <div className="img-content">
        <div className="round-content">{/* <img src="" alt="" /> */}</div>
        <div className="content">
          <span>Alena Kurts</span>
          <span>-06.06.2022</span>
          <p>{data}</p>
        </div>
      </div>
      <div className="data-button">
        <h4>Explanation: 608450</h4>
        <button>succes</button>
      </div>
    </div>
  )
}

export default TaskItem
