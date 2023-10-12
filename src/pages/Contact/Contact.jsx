import React from 'react'
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaFacebookF, FaTwitter, FaYoutube, FaDribbble, } from "react-icons/fa";
import { FiSend } from 'react-icons/fi';
import '../Contact/contact.css';
function Contact() {
  return (
    <section className='contact section'>
      <h2 className='section__title'>Get in <span>Touch</span></h2>

      <div className='contact__container container grid'>
        <div className='contact__data'>
          <h3 className='contact__title'>Quicky!</h3>
          <p className='contact__description'>i waiting for you suggstion and messag.</p>
          <div className='contact__info'>
            <div className='info__item'>
              <FaEnvelopeOpen className='info__icon' />
              <div>
                <span className='info__title'>Mail Me</span>
                <h4 className='info__desc'>kovaielelarasanc@gmail.com</h4>
              </div>
            </div>
            <div className='info__item'>
              <FaPhoneSquareAlt className='info__icon' />
              <div>
                <span className='info__title'>Call Me</span>
                <h4 className='info__desc'>+91 8778944714</h4>
              </div>
            </div>
          </div>
          <div className='contact__socials'>
            <a href='https://facebook.com' className='contact__social-link'>
              <FaFacebookF />
            </a>
            <a href='https://twitter.com' className='contact__social-link'>
              <FaTwitter />
            </a>
            <a href='https://youtube.com' className='contact__social-link'>
              <FaYoutube />
            </a>
            <a href='https://dribble.com' className='contact__social-link'>
              <FaDribbble />
            </a>
          </div>
        </div>

        <form className='contact__form'>
          <div className='form__input-group'>
            <div className='form__input-div'>
              <input type="text" placeholder='Your Name' className="form__control" required />
            </div>
            <div className='form__input-div'>
              <input type="email" placeholder='Email Id' className="form__control" required />
            </div>
            <div className='form__input-div'>
              <input type="text" placeholder='Your Subject' className="form__control" required />
            </div>
          </div>

          <div className='form__input-div'>
            <textarea placeholder='Your Message' className='form__control textarea' required></textarea>
          </div>
          <div className='form__input-div'>
          <button className='button'>
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend/>
            </span>
          
          </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
