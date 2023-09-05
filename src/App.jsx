import React, { useState } from 'react';
import Rating from './components/Rating';
import ThankYou from './components/ThankYou';
import './App.css'

//PROBLEM!!! SUBMIT BUTTON is not redirecting to "ThankYou.jsx"
//I believe the problem is located on the parameters set inside 
//"Rating.jsx" component

function App() {
  const [showThankYouPage, setShowThankYouPage] = useState(false);
  const [rating, setRating] = useState(null);
  return (
    <>
      {showThankYouPage ? ( 
        <ThankYou rating={rating} /> 
      ) : ( 
        <Rating 
        rating={rating} 
        setRating={setRating} 
        setShowThankYouPage={setShowThankYouPage} />)}
    </>
  );
}

export default App
