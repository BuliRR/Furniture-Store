import React from 'react'
import styled from 'styled-components'
import company1 from '../assets/company1.png'
import company2 from '../assets/company2.png'
import company3 from '../assets/company3.png'
import company4 from '../assets/company4.png'
import company5 from '../assets/company5.png'

function Companies() {
  return (
    <Wrapper className='section-center'>
      <h3>Some of our trusted company</h3>
      <div className='companies'>
        <img src={company1} alt='company' />
        <img src={company2} alt='company' />
        <img src={company3} alt='company' />
        <img src={company4} alt='company' />
        <img src={company5} alt='company' />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  text-align: center;
  padding: 3rem 0;

  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .companies {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  img {
    width: 160px;
  }
`

export default Companies
