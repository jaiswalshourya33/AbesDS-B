import React from 'react'
import './Book.css'
function Book(props) {
  return (
    <div id="book">
      <img src="https://i.pinimg.com/736x/ff/1e/4d/ff1e4d2a0fc1e39f4ef5303e9108b269.jpg" alt="" height={100} width={100}/>
      <h1>Title{props.title}</h1>
      <h1>Price:{props.price}</h1>
    </div>
  )
}

export default Book
