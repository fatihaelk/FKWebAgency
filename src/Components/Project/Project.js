import React, { useState } from 'react';
import data from './data.json';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import './Project.scss';

const Project = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState();

  const onOpenModal = (id) => {
    setId(id);
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);

  return (
    <section id="projet" className="project section">
      <h1 className="section__title">Projects récents</h1>
      <div className="project__container">
        {data.map((el) => {
          return (
            <div onClick={() => onOpenModal(el.id)} className="project__card">
              <div className="project__overlay"></div>
              <div
                style={{
                  backgroundImage: `url(${el.image})`,
                  backgroundPosition: 'center center',
                  backgroundSize: 'cover',
                }}
                className="project__img">
                <h2 className="project__card-title">{el.title}</h2>
              </div>
            </div>
          );
        })}
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        {data.map((el) => {
            return(
                el.id === id && (
                <div className="modal__img">
                <img src={el.image} alt={el.title} />
                <h2 className="modal__title"> {el.title}</h2>
                <p className="modal__text"> {el.description}</p>
                <p className="modal__tech">{el.technologie}</p>
                <a href={el.url} target='blank' className="modal__btn">Voir en ligne</a>
              </div>
            )
            )
          /*======   if(el.id == id){

                return (
                    <div className="modal__img">
              <img src={el.image} alt={el.title} />
            </div>
          );
        } =======*/
        })}
      </Modal>
    </section>
  );
};

export default Project;
