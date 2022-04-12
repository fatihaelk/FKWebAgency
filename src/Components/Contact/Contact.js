import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import './Contact.scss';
import DOMPurify from 'dompurify';

const Contact = () => {
  const handlerInput = (e) => {
    document.getElementById(e.target.id).value = DOMPurify.sanitize(
      e.target.value
    );
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm('gmail', 'contact_me', e.target, 'user_e1bJmuoifu1YB8pQnizLc')
      .then(
        (result) => {
          Swal.fire({
            icon: 'success',
            title: 'Message envoyé',
            text: 'Merci de nous avoir contacté, nous reviendrons vers vous dans les plus bref délai!',
            showConfirmButton: false,
            timer: 3500,
          });
          e.target.reset();
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Une erreur c'est produite merci de nous contacter par mail contact@fkwebagency.com",
            showConfirmButton: true,
          });
        }
      );
  }
  return (
    <section id="contact" className="contact section">
      <h1 className="section__title">Contact</h1>

      <form onSubmit={sendEmail} className="contact__form">
        <div>
          <label className="contact__label">Nom et Prénom</label>
          <input
            onChange={handlerInput}
            className="contact__input"
            placeholder="Entrez votre Nom"
            name="name"
            id="name"
            type="text"
            required
          />
        </div>

        <div>
          <label className="contact__label">Email</label>
          <input
            onChange={handlerInput}
            className="contact__input"
            placeholder="Entrez votre mail"
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div>
          <label className="contact__label">Objet</label>
          <input
            onChange={handlerInput}
            className="contact__input"
            placeholder="Quel est votre objet"
            type="text"
            name="subject"
            id="subject"
            required
          />
        </div>
        <div>
          <label className="contact__label">Message</label>
          <textarea
            onChange={handlerInput}
            className="contact__input"
            placeholder="Merci de saisir votre message"
            name="message"
            id="message"
            required
          />
        </div>
        <input className="contact__btn" type="submit" value="Envoyer" />
      </form>
    </section>
  );
};

export default Contact;
