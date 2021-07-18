import React from 'react'
import Typewriter from 'typewriter-effect';
import './Home.scss'
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-scroll';


const Home = () => {

  const calc = (x, y) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2,
  ];
  const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
  const trans2 = (x, y) => `translate3d(${x / 7 + 1 }px,${y / 7 + 15 }px,0)`;
  const trans3 = (x, y) => `translate3d(${x / 8 + 2}px,${y / 8 + 2}px,0)`;
  const trans4 = (x, y) => `translate3d(${x / 5 + 2}px,${y / 5 + 2}px,0)`;
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));


    return (
        <section id="home" className="home" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <div className="home__paralax">
                <animated.i className="bx bx-code" style={{ transform: props.xy.interpolate(trans1) }}/>
                <animated.i className="bx bx-code-alt" style={{ transform: props.xy.interpolate(trans1) }}/>
                <animated.i className="bx bx-code-curly" style={{ transform: props.xy.interpolate(trans1) }}/>
                <animated.i className="bx bxl-dev-to" style={{ transform: props.xy.interpolate(trans1) }}/>
                <animated.i className="bx bx-terminal" style={{ transform: props.xy.interpolate(trans1) }}/>
                <animated.i className="bx bx-data" style={{ transform: props.xy.interpolate(trans1) }}/>
                <animated.i className="bx bxl-react" style={{ transform: props.xy.interpolate(trans1) }}/>
                <animated.i className="bx bxs-keyboard" style={{ transform: props.xy.interpolate(trans1) }}/>
                <animated.i className="bx bxl-codepen" style={{ transform: props.xy.interpolate(trans1) }}/>

        <div className="cercle1"></div>
        <div className="cercle2"></div>
       

                
                
            </div>
            <div className="home__content">
                <img className="home__img" src={process.env.PUBLIC_URL + 'assets/fk4.png'}
  alt="Avatar de profil" />
                {/* <h1 className="home__name"> Fatiha Elkarrouti</h1> */}


        {/* <div className="home__animation">
                    Je suis
          <Typewriter
            options={{
              strings: ['développeuse web', 'Designer'],
              autoStart: true,
              loop: true,
            }}
          />
        </div> */}
                {/* <div className="home__icon">
                <i className='bx bxl-linkedin-square'></i>
                <i className='bx bxl-facebook-square' ></i>
                <i className='bx bxl-github' ></i>
                <i className='bx bxl-instagram-alt' ></i>


                </div>
                <a href="" className="home__btn">Contactez moi</a> */}
            </div>
        <div className="mouse">
        <div className="mouse__text">Scroll Down</div>
        <Link to="about">
        <div className="mouse__wrap">
          <span className="mouse__wheel"></span>
        </div>
        </Link> 
      </div>
        </section>
    )
}

export default Home
