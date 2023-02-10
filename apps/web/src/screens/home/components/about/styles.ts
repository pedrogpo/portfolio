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

export const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* justify-content: space-between; */
  padding: 2.5rem 1.5rem;
  gap: 2.5rem;
  background: ${({ theme }) => theme.colors.background_800};
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.15);
  border-radius: 10px;

  transition: all 0.3s ease-in-out;
  height: 100%;
`

export const ContactCardHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`
