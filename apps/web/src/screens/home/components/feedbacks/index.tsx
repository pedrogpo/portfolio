import { Col, Container, Row } from 'react-bootstrap'
import { Button, Text, Title } from '~/components/atoms'
import Card from './card'
import * as S from './styles'

export default function Feedbacks() {
  return (
    <S.Feedbacks>
      <S.FeedbacksHead>
        <Title as="h2" size="l" weight="bold" color="gray_100">
          My last feedbacks
        </Title>
        <Text size="xl" weight="medium" color="gray_400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </S.FeedbacksHead>
      <Container>
        <Row className="gy-4">
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
