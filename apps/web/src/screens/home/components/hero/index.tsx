/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { Button, Text, Title } from '~/components/atoms'
import * as S from './styles'
import { useTranslation } from 'next-i18next'

export default function Hero() {
  const { t } = useTranslation('common')
  return (
    <S.Hero>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <S.Content>
              <Title as="h4" size="xs" weight="medium" color="gray_300">
                {t('hero.toptitle')}
              </Title>
              <Title size="l" weight="bold" color="gray_100">
                {t('hero.title')}
              </Title>
              <Text size="l" weight="medium" color="gray_400">
                {t('hero.subtitle')}
              </Text>
              <Button className="me-4" size="m" weight="bold" padding=".85rem 2rem">
                {t('hero.button')}
              </Button>
              <Text as="span" weight="medium" size="m" color="gray_300">
                {t('hero.buttontext')}
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
        <Image
          src="/hero/underlay.png"
          loading="lazy"
          alt="Underlay blur"
          width={1008}
          height={1619}
          quality={45}
        />
      </S.FloatingUnderlay>
      <S.ImageUnderlay>
        <Image
          src="/hero/image_underlay.png"
          alt="Image Underlay blur"
          width={1373}
          height={1209}
          quality={45}
        />
      </S.ImageUnderlay>
    </S.Hero>
  )
}
