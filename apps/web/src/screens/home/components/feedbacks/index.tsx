import { Col, Container, Row } from 'react-bootstrap'
import { Button, Text, Title } from '~/components/atoms'
import Card from './card'
import * as S from './styles'
import { useTranslation } from 'next-i18next'

export default function Feedbacks() {
  const { t } = useTranslation('common')
  const items: any[] = t('feedbacks.items', { returnObjects: true })

  return (
    <S.Feedbacks>
      <S.FeedbacksHead>
        <Title as="h2" size="l" weight="bold" color="gray_100">
          {t('feedbacks.title')}
        </Title>
        <Text size="xl" weight="medium" color="gray_400">
          {t('feedbacks.subtitle')}
        </Text>
      </S.FeedbacksHead>
      <Container>
        <Row className="gy-4">
          {items.map((item, index) => (
            <Col key={index} lg={4}>
              <Card name={item.name} stars={item.stars} description={item.feedback} />
            </Col>
          ))}
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
