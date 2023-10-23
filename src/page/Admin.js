import axios from 'axios'
import React, { useState } from 'react'

export default function Admin() {

    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [discount, setDiscount] = useState('')
    const [price, setPrice] = useState('')

    const hadlesubbmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:4000/api/epson/add', {
            image,
            title,
            discount,
            price
        })


    }


    return (
        <div className='adminpanl'>
            <form action="" onSubmit={hadlesubbmit}>
                <h1>add product</h1>
                <input type="text" onChange={(e) => setImage(e.target.value)} placeholder='image' />
                <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder='title' />
                <input type="text" onChange={(e) => setDiscount(e.target.value)} placeholder='discount' />
                <input type="text" onChange={(e) => setPrice(e.target.value)} placeholder='price' />
                <button type='submit'>add</button>
            </form>
        </div>
    )``
}

