import React from 'react'

const Card = ({title, img, text, alt, custom}) => {
    return (
        <>
             <div className={`card ${custom}`}>
                    <div className="card__top">
                        <div className="card__img">
                            <img src={img} alt={alt} />
                        </div>
                        <h2 className="card__title"> {title} </h2>
                    </div>

                    <div className="card__bottom">
                        <p className="card__text"> {text}
                        </p>
                    </div>
    
                </div>
        </>
    )
}

export default Card
