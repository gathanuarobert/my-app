import React from "react"

function Navbar() {
    return <div className="bg-[#DAF1F8]">
        <nav className=''>
            <div className=" container flex justify-between py-4 sm:py-3">
            <div className="font-bold text-3xl"> 
                <h1>Foodies' Place</h1>
            </div> 
            <div>    
                <ul className='flex gap-5 inline-block hover:text-primary text-xl font-semibold'>
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contactus">Contact Us</a>
                    </li>
                </ul>
            </div>
            </div>
            

        </nav>
    </div>
}

export default Navbar