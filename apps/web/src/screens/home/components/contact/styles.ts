import styled from 'styled-components'

export const Contact = styled.section`
  width: 100%;
  margin-bottom: 12.5rem;
`

export const ContactContainer = styled.div`
  background: rgba(126, 136, 190, 0.03);
  border-radius: 20px;
  padding: 6rem 5.5rem;
  position: relative;

  border-top: 1px solid rgba(255, 255, 255, 0.1);
`

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    margin-bottom: 0.25rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }
`

export const ContactContentBody = styled.div`
  margin-bottom: 5rem;
`

export const ContactContentBottom = styled.div``

export const ContactImage = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 992px) {
    justify-content: center;
    img {
      transform: scale(0.85);
    }
  }
  img {
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));
  }
`
