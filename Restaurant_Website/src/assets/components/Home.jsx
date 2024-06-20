import React from 'react'
import Home_Logo from '../images/logo.png'

const Home = () => {
  return (
    <div>
      <div className="background-img">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <img src={Home_Logo} alt="Logo" className="mb-4" />
          <div className="text-6xl font-bold mb-6">Delicious Food</div>
          <div className="text-lg">Tomato is a delicious restaurant website template</div>
        </div>
      </div>
    </div>
  )
}

export default Home
