import React from 'react'
import tel from "../assets/create/2023-10-28 14.33.34.jpg"

export default function Login() {
  return (
    <div>
      <div className="create">
        <div className="imggg">
          <img src={tel} alt="" />

        </div>
        <div className="login">
          <p id='p' >LogintoExclusive</p>
          <span>Enter your details below</span>
          <input placeholder='Email or Phone Number' type="text" />
          <input placeholder='Password' type="text" />

          <div className="buttons">
            <button>Log in</button>
            <button>Forget password</button>
          </div>
        </div>


      </div>
    </div>
  )
}


