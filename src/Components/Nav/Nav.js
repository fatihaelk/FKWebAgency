import React, { useState, useEffect} from 'react';
import { Link } from 'react-scroll';
import { Modal } from 'react-responsive-modal';
import './Nav.scss';
import Mentions from '../MentionLegales/Mentions'

const Nav = ({toggle, displayMenu, open,  setOpen}) => {

    
    const [changeTheme, setChangeTheme] = useState(false);
    
    useEffect(() => {
        let body = document.body;
        changeTheme ? body.classList.add('dark-theme') : body.classList.remove('dark-theme') 
    }, [changeTheme])

    const change = () => setChangeTheme(!changeTheme);

    const onModal = () => setOpen(!open);

    

  return (
    <>
      <header className={toggle ? "show" : undefined} >
        <h2 className="header__title">
          FK Web Agency
          <span onClick={change} className="change-theme">
            <i className= {changeTheme ? 'bx bxs-toggle-right' : "bx bx-toggle-left" } ></i>
          </span>
        </h2>
        <nav className="nav">
          <ul className="nav__list">
            <li  className="nav__item">
              <i className="bx bx-home-smile"></i> <Link onClick={displayMenu}  to='home'> Accueil</Link> 
            </li>
            <li  className="nav__item">
              <i className="bx bx-user-check"></i> <Link onClick={displayMenu}  to='about'> A propos</Link>
            </li>
            <li  className="nav__item">
              <i className="bx bx-briefcase"></i> <Link onClick={displayMenu}  to='service'>Services</Link> 
            </li>
            <li  className="nav__item">
              <i className="bx bx-layer"></i> <Link onClick={displayMenu}  to='projet'>Projets</Link> 
            </li>
            {/* <li  className="nav__item">
              <i className="bx bx-folder-open"></i> <Link onClick={displayMenu}  to='experience'>Experiences</Link>
            </li> */}
            <li  className="nav__item">
              <i className="bx bx-folder-open"></i>{' '}
              <Link onClick={displayMenu}  to="price">Tarifs</Link>
            </li>
            <li  className="nav__item">
            <i className='bx bx-support'></i> <Link onClick={displayMenu}  to='contact'>Contact</Link> 
            </li>
           
          </ul>
        </nav>
        <div style={{alignSelf: 'flex-end'}}>
          <span className="footer">©2021 Agence de développement web. </span>
        <span onClick={onModal} className="footer__mention">Mentions légales </span>
        </div>
        
      </header>
      <Modal open={open} onClose={onModal} center>
        <Mentions/>
      </Modal>
    </>
  );
};

export default Nav;
