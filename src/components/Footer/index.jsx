import React from 'react'
import Twitter from '../../assets/twitter-icon.svg';
import Facebook from '../../assets/facebook-icon.svg';
import Instagram from '../../assets/Instagram-icon.svg';
import GitHub from '../../assets/gitHub-icon.svg';

const Footer = () => {
  return (
    <div style={{
    width:'317px',height:'64px',background: '#161619',
    borderRadius: '0px 0px 10px 10px'}}>
        <div style={{display:'flex', 
    justifyContent:'space-around',paddingTop:'20px'}}>
         <img
              src={Twitter}
              alt="TwitterImage"
            />
            <img
              src={Facebook}
              alt="FacebookImage"
            />
             <img
              src={Instagram}
              alt="InstagramImage"
            />
            <img
              src={GitHub}
              alt="GitHubImage"
            />
            </div>
    </div>
  )
}

export default Footer