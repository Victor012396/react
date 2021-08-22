import {Navbar} from "react-bootstrap";
import React, {useState, useEffect} from 'react';
import { Link, Router } from 'react-router-dom';
import { Button } from '../navbar/button/button.js';
import './navbar.css';

function NavbarLogin(){
  const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    return(
      <nav className="navbar">
                <div className="navbar-container">

                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <div className="logo">
                            
                        </div>
                        <div className="image"> 
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoYtC1QV1eIVHnXMrDGHUhQEgPagOltGKUww&usqp=CAU"  width="10%"/>
                        </div>

                    </Link>
                    <h1>Patitas de la Calle</h1>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bats'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/LogIn' className='nav-links' onClick={closeMobileMenu}>
                                LogIn
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}

                </div>
            </nav>
      /*
        <Navbar bg="dark" variant="dark " md="6">
        <Navbar.Brand >
          <img
            alt="Logo"
        
            src="https://scontent.fgdl11-1.fna.fbcdn.net/v/t1.6435-9/60521963_2138780329569242_2946006987034329088_n.png?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHTM3MLHYoUwtccvjKYAhaPT933o9a-KvNP3fej1r4q85wng3paCFjU5AuLYPuO8ebosW7HBEgXRNusUVmPRo3A&_nc_ohc=sTvgatVOh3QAX8fFxK1&_nc_ht=scontent.fgdl11-1.fna&oh=16f1c44238d98d74a36fb571f79bcf74&oe=61324D5D"
            width="50"
            height="50"
            border-radius= "100%"
            className="d-inline-block align-top"
          />
            Patitas de la Calle
        </Navbar.Brand>
        </Navbar>*/
        /*
        <>
            <nav className="navbar">
                <div className="navbar-container">
                  <Router>
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <div className="logo">
                            
                        </div>
                        <div className="image"> 
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoYtC1QV1eIVHnXMrDGHUhQEgPagOltGKUww&usqp=CAU"  width="10%"/>
                        </div>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bats'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/conocenos' className='nav-links' onClick={closeMobileMenu}>
                                Conocenos
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/adopta' className='nav-links' onClick={closeMobileMenu}>
                                Adopta
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/historias' className='nav-links' onClick={closeMobileMenu}>
                                Historias
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </Router>
                </div>
            </nav>
        </>
        */
    );
}
export default NavbarLogin;