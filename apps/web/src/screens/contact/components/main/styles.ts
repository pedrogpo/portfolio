import styled, { css } from 'styled-components'

export const Contact = styled.section`
  position: relative;

  width: 100%;
  display: flex;
  align-items: center;

  min-height: 100vh;

  padding-top: calc(122px + 5.5rem);

  padding-bottom: 8rem;
`

export const Content = styled.div``

export const ContentHead = styled.div`
  margin-bottom: 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ContentBody = styled.div``

export const FormContainer = styled.form`
  background-color: ${({ theme }) => theme.colors.background_800};
  border-radius: 10px;
  padding: 3rem;
`

export const FormChooseCategory = styled.div`
  margin: 1.5rem 0;

  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`

interface ItemProps {
  active?: boolean
}

export const FormChooseCategoryItem = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 0.625rem 2rem;
  gap: 0.625rem;
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.text.m};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  ${({ active, theme }) =>
    active
      ? css`
          color: ${({ theme }) => theme.colors.gray_100};
          border: 1px solid ${({ theme }) => theme.colors.gray_100};
        `
      : css`
          color: ${({ theme }) => theme.colors.gray_500};
          border: 1px solid ${({ theme }) => theme.colors.gray_500};
        `}

  &:hover {
    color: ${({ theme }) => theme.colors.gray_100};
  }

  transition: all 0.25s ease-in-out;
`

export const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;
`
