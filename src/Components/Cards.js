import React from 'react'
import '../Style/cards.css';
function Cards(props) {
  return (
    <div className="cont">
    <div className='cards'>
      <div className='img'>
        <img src={props.item.img} />
      </div>
      <div className='details'>
      <p>{props.item.title}</p>
      <p>{props.item.author}</p>
      <p>price-{props.item.price}</p>
      <div className='btn'>
      <button onClick={()=>{props.fcart(props.item)}}>Add to cart</button>
      </div>
     

      </div>

    </div>
    </div>
  )
}

export default Cards