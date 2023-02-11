/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { SwiperSlide } from 'swiper/react'
import { Button, Text, Title } from '~/components/atoms'
import { Carousel } from '~/components/molecules'
import * as S from './styles'

export default function Portfolio() {
  return (
    <S.Portfolio>
      <Container>
        <S.PortfolioHeader>
          <Title size="l" weight="bold" color="gray_100">
            Portfolio
          </Title>
          <Text size="xl" weight="medium" color="gray_400">
            Here are some of my projects, I hope you like them!
          </Text>
        </S.PortfolioHeader>
        <Carousel slidesPerView={1}>
          <SwiperSlide>
            <S.PortfolioContainer>
              <Row className="gy-5">
                <Col lg={6}>
                  <S.PortfolioContainerContent>
                    <S.PortfolioContainerHead>
                      <Title size="l" weight="bold" color="gray_100">
                        Ploow store
                      </Title>
                      <Title size="xs" weight="medium" color="gray_400">
                        Front end/Back-end of the new website
                      </Title>
                    </S.PortfolioContainerHead>
                    <S.PortfolioContainerBody>
                      <Title size="xs" weight="medium" color="gray_100">
                        Tech's that I used:
                      </Title>
                      <Text size="xl" weight="medium" color="gray_400">
                        Typescript, Next JS/React JS, Styled Components, Bootstrap, Radix
                        UI, Framer Motion, Zod, React Hook Form, Axios, Swiper, JWT,
                        Prisma, BCrypt, ISR/SSG, Google RECaptcha, Vercel, Figma, MySQL
                        and others...
                      </Text>
                    </S.PortfolioContainerBody>
                    <Button boxShadow size="l" weight="bold" padding=".75rem 2rem">
                      Take a look
                    </Button>
                  </S.PortfolioContainerContent>
                </Col>
                <Col lg={6}>
                  <Carousel autoPlayDelay={10000} navigation={false} slidesPerView={1}>
                    <SwiperSlide>
                      <S.PortfolioImage>
                        <Image
                          src="/portfolio/ploowstore/site1.png"
                          alt="Site Ploow store 1"
                          width={960}
                          height={540}
                        />
                      </S.PortfolioImage>
                    </SwiperSlide>
                    <SwiperSlide>
                      <S.PortfolioImage>
                        <Image
                          src="/portfolio/ploowstore/site2.png"
                          alt="Site Ploow store 2"
                          width={960}
                          height={540}
                        />
                      </S.PortfolioImage>
                    </SwiperSlide>
                  </Carousel>
                </Col>
              </Row>
            </S.PortfolioContainer>
          </SwiperSlide>
        </Carousel>
        <S.PortfolioBottom>
          <Button boxShadow size="l" weight="bold" padding=".75rem 2rem">
            See more
          </Button>
        </S.PortfolioBottom>
      </Container>
      <S.PortfolioUnderlayLeft>
        <Image src="/portfolio/underlay.png" alt="Underlay" width={1006} height={1461} />
      </S.PortfolioUnderlayLeft>
      <S.PortfolioUnderlayRight>
        <Image src="/portfolio/underlay.png" alt="Underlay" width={1006} height={1461} />
      </S.PortfolioUnderlayRight>
    </S.Portfolio>
  )
}
