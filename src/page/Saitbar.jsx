import React from 'react'
import { NavLink } from 'react-router-dom'
import iphonepng from '../assets/product/iphone 13 pro ultra max.png'

export default function Saitbar() {
  return (
    <div className='saitbar'>
      
<div className="s_left">
<NavLink>Womans Fashion</NavLink>
<NavLink>Mens Fashion</NavLink>
<NavLink>Electronics</NavLink>
<NavLink>Home & Lifestyle</NavLink>
<NavLink>Medicine</NavLink>
<NavLink>Sports & Outdoor</NavLink>
<NavLink>Babys & Toys</NavLink>
<NavLink>Groceries & Pets</NavLink>
<NavLink>Health & Beauty</NavLink> 


</div>
<div className="s_right">
<img src={iphonepng} alt="" />

</div>


    </div>
  )
}
