import React from 'react'
import gamelop from '../assets/checkout/Gamepad-Cart-Small.png'
import allambalo from '../assets/checkout/g27cq4-500x500 1 (1).png'
import visas from '../assets/checkout/Frame 834.png'

export default function CheckOut() {
    return (
        <div>
            <div className="checkout">

                <div className="details">
                    <p>Billing Details</p>
                    <input placeholder='First Name*' type="text" />
                    <input placeholder='Company Name' type="text" />
                    <input placeholder='Street Address*' type="text" />
                    <input placeholder='Apartment, floor, etc. (optional)' type="text" />
                    <input placeholder='Town/City*' type="text" />
                    <input placeholder='Phone Number*' type="text" />
                    <input placeholder='Email Address*' type="text" />
                    <div className="boks">
                        <input id='checkbox' type="checkbox" />

                        <p>Save this information for faster check-out next time</p>
                    </div>



                </div>
                <div className="pay">
                    <div className="prdct">
                        <img src={gamelop} alt="" />
                        <p>LCD Monitor</p>
                        <span>$650</span>
                    </div>
                    <div className="prdct">
                        <img src={allambalo} alt="" />
                        <p>H1 Gamepad</p>
                        <span>$1100</span>
                    </div>



                    <div className="check">
                        <p>Subtotal:</p>
                        <span>$1750</span>
                    </div>
                    <div className="check">
                        <p>Subtotal:</p>
                        <span>$1750</span>
                    </div>
                    <div className="check">
                        <p>Subtotal:</p>
                        <span>$1750</span>
                    </div>

                    <div className="bank">
                        <input  type="radio" />
                        <p>Bank</p>
                        <img src={visas} alt="" />
                    
                    </div>
                    <div className="cash">
                            <input type="radio" />
                            <p>Cash on Delivery</p>

                        </div>

                    <div className="cash_button">
                        <button id='coupon'>Coupon Code</button>
                        <button>Apply Coupon</button>
                    </div>
                    <button>Place Order</button>




                </div>
            </div>
        </div>
    )
}
