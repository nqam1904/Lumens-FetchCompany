import React from 'react'
import { images } from '../../assets'
import './index.scss'
const item = [
   {
      id: 0,
      image: images.ic_home
   },
   {
      id: 1,
      image: images.ic_noti
   },
   {
      id: 2,
      image: images.ic_card
   },
   {
      id: 3,
      image: images.ic_user
   }
]
const Naviagation = () => {
   return (
      <div className='navigation'>
         {item.map(item => (
            <div className='navigation_item' key={item.id}>
               <img type="image" alt='' src={item.image} className="navigation_img" />
            </div>
         ))}
      </div>
   )
}

export default Naviagation