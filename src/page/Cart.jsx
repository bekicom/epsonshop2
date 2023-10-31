import React from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  return (
    <div className="Cart">
      <div className="top_t">
        <div className="btn_t">
          <button onClick={() => navigate("/")}>Home</button>
          <span>/</span>
          <button>Cart</button>
        </div>
      </div>
      <div className="bottom_t">
        <div className="one_t">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>
        <div className="two_t">
          <div className="product_1">
            <div className="name_t">
              <img src="" alt="" />
              <p>LCD Monitor</p>
            </div>
            <p>$650</p>
          </div>
          <div className="product_2"></div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
