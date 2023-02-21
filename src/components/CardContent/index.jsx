import React from 'react'
import './cardContent.css';
import Button from '../Button';
import EmailIcon from '../../assets/email-icon.svg';
import LinkedInIcon from '../../assets/linkedIn-icon.svg';
import Footer from '../Footer';
const content = [
  {title:'About', desc:'I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.'},
  {title:'Interests', desc:'Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.'}]

const CardContent = () => {
  return (
    <div className='content-wrapper'>
    <div className='name'>Laura Smith</div>
    <span className='subTitle'>Frontend Developer</span>
    <p className='email'>laurasmith.website</p>
    <div className='btn-container'>
        <Button name="Email" image={<img src={EmailIcon}  alt="email icon"/>}/>
        <Button name="LinkedIn" bg="#5093E2" color="#fff" image={<img src={LinkedInIcon}  alt="linkedIn icon"/>}/>
    </div>
    <div className='card-text'>
      {content.map((ele)=> 
      (
        <>
        <h3 className='card-title'>{ele.title}</h3>
        <p className='card-desc'>{ele.desc}</p>
        </>
      ))}
    </div>
    {/* <div className='card-text'>
        <h3 className='card-title'></h3>
        <p className='card-desc'></p>
    </div> */}
    <Footer />
    </div>
  )
}

export default CardContent