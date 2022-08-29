import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>
          <Link to='/'>Home </Link>/
          {product && <Link to='/products'> Products / </Link>} {title}
        </h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: rgb(231, 246, 242);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  color: #002b5b;

  a {
    color: #2b4865;
  }

  a:hover {
    color: #256d85;
  }
`

export default PageHero
