import { useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

export const Join = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_vwqcuov', 'template_x0puodl', form.current, '9LsWB8VSYOoEIcABm')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className="Join" id="join-us">
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>¿LISTO PARA</span>
                <span>ALCANZAR</span>
            </div>
            <div>
                <span>TUS METAS</span>
                <span className='stroke-text'>CON NOSOTROS?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={ form } className="email-container" onSubmit={ sendEmail }>
                <input type="email" name='user_email' placeholder='Tu email' />
                <button className='btn btn-j'>RESGISTRATE AHORA</button>
            </form>
        </div>
    </div>
  )
}
