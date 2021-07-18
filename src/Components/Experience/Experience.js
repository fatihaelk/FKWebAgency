import React from 'react'
import './Experience.scss'
import formation from './Data/formation.json'
import experience from './Data/experience.json'

const Experience = () => {
    return (
        <section id="experience" className="experience section">
            <h1 className="section__title"> Mes expériences</h1>
            <div className="experience__container">
                {/* FORMATION  */}
                <div className="experience__wrap">
                    <div className="experience__timeline">
                        {formation.map(el=> {
                            return(

                        <div data-aos="fade-up" className="experience__timeline--item">
                            <p className="experience__timeline--date"> {el.date} </p>
                            <h3 className="experience__timeline--title"> {el.title} </h3>
                            <p className="experience__timeline--description">
                            {el.description}
                            </p>
                        </div>

                            )
                        })}
                    </div>
                </div>

                {/* EXPERIENCE */}
                <div className="experience__wrap pro">
                    <div className="experience__timeline">

                    {experience.map(el=> {
                            return(

                        <div data-aos="fade-up" className="experience__timeline--item">
                            <p className="experience__timeline--date"> {el.date} </p>
                            <h3 className="experience__timeline--title"> {el.title} </h3>
                            <p className="experience__timeline--description">
                            {el.description}
                            </p>
                        </div>

                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
