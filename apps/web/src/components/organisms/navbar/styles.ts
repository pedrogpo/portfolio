import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  position: fixed;

  top: 0;
  left: 50%;
  transform: translateX(-50%);

  z-index: 999;

  padding-top: 3.5rem;

  .nav-link {
    color: ${({ theme }) => theme.colors.gray_400};
    font-weight: ${({ theme }) => theme.typography.weight.medium}!important;
    font-size: ${({ theme }) => theme.typography.text.m} !important;
    transition: color 0.3s ease;
    padding: 0;

    .active {
      color: ${({ theme }) => theme.colors.gray_100};
    }

    :hover {
      color: ${({ theme }) => theme.colors.gray_200};
    }
  }

  .navbar-toggler {
    border-color: transparent;
    box-shadow: none !important;
    padding: 0.5rem 0.7rem;
    font-size: 1.25rem;
  }

  &.--scrolled {
    background-color: ${({ theme }) => theme.colors.background_800_08};
    padding: 1.25rem 2rem;
    box-shadow: 0 0.15rem 1.75rem 0 rgba(31, 45, 65, 0.15) !important;
    backdrop-filter: blur(20px);
  }

  @media screen and (max-width: 992px) {
    background-color: ${({ theme }) => theme.colors.background_800_08};
    padding: 1.25rem 2rem;
    box-shadow: 0 0.15rem 1.75rem 0 rgba(31, 45, 65, 0.15) !important;
    backdrop-filter: blur(20px);
  }

  @media screen and (max-width: 992px) {
    padding-top: 1.5rem;
  }

  transition: 0.35s ease all;

  transition: 0.6s ease padding;
`

export const LanguageSelector = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    border-radius: 5px;
  }

  @media screen and (min-width: 992px) {
    border-right: 1px solid ${({ theme }) => theme.colors.gray_400};
  }

  padding-right: 2rem;
`
