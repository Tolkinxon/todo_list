import React from 'react'
import '../styles/todoList.css'
import image from '../images/Rectangle 159.png'
import { StyledButton } from './Button'
import Button from './Button'
import checking from '../images/check.svg'

const TaskItem = ({ data }) => {
  return (
    <div className="task-item">
      <div className="img-content">
        <div className="round-content">
          <div className="image-back"></div>
        </div>
        <div className="content">
          <span> Alena Kurts </span>
          <span> - 02.07.2022 14:00PM</span>
          <p>{data}</p>
        </div>
      </div>
      <div className="data-button">
        <span>
          Explanation: <span className="numbers"> 02.07.2022 14:00PM</span>
        </span>

        <Button type={'refuce'} />
      </div>
    </div>
  )
}

export default TaskItem
