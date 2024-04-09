// import React from 'react'
import heroBg from '../assets/hero-bg.jpg'

const Hero = () => {
  return (
    <>
      <div id="hero" className="w-full h-screen mx-auto bg-cover" style={{backgroundImage: `linear-gradient(to right bottom, rgba(0,0,0,0.5), rgba(0,0,0,0)), url(${heroBg})`}}>
        <div id="hero-container" className="h-full max-w-[1240px] flex items-center lg:px-40 md:px-20 sm:px-10 px-6">
          <div id="hero-title" className='bg-white px-10 lg:px-20 py-3'>
            <h1 className="font-bold font-philosopher md:text-[90px] lg:text-[100px] text-[50px] text-indigo-950 leading-tight">Masjid <br /> Al-Abror</h1>
            <p className="font-manrope font-normal lg:text-lg  md:text-sm text-xs text-indigo-950">Pimpinan Ranting Muhammadiyah Cabang Lembor</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
