import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import sofa from '../assets/sofa.png'
import { FaSearch } from 'react-icons/fa'

const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>Make Your Interior More Minimalistic & Modern</h1>
        <p>
          We help you to create organize your room to be more cozy, design by
          professional interior designer
        </p>
        <form action='' className='search-bar'>
          <input
            type='text'
            className='search-input'
            placeholder='Search furniture'
          />
          <button type='submit'>
            <FaSearch />
          </button>
        </form>
      </article>
      <article className='img-container'>
        <img src={sofa} alt='sofa' className='main-img' />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  text-align: center;

  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    font-size: 1rem;
  }

  .search-bar {
    width: 100%;
    max-width: 700px;
    display: flex;
    align-items: center;
    border-radius: 60px;
    padding: 10px 20px;
    -webkit-box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);

    svg {
      width: 25px;
      font-size: 2rem;
      color: white;
    }
  }

  .search-bar input {
    background: transparent;
    flex: 1;
    border: 0;
    outline: none;
    padding: 15px 20px;
    font-size: 20px;

    ::placeholder {
      color: rgba(0, 0, 0, 0.2);
    }
  }

  .search-bar button {
    border: 0;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background: rgb(255, 173, 96);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s linear;
  }

  .search-bar button:hover {
    background: #d1512d;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 3rem;
  }

  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    text-align: left;

    .content p {
      font-size: 1.25rem;
      margin-bottom: 5rem;
    }

    .img-container {
      display: flex;
      position: relative;
      background: rgb(88, 88, 138);
      background: radial-gradient(
        circle,
        rgba(88, 88, 138, 1) 0%,
        rgba(0, 43, 91, 1) 73%,
        rgba(0, 43, 91, 1) 98%
      );
      width: 100%;
      height: 100%;
      align-items: center;
      border-bottom-left-radius: 18rem;
    }

    .main-img {
      position: absolute;
      left: -125px;
      width: 550px;
    }
  }
`

export default Hero
