import React from 'react'

const Navbar = () => {
    
    return (
        <header className='w-full fixed z-10 bg-black
    opacity-90'>
            <nav className='flex w-full py-3 md:py-4 px-4
         md:px-20 items-centre justify-between'>
                 <a href='/' className='flex items-centre
            justify-centre text-white text-lg
            cursor-pointer'></a>
                <ul className='hidden md:flex text-white gap-6'>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/recipes'>Explore</a>
                    </li>
                    <li>
                        <a href='/favourites'>Favourites</a>
                    </li>
                </ul>

               {/*} <button
                    title='Sign in'
                    containerStyle='hidden
                md:block bg-transparent
                border border-white
                text-white hover:bg-white
                hover:text-slate-700
                rounded-full min-w-[130px]'
    />*/}

             

            </nav>
            <div>
                  
            </div>
        </header>
    )
}

export default Navbar