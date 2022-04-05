import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const [isOpen, setIsopen] = useState(false);

    return (
        <header className='md:h-14 py-3 px-3 bg-black '>

            <nav className='md:flex md:justify-between md:items-center h-ful'>
                <div className='md:static md:w-auto w-full flex justify-between items-center font-bold text-white text-xl'>
                    <Link to='/'>LAPTOP SHOP</Link>

                    <p onClick={() => setIsopen(!isOpen)} className='md:hidden'>
                        {
                            isOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBarsStaggered} />
                        }
                    </p>
                </div>
                <div className={`md:flex transition duration-600 ease-out ${!isOpen ? 'hidden' : 'visible'}`}>
                    <Link className='md:inline-block block text-white font-medium md:my-0 my-3 md:mx-4 hover:text-orange-600' to='/'>Home</Link>

                    <Link className='md:inline-block block text-white font-medium md:my-0 my-3 md:mx-4 hover:text-orange-600' to='/review'>Review</Link>

                    <Link className='md:inline-block block text-white font-medium md:my-0 my-3 md:mx-4 hover:text-orange-600' to='/dashboard'>Dashboard</Link>

                    <Link className='md:inline-block block text-white font-medium md:my-0 my-3 md:mx-4 hover:text-orange-600' to='/blogs'>Blogs</Link>

                    <Link className='md:inline-block block text-white font-medium md:my-0 my-3 md:mx-4 hover:text-orange-600' to='/about'>About</Link>

                </div>
            </nav>

        </header>
    );
};

export default Header;