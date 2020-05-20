import React from 'react'

const NavBar = () => {
    return (
        <nav className='nav'>
            <a href="#projects" className="btn">
                    <span className="text">
                        Projects
                    </span>
            </a>
            
            <a href="#contact" className="btn">
                    <span className="text text--sm">
                        Contact
                    </span>
            </a>
        </nav>
    )
}
export {NavBar as default}