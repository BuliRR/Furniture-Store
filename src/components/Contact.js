import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>Get Our Newsletter</h3>
        <h4>To join the worldwide community</h4>
        <div className='content'>
          <form
            action='https://formspree.io/f/xnqrayvl'
            method='POST'
            className='contact-form'
          >
            <div>
              <p>Type your Email Address</p>
              <input
                type='email'
                className='form-input'
                placeholder='example@gmail.com'
                name='email'
              />
            </div>

            <button type='submit' className='submit-btn'>
              Send Now
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  text-align: center;
  background-color: rgb(231, 246, 242);
  padding: 3rem 0;

  .content {
    background: white;
    width: 90vw;
    max-width: 700px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    margin: 2rem auto;
  }

  .contact-form {
    background: white;
    width: 90vw;
    max-width: 700px;
    display: flex;
    justify-content: space-between;
    padding: 1.2rem;
    box-shadow: 0 40px 20px -5px rgba(0, 0, 0, 0.1);
    p {
      color: rgba(0, 0, 0, 0.5);
      font-weight: 500;
      font-size: 0.875rem;
    }
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: none;
  }

  .form-input::placeholder {
    color: black;
    font-weight: 600;
  }

  .submit-btn {
    background: rgb(255, 173, 96);
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s linear;
  }

  .submit-btn:hover {
    background: #d1512d;
  }
  }
`

export default Contact
