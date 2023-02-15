import React from 'react'
import '../styles/NewTodoSection.css'
import bottomSvg from '../images/send/Vector (4).svg'
import middleSvg from '../images/send/Vector (5).svg'
import topSvg from '../images/send/Vector (6).svg'

const NewTodoSection = () => {
  return (
    <div className="new-todo-section">
      <div className="post-image">
        <div className="inner-post-image">
          <img src={topSvg} alt="topSvg" />
          <img src={middleSvg} alt="middleSvg" />
          <img src={bottomSvg} alt="bottomSvg" />
          <p>Drag image</p>
          <p>
            or browse to <span>select file</span>
          </p>
        </div>
      </div>


      <div className="post-text">
        <div className="navbar">
          <div className="wrapper">
            <h4>This is very usefull</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque pariatur modi totam et delectus. Aut quo reprehenderit, itaque, rem iste soluta quos numquam neque sunt nam vitae voluptas maxime illum.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default NewTodoSection
