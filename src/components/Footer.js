import React from 'react'
import styled from 'styled-components'
import { links } from '../utils/constants'
import { aboutlinks } from '../utils/constants'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Wrapper>
      <section className='section-center'>
        <div className='col1'>
          <h2>Home Care</h2>
          <h5>
            Copyright &copy; {new Date().getFullYear()}. Furniture Store. All
            rights reserved.
          </h5>
        </div>
        <div className='col2'>
          <div className='services'>
            <h3>Services</h3>
            <ul>
              {links.map((link) => {
                const { id, text, url } = link
                return (
                  <li key={id}>
                    <Link to={url}>{text}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className='about'>
            <h3>About</h3>
            <ul>
              {aboutlinks.map((link) => {
                const { id, text, url } = link
                return (
                  <li key={id}>
                    <Link to={url}>{text}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  text-align: center;
  background-color: rgb(231, 246, 242);
  padding: 2rem 2rem;

  .section-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h2 {
    margin-bottom: 15px;
  }

  li {
    margin: 5px 0;
  }

  a {
    text-transform: capitalize;
    color: rgb(44, 51, 51);
    font-size: 1rem;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: rgb(165, 201, 202);
    }
  }

  .col2 {
    display: flex;
    width: 60vw;
    justify-content: space-between;
    margin-top: 20px;
  }

  h3 {
    margin-bottom: 5px;
  }

  h5 {
    font-weight: 500;
    font-size: 0.9rem;
    color: rgb(44, 51, 51);
  }

  @media (min-width: 776px) {
    width: 100%;

    .section-center {
      flex-direction: row;
      text-align: start;
      margin: 0 auto;
      align-items: start;
      max-width: 1170px;
    }

    .col1 {
      flex: 2;
    }

    .col2 {
      margin-top: 0;
      flex: 1;
    }
  }
`

export default Footer
