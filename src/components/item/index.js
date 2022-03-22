import React from 'react'
import './index.scss'
const Item = (props) => {
   return (
      <div className='item'>
         <img type="image" className='item_img' src={props?.image} alt="" />
         <div className='item_body'>
            <p className='item_coins'>{props?.coins} coins</p>
            <span className='item_description'>{props?.description}</span>
         </div>
      </div>
   )
}

export default Item
