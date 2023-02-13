import { Container } from 'react-bootstrap'
import { Text, Title } from '~/components/atoms'
import * as S from './styles'
import { useTranslation } from 'next-i18next'

export default function Stats() {
  const { t } = useTranslation('common')

  const statsItems: any[] = t('stats.items', { returnObjects: true })

  return (
    <S.Stats>
      <Container>
        <S.Content>
          <S.Head>
            <Text size="xl" weight="medium" color="gray_400">
              {t('stats.toptitle')}
            </Text>
            <Title as="h2" size="s" weight="bold" color="gray_100">
              {t('stats.title')}
            </Title>
            <Text size="xl" weight="medium" color="gray_400">
              {t('stats.subtitle')}
            </Text>
          </S.Head>
          <S.Body>
            {statsItems.map((item, index) => (
              <S.Stat key={index}>
                <Title as="h3" size="l" weight="black" color="gray_100">
                  {item.number}
                </Title>
                <Text as="h4" size="xl" weight="medium" color="gray_400">
                  {item.title}
                </Text>
              </S.Stat>
            ))}
          </S.Body>
        </S.Content>
      </Container>
    </S.Stats>
  )
}
