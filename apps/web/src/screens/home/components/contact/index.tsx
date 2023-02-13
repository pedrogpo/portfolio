/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { Button, Text, Title } from '~/components/atoms'
import * as S from './styles'
import { useTranslation } from 'next-i18next'

export default function Contact() {
  const { t } = useTranslation('common')

  return (
    <S.Contact>
      <Container>
        <S.ContactContainer>
          <Row className="align-items-center gy-5">
            <Col lg={6} className="order-lg-1 order-2">
              <S.ContactContent>
                <S.ContactContentBody>
                  <Title as="h2" size="xs" weight="medium" color="gray_300">
                    {t('contact.top_title')}
                  </Title>
                  <Title as="h3" size="l" weight="bold" color="gray_100">
                    {t('contact.title')}
                  </Title>
                  <Text size="xl" weight="medium" color="gray_400">
                    {t('contact.subtitle')}
                  </Text>
                </S.ContactContentBody>
                <S.ContactContentBottom>
                  <Button padding=".85rem 2rem" size="xl" weight="bold" fill="white">
                    {t('contact.button')}
                  </Button>
                </S.ContactContentBottom>
              </S.ContactContent>
            </Col>
            <Col lg={6} className="order-lg-2 order-1">
              <S.ContactImage>
                <Image
                  src="/me2.png"
                  alt="Contact me - Pedro Guilherme"
                  width={220}
                  height={268}
                />
              </S.ContactImage>
            </Col>
          </Row>
        </S.ContactContainer>
      </Container>
    </S.Contact>
  )
}
