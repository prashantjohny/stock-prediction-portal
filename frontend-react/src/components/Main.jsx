import React from 'react'
import Button from './Button'
import Footer from './Footer'
import Header from "./Header"

const Main = () => {
  return (
    <>
      
          <div className='container'>
              <div className='p-5 text-center bg-light-dark rounded'>
                  <h1 className='text-light'>Stock Vision</h1>
                  <p className='text-light lead'>This Stock Prediction application utilizes machine learning techniques, specifically employing Keras, and LSTM model, integrated with in the Django framework. It forecasts future stock prices by analyzing 100-days and 200-days moving averages, essential indicators widely used by stock analysts to inform trading and investment decisions.</p>
                  <Button text="Explore Now" class="btn-outline-info" url="/dashboard"/>

              </div>
          </div>
      
    </>
  )
}

export default Main