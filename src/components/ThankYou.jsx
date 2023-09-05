import React from 'react';
import Card from './Card';
import ThankYouImg from '../assets/illustration-thank-you.svg';
import './ThankYou.css';


const ThankYou = ({ rating }) => {
  return (
    <Card>
      <div className="thank_you_img_container">
        <img src={ThankYouImg} alt="" />
      </div>

      <div className="selected">
        <p>You selected {rating} out of 5</p>
      </div>

      <h2 className="thank_you_title">Thank you!</h2>
      <p className="thank_you_text">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </Card>
  );
}

export default ThankYou;