import React from 'react'
import game from "../assets/product/g92-2-500x500 1.png"
import c_img1  from "../assets/catigory/Category-CellPhone.png"
export default function Home() {


  const data = [
    {
      id: 1, img: game, discount: '-40%', title: "HAVIT HV-G92 Gamepad", price: 120
    },

    {
      id: 1, img: game, discount: '-40%', title: "HAVIT HV-G92 Gamepad", price: 120
    },
    {
      id: 1, img: game, discount: '-40%', title: "HAVIT HV-G92 Gamepad", price: 120
    },
    {
      id: 1, img: game, discount: '-40%', title: "HAVIT HV-G92 Gamepad", price: 120
    },
  ]


  const cotigory = [
    {id:1, img: c_img1, name:"Phones"},
    {id:1, img: c_img1, name:"Phones"},
    {id:1, img: c_img1, name:"Phones"},
    {id:1, img: c_img1, name:"Phones"},
    {id:1, img: c_img1, name:"Phones"},
    {id:1, img: c_img1, name:"Phones"},
  ]
  return (
    <div className='home'>
     <div className="fullproduct">
        {
          data.map((item) => (
            <div className="product">
              <div className="like">
                {/* <button id='btnlike'>  <svg width="34" height="76" viewBox="0 0 34 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17" cy="17" r="17" fill="white" />
                  <path d="M13 10C10.7912 10 9 11.7396 9 13.8859C9 15.6185 9.7 19.7305 16.5904 23.8873C16.7138 23.961 16.8555 24 17 24C17.1445 24 17.2862 23.961 17.4096 23.8873C24.3 19.7305 25 15.6185 25 13.8859C25 11.7396 23.2088 10 21 10C18.7912 10 17 12.3551 17 12.3551C17 12.3551 15.2088 10 13 10Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <circle cx="17" cy="59" r="17" fill="white" />
                  <path d="M26.257 57.962C26.731 58.582 26.731 59.419 26.257 60.038C24.764 61.987 21.182 66 17 66C12.818 66 9.23601 61.987 7.74301 60.038C7.51239 59.7411 7.38721 59.3759 7.38721 59C7.38721 58.6241 7.51239 58.2589 7.74301 57.962C9.23601 56.013 12.818 52 17 52C21.182 52 24.764 56.013 26.257 57.962V57.962Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M17 62C18.6569 62 20 60.6569 20 59C20 57.3431 18.6569 56 17 56C15.3431 56 14 57.3431 14 59C14 60.6569 15.3431 62 17 62Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg></button> */}
              </div>
              <div className="img">
                <button id='btnpostion'>{item.discount}</button>
                <img src={item.img} alt="" />
                <button id='addcart' >Add cart</button>
              </div>
              <div className="text">
                <p>{item.title}</p>
                <b>${item.price}</b>
                <span>(88)</span>
              </div>
            </div>
          ))
        }

     </div>

     <div className="category">
      <div className="c_top">
          <div className="boxdiv">Categories</div>
          <p>Browse By Category</p>
      </div>
      <div className="c_bottom">

        {
          cotigory.map((item)=>(
            <div className="catigor">
              <img src={item.img} alt="" />
              <p>{item.name}</p>
            </div>
          ))
        }

      </div>
     </div>
    </div>
  )
}
