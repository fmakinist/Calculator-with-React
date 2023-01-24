import React from 'react'
import './ButtonElement.css'

export default function ButtonElement({symbol,color,handleClick}) {
  return (
    <div className='buttonElement' style={{backgroundColor:color}}
    onClick={()=> handleClick(symbol)}
    >{symbol}</div>
  )
}
