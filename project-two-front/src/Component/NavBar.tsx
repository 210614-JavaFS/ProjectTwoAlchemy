import React from 'react'


const NavBar:React.FC<unknown> = (props) => {

  return (
    <nav>
            <div className="navbar-dark bg-dark">
                <a href="https://scrabble.hasbro.com/en-us/rules" target="_blank" className="brand-logo">Scrabble Assistant</a>
            </div>
    </nav>
  );
}

export default NavBar;