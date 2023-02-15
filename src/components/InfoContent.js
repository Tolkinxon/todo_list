import React from 'react'
import '../styles/todoList.css'
import image1 from '../images/Rectangle 159.png'
import image2 from '../images/Rectangle 160.png'
import image3 from '../images/Rectangle 161.png'
import image4 from '../images/Rectangle 162.png'
import image5 from '../images/Rectangle 164.png'

const InfoContent = () => {
  return (
    <div className="container">
      <div className="images-info">
        <img src={image1} alt="image1" />
        <img src={image2} alt="image2" />
        <img src={image3} alt="image3" />
        <img src={image4} alt="image4" />
        <img src={image5} alt="image5" />
      </div>
      <div className="content-info">
        <h2>This page created by Soliyev Tolkinxon</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          assumenda officiis deleniti quidem maiores? Itaque dicta harum, quas
          dolore eos recusandae qui neque nisi non repellat commodi voluptate
          ullam expedita!
        </p>
      </div>
    </div>
  )
}

export default InfoContent
