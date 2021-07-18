import React, { useState } from 'react';
import './Review.scss';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Review = () => {
  const [current, setCurrent] = useState(1);
  const numb = [1, 2, 3];
  const change = (pagination) => setCurrent(pagination);

  return (
    <section  className="review section">
            <h1 className="section__title">Avis des clients</h1>

      <Carousel autoPlay showThumbs={false} interval={2000}>
             <div section container>
              
             <img className="review__img" src={process.env.PUBLIC_URL + '/assets/review1.jfif'} alt="" />    
             <h4>Julien drocourt</h4><br/>
                
             <p className="legend review__description">Trois mots suffisent à décrire cette agence : Professionalisme, Sérieux, Confiance. N'hésitez pas à faire appel à eux, vous êtes entre de bonne main.</p>
            </div>
            <div section container>
              
             <img className="review__img" src={process.env.PUBLIC_URL + '/assets/review2.jfif'} alt="" />    
             <h4>Isabelle Dissi</h4><br/>
                
             <p className="legend review__description">N'ayant aucune idée quand à la concetion et le design de mon site internet. Je leur est laissé carte blanche et je ne suis pas du tout déçu et tout cela sans avoir à leur courrir derrière. Recommande à 100%.</p>
            </div>

            <div section container>
              
             <img className="review__img" src={process.env.PUBLIC_URL + '/assets/review3.jfif'} alt="" />    
             <h4>Alain Frocon</h4><br/>
                
             <p className="legend review__description">Je suis artisant et j'avais besoin d'un site afin d'y présenter mes réalisations. FK Web Agency à su répondre à toutes mes demandes.</p>
            </div>
      </Carousel>


    </section>
  );
};

export default Review;
