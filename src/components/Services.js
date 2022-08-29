import React from 'react'
import styled from 'styled-components'
import { services } from '../utils/constants'

const Services = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <article className='header'>
          <h3>How It Works</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </article>
      </div>
      <div className='services-center'>
        {services.map((service) => {
          const { id, title, img, text } = service
          return (
            <article key={id} className='service'>
              <div className='img'>
                <img src={img} alt='service-img' />
                <p className='num'>{id}.</p>
              </div>
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  text-align: center;
  padding: 2rem 0;

  h3 {
    font-size: 2rem;
  }

  h4 {
    margin-top: 3rem;
  }

  .services-center {
    margin-top: 3rem;
    display: grid;
    gap: 2.5rem;
  }

  .service {
    text-align: center;
    padding: 0 2rem;
  }

  img {
    width: 400px;
    height: 300px;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 1rem;
  }

  .img {
    position: relative;
    display: flex;
    justify-content: center;
  }

  .num {
    position: absolute;
    bottom: -20px;
    background: rgb(255, 173, 96);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    color: white;
    font-size: 1.5rem;
    border: 10px solid white;
    font-weight: bold;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default Services
