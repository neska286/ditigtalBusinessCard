import React from 'react'
import './mainContainer.css';
import CardImg from '../../assets/card-img.svg';
import CardContent from '../CardContent';

const MainContainer = () => {
  return (
    <div className='wrapper'>
        <img
              src={CardImg}
              alt="cardImage"
            />
            <CardContent/>
           
    
    </div>
  )
}

export default MainContainer