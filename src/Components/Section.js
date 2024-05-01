import React from 'react'
import data from './Data.js';
import '../Style/section.css';
import Cards from './Cards.js';
function Section({fun}) {
   // console.log(data);
  return (
    <section>
    {data.map((val)=>{
        return <Cards  item={val} key={val.id} fcart={fun}/>
    })}
      
    </section>
  )
}

export default Section