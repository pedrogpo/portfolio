import styled from 'styled-components'

export const About = styled.section``

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
  }
`
