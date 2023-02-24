import React from "react";
import styled from "styled-components";

const Contact = () => 
{

return (
  <Wrapper>
    <h1 className="common-heading">Feel Free to Contact us</h1>
    <div className="section-hero-image">
      <picture>
        <img src="./images/contactmap.jpg" alt="hero image" className="hero-img " />
      </picture>
    </div>
    <p className="hero-para">
      <h2>
      Concepts Books Publication provides you the platform, independence and flexibility to create and share what you love and feel with the entire world through book publishing. We provide Book Publishing, Cover Designing, Sales and Distribution services at most economical price.
Thanks for your Interest in Self Publishing book with Concepts Books Publication. As the first step of publishing proceeding, you will be required to provide us the basic contact details of yours. Please use the Contact form to register for contacting us.
    </h2>
    
      </p>
    
    <iframe
      src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.3121627561204!2d78.74286871421272!3d23.843046491149316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3978d773722036cf%3A0x950b414b9a442312!2sConcepts%20Books%20Publication%20India%20Pvt.%20ltd.!5e0!3m2!1sen!2sin!4v1676205631565!5m2!1sen!2sin"
      width="100%"
      height="300"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"></iframe>

    <div className="container">
      <div className="contact-form">
        <form
          action="https://formspree.io/f/xgedgjkr"
          method="POST"
          className="contact-inputs">
          <input
            type="text"
            name="username"
            placeholder="username"
            autoComplete="off"
            required
          />

          <input
            type="email"
            name="Email"
            placeholder="Email"
            autoComplete="off"
            required
          />

          <textarea
            name="message"
            cols="30"
            rows="6"
            autoComplete="off"
            required></textarea>

          <input type="submit" value="send" />
        </form>
      </div>
    </div>
  </Wrapper>
);
};

    const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;

    .section-hero-image {
      display: flex;
      justify-content: top;
      align-items: top;
    }
  
    picture {
      text-align: center;
    }
  
    .hero-img {
      max-width: 99%;
    }

    .container {
      margin-top: 6rem;
      text-align: center;

      .contact-form {
        max-width: 50rem;
        margin: auto;

            
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
    
  `;
   

  

export default Contact;
