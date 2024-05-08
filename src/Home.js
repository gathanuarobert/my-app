import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Recipes from './Recipes'

const Home = () => {
  return (
    <main className='w-full flex flex-col'>
        <Navbar />
        
        <Header
        title={
            <p>
                Excite your Taste Buds with
                <br/> Foodies' Place
            </p>
        } 
        type='home'
        />
        <section id='recipe' className='md:max-w-[1440px] mx-auto px-4 md:px-20'>
            <Recipes/>
        </section>
        
    </main>
  )
}

export default Home