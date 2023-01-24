import React from 'react'
import './Input.css'

export default function Input({text,result}) {
  return (
    <div className='inputWrapper'>
        <div className='result'>
            <h1>{result}</h1>
        </div>
        <div className='text'>
            <h3>{text}</h3>
            </div>
    </div>
  )
}
