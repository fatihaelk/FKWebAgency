import React, {useState, useEffect} from 'react'
import { CountUp } from 'use-count-up'
import './About.scss'
import { Link } from 'react-scroll';


const About = () => {

    return (
        <section id="about" className="about section">

            <h1 className="section__title"> Pourquoi choisir FK Web Agency</h1>
                <div className="about__container">

                {/* <div className="about__avatar">
                    <img src={process.env.PUBLIC_URL + '/assets/avatar3.png'}
  alt="" className="about__img" />
                </div> */}


            <div className="about__content">
                <div className="about__left">
                    <p className="about__text">Agence jeune et novatrice dans le domaine du développement web, nous répondons à toutes vos demandes de projets. Avec FK Web Agency vous êtes entre de bonne main, nos équipes s'occupe de maquéter votre projet, afin de le rendre plus concret. Nous nous occupons également de votre identité visuelle grâce à notre designer qui concevra vos logos et flyers, mais aussi notre community manager qui chouchoutera vos réseaux sociaux et ainsi participera au développement de votré société. La réactivité et les compétences de nos équipes nous permettent de vous accompagner du début à la fin de votre projet. <strong><Link to='contact'> N'hésitez pas à nous contacter</Link> </strong>pour de plus amples informations ou afin d'obtenir votre devis personnalisé.</p>
                </div> 
            </div> 
         
               
           
           </div>     
           <h2 className="section__title"> Nos domaines de compétences</h2>
                  <div className="about__content">
               
                
                    <h4>Développement Web From scratch </h4>
                    <p>Un site web est un ensemble de fichiers liés par des liens hypertextes qui sont stockés sur des serveurs. Il est donc possible de le concevoir de A à Z en ligne de code et de le mettre en ligne par la suite. <br/>
                    C’est cela que l'on appel faire un site from scratch. Cette méthode demande une maîtrise approfondie des langages informatiques. Elle nécessite donc un apprentissage spécifique. Cependant elle possède de nombreux avantages car cela laisse libre court à l'imagination, et permet d'avoir un site sur mesure.</p>

                    <h4> Wordpress </h4>
                    <p>La conception de site en CMS WordPress ne necessite que quelques base en web, une fois celui ci terminé, il est assez simple de former l'administrateur à sa gestion quotidienne, ainsi qu'a la création de nouvelles pages, rubriques... Etc </p>

                    <h4> Web Design</h4>
                    <p>Le web-design est l’association de deux mots, web et design qui signifient littéralement « toile » et « dessiner », cela est donc le fait de dessiner pour le web. Le design est aussi appelée graphisme ou autrement dit transmettre une information sous la forme de contenus visuels (couleurs, images, texte mais aussi sons et vidéos) afin d’attirer, de transmettre et de faire comprendre cette information. </p>

                    <h4> Référencement naturel </h4>
                    <p>Le référencement naturel, ou SEO (Search Engine Optimization), regroupe un ensemble de méthodes et de techniques qui visent à positionner les pages web de votre site internet dans les premiers résultats naturels des moteurs de recherche. Plusieurs règles sont à respecter afin d'améliorer votre visibilité sur le web.</p>

                    <h4> Community manager </h4>
                    <p>Le community manager (animateur de communautés web) a pour mission de gérer et animer vos réseaux sociaux ainsi que fédérer les internautes. Il définit des contenus pour chaque cible (images, vidéos, articles, jeux concours...), il contribue ainsi à développer la présence de votre société sur Internet.</p>
                
            </div>

        <div className="about__proof">

        <div className="about__proof-item">
            <div className="about__proof-info">
                <i className="fa fa-laptop-code"></i>
            <p className="about__counter" >
              <CountUp isCounting start={0} end={7} duration={3} />
            </p>
            </div>
        <div className="about__proof-text">
           <p>Missions accomplies </p> 
        </div>
        </div>

        <div className="about__proof-item">
        <div className="about__proof-info">
        <i className="fas fa-mug-hot"></i>
        <p className="about__counter" >
              <CountUp isCounting start={100} end={350} duration={3} />
            </p>        
        </div>
        <div className="about__proof-text">
           <p> tasses de cafés</p> 
        </div>
        </div>

        <div className="about__proof-item">
        <div className="about__proof-info">
        <i className="fas fa-user-friends"></i>
        <p className="about__counter" >
              <CountUp isCounting start={0} end={5} duration={3} />
            </p>        </div>
        <div className="about__proof-text">
           <p> clients satisfaits</p> 
        </div>
        </div>

        <div className="about__proof-item">

        <div className="about__proof-info">
        <i className="fas fa-business-time"></i>
        <p className="about__counter" >
              <CountUp isCounting start={0} end={4} duration={3} />
            </p>        </div>

          <div className="about__proof-text">
           <p>Missions en cours </p> 

        </div>
        </div>
      </div>
        </section>
    )
}

export default About
