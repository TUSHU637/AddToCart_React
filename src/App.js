import './App.css';
import react, { useState } from 'react';
import Navbar from './Components/Navbar';
import Section from './Components/Section';
import Result from './Components/Result';

function App() {
  const [cart,setCart]=useState([]);
const [show,setShow]=useState(true);
  const handleCart=(item)=>{
    let isPresent=false;
    cart.forEach((product)=>{
      if(item.id==product.id) isPresent=true;
    })

    if(isPresent){alert("item is already present")}
    else setCart([...cart,item]);
        //console.log(cart.length);
  }
const handleChange=(item,d)=>{
  let ind=-1;
cart.forEach((val,index)=>{
  if(val.id==item.id)
  ind=index;
});
const tempArr=cart;
tempArr[ind].amount+=d;
console.log(tempArr);
if(tempArr[ind].amount==0){
  tempArr[ind].amount=1;
}
}
return (
   
    <>
   <Navbar size={cart.length} clicked={setShow}/>
   {show ?  <Section fun={handleCart}/> : <Result Cart={cart} setCart={setCart} handleChange={handleChange}/>}
  
   </>
  );

  }
export default App;
