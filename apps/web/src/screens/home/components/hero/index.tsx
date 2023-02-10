/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { Button, Text, Title } from '~/components/atoms'
import * as S from './styles'

export default function Hero() {
  return (
    <S.Hero>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <S.Content>
              <Title as="h4" size="xs" weight="medium" color="gray_300">
                I'm Pedro Guilherme
              </Title>
              <Title size="l" weight="bold" color="gray_100">
                Let's get your idea off the drawing board?
              </Title>
              <Text size="l" weight="medium" color="gray_400">
                Bring your ideas to life with me! As a skilled professional, I'm here to
                help you create the perfect experience for your project. Let me take your
                idea off the drawing board and make it a reality.
              </Text>
              <Button className="me-4" size="m" weight="bold" padding=".85rem 2rem">
                About me
              </Button>
              <Text as="span" weight="medium" size="m" color="gray_300">
                Get in touch
              </Text>
            </S.Content>
          </Col>
          <Col lg={6}>
            <S.FloatingImage>
              <Image src="/hero/img.png" alt="Hero Image" width={793} height={780} />
            </S.FloatingImage>
          </Col>
        </Row>
      </Container>
      <S.FloatingUnderlay>
        <Image src="/hero/underlay.png" alt="Underlay blur" width={1008} height={1619} />
      </S.FloatingUnderlay>
      <S.ImageUnderlay>
        <Image
          src="/hero/image_underlay.png"
          alt="Image Underlay blur"
          width={1373}
          height={1209}
        />
      </S.ImageUnderlay>
    </S.Hero>
  )
}
