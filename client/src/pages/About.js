import React from 'react'
import styled from 'styled-components'
import main from '../assets/images/iconizer-main.svg';

const AboutPage = () => {
  return (
    <main>
      <Wrapper className='page section section-center'>
        <article>
          <div className='title'>
            <h2>About US</h2>
            <div className='underline'></div>
          </div>
          <p>
            We are a global firm singularly focused on meeting
            the immigration challenges of corporate clients around
            the world in ways that make immigration more strategic
            and clients more successful. We employ a uniquely holistic approach,
            combining an incredibly deep knowledge of immigration laws with
            an incredibly strategic understanding of our clients’ challenges
            and requirements. We apply process and technology to deliver more
            efficient and compliant solutions. And we approach every interaction—with
            each company and each of their employees — with an unwavering commitment to service.


          </p>
        </article>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage