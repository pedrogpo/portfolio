import styled from 'styled-components'

export const Hero = styled.section`
  position: relative;

  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;

  padding: calc(122px) 0;

  @media screen and (max-width: 992px) {
    padding-top: calc(122px + 2.5rem);
  }

  > div:first-child {
    position: relative;
    z-index: 1;
  }
`

export const Content = styled.div`
  h4 {
    margin-bottom: 0.5rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
  p {
    margin-bottom: 4rem;
  }
`

export const FloatingImage = styled.div`
  position: relative;
  top: 3rem;
  img {
    width: 100%;
    height: 100%;

    @media screen and (max-width: 992px) {
      /* transform: scaleX(-1); */

      position: relative;
      left: -2.5rem;
    }
  }
`

export const FloatingUnderlay = styled.div`
  position: absolute;
  height: 100%;
  right: 0;

  @media screen and (max-width: 768px) {
    opacity: 0.35;
  }
`

export const ImageUnderlay = styled.div`
  position: absolute;
  height: 100%;
  right: 0;
`
