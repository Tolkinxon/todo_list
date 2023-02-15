import React from 'react'
import cloud from '../images/Vector (1).svg'
import checkbox from '../images/Vector (3).svg'
import bell from '../images/bell.svg'
import lupa from '../images/lupa.svg'
import girl from '../images/girl.png'
import '../styles/todoList.css'


const TopPage = () => {
  return (
        <div className="top">
            <img src={cloud} alt="cloud" className="cloud" />
            <img src={checkbox} alt="checkbox" className="checkbox" />
            <p>
            Todo<span>List</span>
            </p>
            <img src={lupa} alt="lupa" className="lupa" />
            <input
            type="text"
            placeholder="Search for any training you want"
            className="search"
            />
            <img src={bell} alt="bell" className="bell" />
            <div className="dot"></div>
            <div className="round">
            <img src={girl} alt="girl" className="roundImage" />
            </div>
        </div>
  )
}

export default TopPage