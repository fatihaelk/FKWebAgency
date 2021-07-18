import React from 'react'
import './Services.scss'
// import design from '../../../public/assets/design.png'
// import dev from '../../../public/assets/dev.svg'
// import wordpress from '../../../public/assets/wordpress.svg'
import Card from './Card';
import { Link } from 'react-scroll';




const Services = () => {
    return (
        <section id="service" className="service section">
            <h1 className="section__title"> Services</h1>
            <div className="service__offers"> 
            <Card 
            custom={'design'}
            title={"UI/UX Design"} 
            img={process.env.PUBLIC_URL + 'assets/design.png'}
            alt={"icone design"}
            text={'Le logo et les flyer publicitaire reflète souvent l\'image de la société. Avec nos nos équipes nous créeront ensemble une image de marque qui vous ressmeble.'} 
            />

            <Card 
            custom={'dev'}
            title={"Développement from scratch"} 
            img={process.env.PUBLIC_URL + 'assets/dev.svg'}
            alt={"icone design"}
            text={'Le développement web vous permet d\'avoir un site internet sur mesure qui vous ressemble, vous pouvez laisser libre court à votre imagination '} 
            />

            <Card 
            custom={'wordpress'}
            title={"Wordpress"} 
            img={process.env.PUBLIC_URL + 'assets/wordpress.svg'}
            alt={"icone design"}
            text={'Besoin d\'une solution simple rapide et efficace pour un ecommerce ou un site vite vitrine et ceux à un cout réduit'} 
            />
               
            </div>

            <p className="service__contact">        A la recherche d'un projet sur mesure ? <Link to='contact'>Cliquez ici  pour me contacter! 👋</Link> 
</p>

        </section>
    )
}

export default Services
