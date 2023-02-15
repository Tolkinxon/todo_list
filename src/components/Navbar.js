import React from 'react'
import '../styles/NewTodoSection.css'
import A from '..//images/navbarIcons/A.svg'
import B from '..//images/navbarIcons/B.svg'
import plus from '..//images/navbarIcons/+.svg'
import centralTyping from '..//images/navbarIcons/centralTyping.svg'
import emoji from '..//images/navbarIcons/emoji.svg'
import gallery from '..//images/navbarIcons/gallery.svg'
import havola from '..//images/navbarIcons/havola.svg'
import i from '..//images/navbarIcons/i.svg'
import leftArrow from '..//images/navbarIcons/leftArrow.svg'
import rightArrow from '..//images/navbarIcons/rightArrow.svg'
import leftTyping from '..//images/navbarIcons/leftTyping.svg'
import overTyping from '..//images/navbarIcons/overTyping.svg'
import pi from '..//images/navbarIcons/pi.svg'
import threeDot from '..//images/navbarIcons/threeDot.svg'
import U from '..//images/navbarIcons/U.svg'

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img src={B} alt="B" />
        <img src={i} alt="i" />
        <img src={U} alt="U" />
        <img src={A} alt="A" />
      </div>
      <div>
        <img src={leftTyping} alt="leftTyping" />
        <img src={centralTyping} alt="centralTyping" />
        <img src={overTyping} alt="overTyping" />
        <img src={pi} alt="pi" />
      </div>
     <div>
      <img src={havola} alt="havola" />
        <img src={gallery} alt="gallery" />
        <img src={emoji} alt="emoji" />
        <img src={plus} alt="plus" />
     </div>
      <div>
        <img src={leftArrow} alt="plus" />
        <img src={rightArrow} alt="plus" />
        <img src={threeDot} alt="plus" />
      </div>
    </div>
  )
}

export default Navbar
