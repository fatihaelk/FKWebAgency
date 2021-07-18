import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import './Contact.scss';

const Contact = () => {
    function sendEmail(e){
        e.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'Message envoyé',
            text: "Merci de m'avoir contacter, je reviens vers vous dans les plus bref délai!",
            showConfirmButton: false,
            timer: 3500,
          });

        emailjs
        .sendForm(
            'gmail',
            'template_porfolio',
            e.target,
            'user_sgJIpTNQzaTR9saHvr4Wn'
        )
        .then(result => {

        }, error =>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Une erreur c'est produite merci de me contacter par mail email@gmail.com",
                showConfirmButton: true,
              });
        })
    }
  return (
    <section id="contact" className="contact section">
    <h1 className="section__title">Contact</h1>

    <form onSubmit={sendEmail} className="contact__form">
      <div>
        <label className="contact__label">Nom et Prénom</label>
        <input
          className="contact__input"
          placeholder="Entrez votre Nom"
          name="name"
          type="text"
          required
        />
      </div>

      <div>
        <label className="contact__label">Email</label>
        <input
          className="contact__input"
          placeholder="Entrez votre mail"
          type="email"
          name="email"
          required
        />
      </div>
      <div>
        <label className="contact__label">Objet</label>
        <input
          className="contact__input"
          placeholder="Quel est votre objet"
          type="text"
          name="subject"
          required
        />
      </div>
      <div>
        <label className="contact__label">Message</label>
        <textarea
          className="contact__input"
          placeholder="Merci de saisir votre message"
          name="message"
          required
        />
      </div>
      <input className="contact__btn" type="submit" value="Envoyer" />
    </form>
  </section>
  );
};

export default Contact;
