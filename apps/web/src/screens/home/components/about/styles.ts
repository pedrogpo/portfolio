import styled from 'styled-components'

export const About = styled.section`
  width: 100%;
  margin-bottom: 6.25rem;
  position: relative;
  z-index: 2;
`

export const Head = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  p {
    @media screen and (min-width: 992px) {
      max-width: 800px;
      margin: 0 auto;
    }
    margin-bottom: 6.25rem !important;
  }
`
