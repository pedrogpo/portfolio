import { Col, Container, Row } from 'react-bootstrap'
import { Button, Title } from '~/components/atoms'
import Card from './card'
import * as S from './styles'

export default function Feedbacks() {
  return (
    <S.Feedbacks>
      <S.FeedbacksHead>
        <Title size="l" weight="bold" color="gray_100">
          My last feedbacks
        </Title>
        <Title size="xs" weight="medium" color="gray_400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Title>
      </S.FeedbacksHead>
      <Container>
        <Row>
          <Col lg={4}>
            <Card />
          </Col>
          <Col lg={4}>
            <Card />
          </Col>
          <Col lg={4}>
            <Card />
          </Col>
        </Row>
      </Container>
      <S.FeedbacksBottom>
        <Button boxShadow size="xl" weight="bold" padding=".85rem 2rem">
          Get in touch
        </Button>
      </S.FeedbacksBottom>
    </S.Feedbacks>
  )
}
