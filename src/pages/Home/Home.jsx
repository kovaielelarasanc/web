import React from 'react'
import Profile from "../../../src/assets/kovai.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "../Home/home.css";
const Home = () => {
  return (
    <section className='home section grid'>
      <img src={Profile} className='home__img' />


      <div className='home__container home__content'>
        <div className='home__data'>
          <h1 className='home__title'><span>I'm Kovai Elelarsan.</span> Web Designer </h1>
          <p className='home__descripition'>I'm a web designer & Front-end developer focused on crafting clean & user-friendly experiences, I am passionate about building excelent software that improves the lives of those arround me.</p>
          <Link to='/about' className='button'>
            More About Me <span className='button__icon'><FaArrowRight /></span>
          </Link>
        </div>
      </div>
      <div className='color__block'></div>
    </section>
  )
}

export default Home
