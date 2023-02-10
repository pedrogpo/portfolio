import styled from 'styled-components'

export const Feedbacks = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
  background: rgba(20, 21, 26, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(25px);
  padding: 6rem 0;
  margin-bottom: 15.5rem;
`

export const FeedbacksHead = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 4.75rem;
`

export const FeedbacksBottom = styled.div`
  text-align: center;
  margin-top: 5rem;
`