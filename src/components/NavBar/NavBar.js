import React from 'react'

const NavBar = () => {
    return (
        <nav className='nav'>
            <a href="#projects" className="nav__link">
                    <span className="text text--small text--link">
                        Projects
                    </span>
            </a>
            
            <a href="#contact" className="nav__link">
                    <span className="text text--small text--link">
                        Contact
                    </span>
            </a>
        </nav>
    )
}
export {NavBar as default}