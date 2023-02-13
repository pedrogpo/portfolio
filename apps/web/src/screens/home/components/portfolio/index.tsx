/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { SwiperSlide } from 'swiper/react'
import { Button, Text, Title } from '~/components/atoms'
import { Carousel } from '~/components/molecules'
import * as S from './styles'
import { useTranslation } from 'next-i18next'

export default function Portfolio() {
  const { t } = useTranslation('common')

  const items: any[] = t('portfolio.items', { returnObjects: true })

  return (
    <S.Portfolio>
      <Container>
        <S.PortfolioHeader>
          <Title as="h2" size="l" weight="bold" color="gray_100">
            {t('portfolio.title')}
          </Title>
          <Text size="xl" weight="medium" color="gray_400">
            {t('portfolio.subtitle')}
          </Text>
        </S.PortfolioHeader>
        <Carousel slidesPerView={1}>
          {items.map((item, index) => (
            <SwiperSlide>
              <S.PortfolioContainer>
                <Row className="gy-5">
                  <Col lg={6}>
                    <S.PortfolioContainerContent>
                      <S.PortfolioContainerHead>
                        <Title as="h3" size="l" weight="bold" color="gray_100">
                          {item.title}
                        </Title>
                        <Text size="xl" weight="medium" color="gray_400">
                          {item.description}
                        </Text>
                      </S.PortfolioContainerHead>
                      <S.PortfolioContainerBody>
                        <Title as="h4" size="xs" weight="medium" color="gray_100">
                          {t('portfolio.techs_title')}
                        </Title>
                        <Text size="xl" weight="medium" color="gray_400">
                          {item.techs}
                        </Text>
                      </S.PortfolioContainerBody>
                      <a href={item.button_redirect} target="_blank" rel="noreferrer">
                        <Button boxShadow size="l" weight="bold" padding=".75rem 2rem">
                          {item.button}
                        </Button>
                      </a>
                    </S.PortfolioContainerContent>
                  </Col>
                  <Col lg={6}>
                    <Carousel autoPlayDelay={10000} navigation={false} slidesPerView={1}>
                      {item.images.map((image: any, index: any) => (
                        <SwiperSlide key={index}>
                          <S.PortfolioImage>
                            <Image
                              src={image.url}
                              alt={image.alt}
                              width={960}
                              height={540}
                            />
                          </S.PortfolioImage>
                        </SwiperSlide>
                      ))}
                    </Carousel>
                  </Col>
                </Row>
              </S.PortfolioContainer>
            </SwiperSlide>
          ))}
        </Carousel>
        <S.PortfolioBottom>
          <Button boxShadow size="l" weight="bold" padding=".75rem 2rem">
            {t('portfolio.button')}
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
