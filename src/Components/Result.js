import React, { useEffect, useState } from 'react'
import '../Style/result.css';
function Result({Cart,setCart,handleChange}) {
    console.log(Cart)
    const[price,setPrice]=useState(0);
    useEffect(()=>{
        handlePrice();
    },[Cart])
    const handlePrice=()=>{
        let ans=0;
        Cart.forEach((val)=>{
              ans+=val.amount*val.price;
        })
        setPrice(ans);
    }
    const handleRemove=(id)=>{
        const arr=Cart.filter((item)=>
            item.id!==id);
            setCart(arr);
        
    }
  return (
   <article>
    {
        Cart.map((val)=>(
           
            <div className='box'>
                <div className='img1'>
                    <img src={val.img} />
                    <p>{val.title}</p>
                </div>
                <div>
                    <button onClick={()=>handleChange(val,+1)}>+</button>
                    <h1>{val.amount}</h1>
                    <button onClick={()=>handleChange(val,-1)}>-</button>
                </div>
                <div >
                    <span className="price">{val.price}Rs</span>
                    <button onClick={()=>handleRemove(val.id)}>Remove</button>
                </div>
                
            </div>
        
        ))
    }
    <div className='total'>
    <span>Total price of your Cart</span>
    <span> {price} Rs</span>
    </div>

   </article>

  )
}

export default Result