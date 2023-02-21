import React from 'react'
import './button.css';

const Button = ({name,image,bg,color}) => {
  return (
    <button className='btn-style' 
    style={{backgroundColor:bg,color:color,display:'flex',alignItems:'center',gap:'5px',justifyContent:'center'}}>
      {image} <span className='btn-text'>{name}</span></button>
  )
}

export default Button