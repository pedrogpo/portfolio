/* eslint-disable react/no-unescaped-entities */
import { Col, Container, Row } from 'react-bootstrap'
import { Button, Text, Title } from '~/components/atoms'
import Card from './card'
import * as S from './styles'
import { useTranslation } from 'next-i18next'

export default function About() {
  const { t } = useTranslation('common')
  const title = t('about.title').split(' ')
  const lastWord = title[title.length - 1].replace('?', '').replace('.', '')
  const textWithoutFinalWord = t('about.title')
    .replace(lastWord, '')
    .replace('?', '')
    .replace('.', '')

  return (
    <S.About>
      <Container>
        <Row>
          <Col>
            <S.Head>
              <Title size="l" weight="bold" color="gray_100">
                {textWithoutFinalWord}
                <Text as="span" color="primary_500">
                  {lastWord}
                </Text>
                ?
              </Title>
              <Text size="l" weight="medium" color="gray_300">
                {t('about.subtitle')}
              </Text>
            </S.Head>
          </Col>
        </Row>
        <Row className="gy-4">
          <Col lg={4} md={6}>
            <Card
              iconSrc="/icons/web.svg"
              title={t('about.cards.0.title')}
              description={t('about.cards.0.description')}
            />
          </Col>
          <Col lg={4} md={6}>
            <Card
              iconSrc="/icons/uiux.svg"
              title={t('about.cards.1.title')}
              description={t('about.cards.1.description')}
            />
          </Col>
          <Col lg={4} md={6}>
            <Card
              iconSrc="/icons/software.svg"
              title={t('about.cards.2.title')}
              description={t('about.cards.2.description')}
            />
          </Col>
          <Col lg={4} md={6}>
            <Card
              iconSrc="/icons/idea.svg"
              title={t('about.cards.3.title')}
              description={t('about.cards.3.description')}
            />
          </Col>
          <Col lg={4} md={6}>
            <Card
              iconSrc="/icons/seo.svg"
              title={t('about.cards.4.title')}
              description={t('about.cards.4.description')}
            />
          </Col>
          <Col lg={4} md={6}>
            <S.ContactCard>
              <S.ContactCardHead>
                <Title size="xs" weight="bold" color="gray_100">
                  {t('about.contact.title')}
                </Title>
                <Text size="s" weight="medium" color="gray_400">
                  {t('about.contact.subtitle')}
                </Text>
              </S.ContactCardHead>
              <Button boxShadow padding=".5rem 1rem" size="s" weight="semibold">
                {t('about.contact.button')}
              </Button>
            </S.ContactCard>
          </Col>
        </Row>
      </Container>
    </S.About>
  )
}
