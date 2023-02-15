import React from 'react'
import TaskItem from '../components/TaskItem'
import '../styles/todoList.css'

const TaskList = ({ id }) => {
  console.log(id)
  return (
    <div className="tasksList " >
      <TaskItem
        data={`   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nisi, optio ratione, pariatur illum necessitatibus tempore labore ducimus accusamus magni eum modi quae libero iure! Minus pariatur voluptatem minima accusantium.`}
      />
      <TaskItem
        data={`   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nisi, optio ratione, pariatur illum necessitatibus tempore labore ducimus accusamus magni eum modi quae libero iure! Minus pariatur voluptatem minima accusantium.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nisi, optio ratione, pariatur illum necessitatibus tempore labore ducimus accusamus magni eum modi quae libero iure! Minus pariatur voluptatem minima accusantium.`}
      />
      <TaskItem />
      <TaskItem
        data={`   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nisi, optio ratione, pariatur illum necessitatibus tempore labore ducimus accusamus magni eum modi quae libero iure! Minus pariatur voluptatem minima accusantium.`}
      />
      <TaskItem
        data={`   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nisi, optio ratione, pariatur illum necessitatibus tempore labore ducimus accusamus magni eum modi quae libero iure! Minus pariatur voluptatem minima accusantium.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nisi, optio ratione, pariatur illum necessitatibus tempore labore ducimus accusamus magni eum modi quae libero iure! Minus pariatur voluptatem minima accusantium.`}
      />
      <TaskItem />
    </div>
  )
}

export default TaskList
