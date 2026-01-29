// import React from 'react'

const Header = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex justify-between max-md:justify-center items-center backdrop-blur-sm bg-black/10 transition-all duration-300">
            <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-light">
                <a href="#properties" className="hover:text-gray-300 transition-colors relative group">
                    Properties
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#philosophy" className="hover:text-gray-300 transition-colors relative group">
                    Philosophy
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>

            </div>
            <div className="tracking-widest w-32 max-md:w-20">
                <img src="/assets/logo-white.webp" alt="SOBHA Logo" />
            </div>
            <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-light">

                <a href="#amenities" className="hover:text-gray-300 transition-colors relative group">
                    Amenities
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#contact" className="hover:text-gray-300 transition-colors relative group">
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
            </div>
            {/* <MagneticButton className="border border-white px-6 py-2 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300">
                Inquire
            </MagneticButton> */}
        </nav>
    )
}

export default Header