import { Col, Container, Row } from 'react-bootstrap'
import { Text, Title } from '~/components/atoms'
import Card from './card'
import * as S from './styles'

export default function About() {
  return (
    <S.About>
      <Container>
        <Row>
          <Col>
            <S.Head>
              <Title size="l" weight="bold" color="gray_100">
                How can I help with your {''}
                <Text as="span" color="primary_500">
                  project
                </Text>
                ?
              </Title>
              <Text size="l" weight="medium" color="gray_300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
                libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </Text>
            </S.Head>
          </Col>
        </Row>
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
    </S.About>
  )
}
