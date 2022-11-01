
import Subtitle from '../../miniComponents/subtitle/Subtitle'
import './contact.scss'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Alert from '../../miniComponents/alert/Alert';

const Contact = () => {

  const form = useRef();

  const [alert, setAlert] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yn0bc3j', 'template_sg02ikl', form.current, 'Rv1feUI2IqynalU4r')
      .then((result) => {
        setAlert(true)
        setTimeout(() => setAlert(false), 3000)
      }, (error) => {
        setErrorform(error.text + 'ubo un error ')
      });
  };



  return (
    <section id='contact'>

      <Subtitle title='contacto ' subtitle='puedes contactarme rapidamen por aqui ' />

      <div className="container__center">

        <div className="form__conted">

          <div className="conta__info">
            <h3 className='contact__title' >  contacto   </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, eius! Molestiae, ex voluptatum eius perspiciatis veniam suscipit accusamus sit similique libero debitis officia ratione, eveniet, corrupti provident error cum quod.</p>

            <div className="contact__item__conted">

              <div className="item">
                <h4> <i className='bx bxl-linkedin-square' ></i>  linkedin</h4>
                <a href='https://www.linkedin.com/in/andres-felipe-mancilla/' target="_blank" ><i className='bx bx-link-external'></i> ir a linkedin   </a >
              </div>

              <div className="item">
                <h4> <i className='bx bxl-gmail' ></i> correo </h4>
                <a href="mailto:mancillaandres7@gmail.com" > <i className='bx bx-link-external'></i> enviar correo </a >
              </div>

              <div className="item">
                <h4> <i className='bx bxl-linkedin-square' ></i> clinkedin</h4>
                <a > <i className='bx bx-link-external'></i>   name  contact  </a >
              </div>

            </div>
          </div>

          {
            alert ? <div className="check__conted">
              <i className='bx bxs-check-circle check  '></i>
              <span> mensaje recibido   </span>
            </div> :


              <div className="formlario__contact">

                <h3 className='contact__title' >   formulari   </h3>

                <form ref={form} onSubmit={sendEmail} >
                  <input type="text" name="name" id="name" required minLength='4' placeholder='nombre ' />
                  <input type="email" name="mail" id="mail" required placeholder='correo   ' />
                  <textarea name="masaje" placeholder='mensaje ' required id="masaje" cols="30" rows="6"  ></textarea>

                  <div className="bottom__">
                    <button> enviar  </button>
                  </div>
                </form>
              </div>
          }
        </div>
      </div>

    </section>
  )
}

export default Contact