import React from 'react'
import { images } from '../../assets'
import './index.scss'
const Header = () => {
   return (
      <div className='header'>
         <img type="image" src={images.icon} className="icon" alt='' />
         <div className='header_content'>
            <p className='header_title'>Silver Tier</p>
            <span className='subtitle'>In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive rewards.</span>
         </div>
      </div>
   )
}

export default Header