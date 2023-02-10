import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  .pagination__icon {
    padding: 0.4rem;
    position: absolute;
    top: 50%;
    color: white;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.background_700_08};
    z-index: 1;
    cursor: pointer;
    svg {
      user-select: none;
    }
  }

  .pagination__left {
    transform: translate(-50%, -50%);
    left: 0px;
  }

  .pagination__right {
    transform: translate(50%, -50%);
    right: 0px;
  }
`
