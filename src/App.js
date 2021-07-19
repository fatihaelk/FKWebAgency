import Nav from './Components/Nav/Nav';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import aos from 'aos'
import 'aos/dist/aos.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Review from './Components/Review/Review';
import './App.scss'
import Services from './Components/Services/Services';
import Project from './Components/Project/Project';
import Price from './Components/Price/Price';
import Contact from './Components/Contact/Contact';
import {Helmet} from "react-helmet";
import Favicon from './fk4.ico'



function App() {
  const [toggle, setToggle] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => setWidth(window.innerWidth);

    window.addEventListener('resize', changeWidth);

    return () => window.removeEventListener('resize', changeWidth);
  }, []);

  const displayMenu = () => setToggle(!toggle);




  aos.init({
    duration: 1500
  })

  return (
    <div className="App">
         <Helmet>
                <meta charSet="utf-8" />
                <title>FK Web agency</title>
                <meta name="description" content="Site Fk Web Agency, agence de développement web" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut inoc" href={Favicon} />


                <link rel="canonical" href="http://fkwebagency.com" />
            </Helmet>
      <Router>

      <Nav width={width} toggle={toggle} setToggle={setToggle} displayMenu={displayMenu} />
      <main className={toggle ? 'show-menu' : undefined}>
        {width < 1100 && (
          <div className= 'nav__toggle'>
            <i onClick={displayMenu} className="bx bx-menu-alt-left"></i>
          </div>
        )}
        
            <Home exact path="/" component={Home} />
            <About/>
            <Services/>
            <Project/>
            <Price/>
            <Review />
            
            <Contact/>
            
      </main>
        </Router>
    </div>
  );
}

export default App;
