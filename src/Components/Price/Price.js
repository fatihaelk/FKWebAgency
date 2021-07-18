import './Price.scss';
import data from './price.json';
import { Link } from 'react-scroll';


const Price = () => {
  return (
    <section id="price" className="price section">
      <h1 className="section__title">Tarifs</h1>
      <div className="price__container">
        {data.map((el) => {
          return (
            <div className="price__card">
              <img src={el.icon} alt={el.title} />
              <h3 className="price__card--title">{el.title}</h3>
              <p className="price__card--description">
              {el.description}
              </p>
              <p className="price__card--pricing">À partir <span>{el.price}</span></p>
              <a  className="price__card--button">
              <Link to='contact'>Contactez moi</Link>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Price;
