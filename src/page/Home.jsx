import React from 'react'

import c_img1  from "../assets/catigory/Category-CellPhone.png"

//product
import game from "../assets/product/g92-2-500x500 1.png"
import klavyatura from '../assets/product/klavyatura.png'
import televizor from '../assets/product/televezor.png'
import chair from '../assets/product/chair.png'

// cotegoriya
import c_computer from '../assets/catigory/computer.png'
import c_smartwATCH from '../assets/catigory/Category-CellPhone.png'
import c_kamera from '../assets/catigory/camera.png'
import c_HeadPhones from '../assets/catigory/Category-CellPhone.png'
import c_Gaming from '../assets/catigory/game.png'
// product_1
import kiyimm from '../assets/product1/kiyimm.png'
import sumka from '../assets/product1/sumka.png'
import kalonka from '../assets/product1/kalonka.png'
import javon from '../assets/product1/javon.png'
import blutes from '../assets/product1/Frame 600.png'
// product2
import ovqat from '../assets/product2/ovqat.png'
import camera from '../assets/product2/camera.png'
import krem from '../assets/product2/curology-j7pKVQrTUsM-unsplash 1.png'
import laptop from '../assets/product2/laptop.png'
import mashina from '../assets/product2/mashina.png'
import paystashen from '../assets/product2/playstashen.png'
import vitrofka from '../assets/product2/vitrofka.png'
import butsa from '../assets/product2/butsa.png'
import img11 from '../assets/product2/img1.1.png'
import img12 from '../assets/product2/img1.2.png'
import img13 from '../assets/product2/img1.3.png'
import img14 from '../assets/product2/img1.4.png'
import img15 from '../assets/product2/Services.png'
import img16 from '../assets/product2/Services (1).png'
import img17 from '../assets/product2/Services (2).png'
import Saitbar from './Saitbar'



export default function Home() {

  

  const data = [
    {
      id: 1, img: game, discount: '-40%', title: "HAVIT HV-G92 Gamepad", price: 120
    },

    {
      id: 2, img: klavyatura, discount: '-35%', title: "AK-900 Wired Keyboard", price: 140
    },
    {
      id: 3, img: televizor, discount: '-25%', title: "IPS LCD Gaming Monitor", price: 120
    },
    {
      id: 4, img: chair, discount: '-50%', title: "S-Series Comfort Chair ", price: 120
    },
  ]


  const cotigory = [
    { id: 1, img: c_img1, name: "phones" },
    { id: 1, img: c_computer, name: "Computers" },
    { id: 1, img: c_smartwATCH, name: "SmartWatch" },
    { id: 1, img: c_kamera, name: "Camera" },
    { id: 1, img: c_HeadPhones, name: "HeadPhones" },
    { id: 1, img: c_Gaming, name: "Gaming" },
  ]

  const product_1 = [
    { id: 1, img: kiyimm, ism: "The north coat", narxi: 260, },
    { id: 2, img: sumka, ism: "Gucci duffle bag", narxi: 960, },
    { id: 3, img: kalonka, ism: "RGB liquid CPU Cooler", narxi: 160, },
    { id: 4, img: javon, ism: " Small BookSelf", narxi: 360, },

  ];
  const product_2 = [
    { id: 1, img: ovqat, ism: "The north coat", narxi: 260, },
    { id: 2, img: camera, ism: "CANON EOS DSLR Camera", narxi: 960, },
    { id: 3, img: laptop, ism: "ASUS FHD Gaming Laptop", narxi: 160, },
    { id: 4, img: krem, ism: " Curology Product Set ", narxi: 360, },
    { id: 1, img: mashina, ism: "Kids Electric Car", narxi: 260, },
    { id: 2, img: butsa, ism: "Jr. Zoom Soccer Cleats", narxi: 960, },
    { id: 3, img: paystashen, ism: "GP11 Shooter USB Gamepad", narxi: 160, },
    { id: 4, img: vitrofka, ism: " Quilted Satin Jacket", narxi: 360, },

  ]





















  return (
    <div className='home'>



      <Saitbar/>
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
            cotigory.map((item) => (
              <div className="catigor">
                <img src={item.img} alt="" />
                <p>{item.name}</p>
              </div>
            ))
          }

        </div>
      </div>

      <div className="seling_products">
        <div className="seling_top">
          <div className="s_top">
            <h1>This Month</h1>
          </div>
          <div className="s_bottom">
            <p>Best Selling Products</p>
            <button>viev all</button>
          </div>


        </div>
        <div className="seling_bottom">

          {
            product_1.map((item) => (
              <div className="sel_product">
                <div className="imgg">
                  <img src={item.img} alt="" />
                  <button id='add'>add cart</button>
                </div>
                <p>{item.ism}</p>
                <span>{item.narxi}</span>
                <b>⭐⭐⭐⭐⭐(65)</b>
              </div>
            ))
          }






        </div>





      </div>

      <div className="section_img">
        <img src={blutes} alt="" />
      </div>


      <div className="our_products">
        <div className="sel_top">
          <div className="o_top">
            <h1>  Our Products</h1>
          </div>
          <div className="o_bottom">
            <p>Best Selling Products</p>
          </div>
        </div>

        <div className="boxes">
          {
            product_2.map((item) => (
              <div className="box">
                <div className="img2">
                  <img src={item.img} alt="" />
                  <button id='addtocart'>add cart</button>
                </div>
                <p>{item.ism}</p>
                <span>{item.narxi}$<b>⭐⭐⭐⭐⭐(80)</b></span>
              </div>
            ))
          }



        </div>








      </div>
      <div className="newarrival">
        <div className="news_top">
          <div className="new"><p>Featured</p></div>
          <h1>New Arrival</h1>
        </div>
        <div className="cartss">
          <div className="carts_left">
            <img src={img11} alt="" />
          </div>
          <div className="carts_right">
            <img src={img12} alt="" />
            <div className="carts_img">
              <img src={img13} alt="" />
              <img src={img14} alt="" />
            </div>
          </div>
        </div>




      </div>
      <div className="zastavka">
        <div className="cardd">
          <img src={img15} alt="" />
          <h1>FREE AND FAST DELIVERY</h1>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div className="cardd">
          <img src={img16} alt="" />
          <h1>24/7 CUSTOMER SERVICE</h1>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="cardd">
          <img src={img17} alt="" />
          <h1>MONEY BACK GUARANTEE</h1>
          <p>We reurn money within 30 days</p>
        </div>



      </div>






















    </div>
  )
}
