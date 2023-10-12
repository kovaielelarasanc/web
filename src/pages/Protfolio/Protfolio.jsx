import React from 'react'
import { portfolio } from '../../Data';
import PortfolioItem from '../../components/PortfolioItem';

function Protfolio() {
  return (
    <section className='portfolio section'>
      <h2 className='section__title'>My <span>Portfolio</span></h2>
      <div className='portfolio__container container grid'>
        {portfolio.map((item)=>{
          return <PortfolioItem key={item.id} {...item}/>
        })}

      </div>
    </section>
  )
}

export default Protfolio;
