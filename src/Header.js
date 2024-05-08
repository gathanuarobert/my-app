import React from 'react'
import { Banner1,Banner2, Banner3, Banner4, Banner5 } from './images'

const images = [Banner1, Banner2, Banner3, Banner4, Banner5]

const Header = ({title, image, type}) => {
  return (
    <div className='w-full h-[100vh]'>
        <div className='relative w-full '>
            <img src={images[Math.floor(Math.random() * images.length)]}
             alt='Recipes' 
             className='w-full h-[400px] object-cover'/>
        </div> 
        <div className='absolute w-full h-full
        bg-gradient-to-t from-black to-transparent
        top-0 z-8 flex flex-col items-centre
        justify-centre pt-40 2xl:pt-20 px-4'>
            <h1 className='text-white text-4xl md:text-5xl
             font-bold text-centre'>{title}</h1>
            {
                type && (
                    <p className='text-sm mt-5 text-centre
                    text-purple-500 bg-[#00000090] px-6 py-4
                    rounded-full justify-centre'>We welcome you to Foodies' Place
                         your ticket to tastiness!
                        <br className='hidden md:block'/>
                        Enjoy your culinary adventures.
                    </p>
                )
            }
        </div>
    </div>
  )
}

export default Header