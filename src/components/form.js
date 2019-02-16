import React from 'react'
import styled from 'styled-components'
import { colors } from '../components/styles/globalStyles'


const Form = () => (
  <FormWrapper>
    <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="bot-field" />
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" required />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="6" required></textarea>
      </div>
      <input type="submit" value="Send Message" />
    </form>
  </FormWrapper>
)

export default Form


const FormWrapper = styled.div`
  form {
    max-width: 300px;
    margin: 3rem auto;
    padding: 1rem;
    border: 1px solid ${colors.mainYellow};
    border-radius: .75rem;
  }
  @media (min-width: 480px) {
    form {
      max-width: 480px;
    }
  }

  label {
    display: block;
    margin-bottom: .5rem;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    background: rgba(255,255,255, .1);
    background-color: #e8eeef;
    color: #8a97a0;
    box-shadow: 0 1px 0 rgba(0, 0, 0, .03) inset;
    border: none;
    font-size: 1rem;
    height: auto;
    width: 100%;
    margin: 0;
    outline: 0;
    padding: .85rem;
    margin-bottom: 1.75rem;
    border-radius: .5rem !important;
  }

  input[type="submit"] {
    color: #fff;
    background-color: ${colors.mainYellow};
    font-size: 1.25rem;
    text-align: center;
    font-style: normal;
    width: 100%;
    border-radius: .5rem !important; 
    border: 1px solid ${colors.secYellow};
    border-width: 1px 1px 3px;
    padding: 1rem;
    margin-bottom: .5rem;
    outline: none;
    border: none;
    box-shadow: 0 3px #9eadae;

    cursor: pointer;
    &:hover {
      background-color: ${colors.secYellow};
    }

    &:active {
      background-color: ${colors.secYellow};
      box-shadow: 0 2px #9eadae;
      transform: translateY(1px);
    }
  }

  /* Fix input["submit"] broken styles on mobile device */
  textarea,
  input.text,
  input[type="text"],
  input[type="button"],
  input[type="submit"],
  .input-checkbox {
    -webkit-appearance: none;
    border-radius: 0;
  }
`
