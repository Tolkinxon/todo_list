import React from 'react'
import TaskItem from '../components/TaskItem'
import '../styles/todoList.css'

const TaskList = ({ id }) => {
  console.log(id)
  return (
    <div className="tasksList ">
      <TaskItem
        data={`hello world ana al    Lorem ipsum dolor sit amet consectetur adipisicing elit. nderit dolore, magnam id ello worldtatum eos exnderit dolore, magnam id ello world ana al    Lorem ipsum dolor sit amet consectetur adipisicing elit. nderit dolore, magnam id voluptatum eos expedita aspernatur sit  is pedita aspernatur sit  is vell`}
      />
      <TaskItem
        data={`hello world ana al  world ana al    Lorem ipsum dolor sit amet consectetur adipisicing elit. vellvoluptatum eos exnderit dolore, magnam id ello world ana ll`}
      />
      <TaskItem
        data={`hello world ana al   tur sit  is vellptatum eos expedit aspernatur sit  is vell`}
      />
      <TaskItem
        type={'refuce'}
        data={`hello world ana al    Lorem ipsum dolor sit amet consectetur adipisicing elit. nderit dolore, magnam idtur sit  is vellptatum eos expedit aspernatur sit  is vell`}
      />
      <TaskItem data={`hello wa aspernatur sit  is vell`} />
      <TaskItem
        data={`helello world ana al    Lorem ipsum dolor sit amet consectetur adipisicing elit. nderit dolore, magnam id voluptatum eos expedita aspernatur sit  is velllo world ana al    Lorem ipsumna al    Lorem ipsum dolor sit amet consectetur adipisicing elit. nderit dolore, magnam id voluptatum eos expedita aspernatur sit  is velllo world ana al    Lorem ipsu dolor sit ame aspernatur sit  is vell`}
      />
      <TaskItem data={`hello wa aspernatur sit  is vell`} type={'refuce'} />
      <TaskItem
        data={`hello world ana al    Lorem ipsum dolor sit amet consectetur adipisicing elit. nderit dolore, magnam id voluello world ana al    Lorem ipsum dolor sit amet consectetur adipisicing elit. nderit dolore, magnam id voluptatull`}
      />
    </div>
  )
}

export default TaskList
