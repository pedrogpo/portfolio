import styled from 'styled-components'

// this will be recycled later

export const IconBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 10px;

  width: 56px;
  height: 56px;

  /* Background/600 */

  background: ${({ theme }) => theme.colors.background_600};
  border-radius: 10px;

  border: double 1px transparent;
  background-image: ${({
    theme,
  }) => `linear-gradient(${theme.colors.background_600}, ${theme.colors.background_600}), 
                                        linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.15) 100%)`};
  background-origin: border-box;
  background-clip: padding-box, border-box;

  transition: all 0.3s ease-in-out;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5rem 1.5rem;
  gap: 1.5rem;
  background: ${({ theme }) => theme.colors.background_800};
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.15);
  border-radius: 10px;

  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.5);
    transform: scale(1.03);

    filter: brightness(1.02);
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
`
