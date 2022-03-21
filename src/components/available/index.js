import React from 'react'
import { images } from '../../assets'
import './index.scss'
const Available = () => {
   return (
      <div className='available'>
         <p className='avail_title'>Available Coin balance</p>
         <p className='avail_coin'>340</p>
         <div className='proccessbar'>
            <div className="proccessbar_child"  ></div>
         </div>
         <div className='content'>You have paid rental fee for $1,200. Pay more $800 to achieve Gold Tier.</div>
         <div className='view'>
            <p className='view_tier'>View tier benefits</p>
            <img src={images.chevron} type="image" alt="photo" className="view_icon" />
         </div>
         <div className='view_button'>
            <button className='button'>My Coupons</button>
         </div>
         <div className="update">Updated : 02/11/2021</div>
      </div>
   )
}

export default Available