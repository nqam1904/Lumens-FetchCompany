import React from 'react'
import { images } from '../../assets'
import './index.css'
const Header = () => {
   return (
      <div className='header'>
         <img src={images.icon} className="icon" alt='image' />
         <div className='content'>
            <p className='title'>Silver Tier</p>
            <span className='subtitle'>In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive rewards.</span>
         </div>
      </div>
   )
}

export default Header