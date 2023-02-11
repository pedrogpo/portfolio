import { Container } from 'react-bootstrap'
import { Text, Title } from '~/components/atoms'
import * as S from './styles'
import { useTranslation } from 'next-i18next'

export default function Stats() {
  const { t } = useTranslation('common')

  return (
    <S.Stats>
      <Container>
        <S.Content>
          <S.Head>
            <Text size="xl" weight="medium" color="gray_400">
              Lorem ipsum
            </Text>
            <Title size="s" weight="bold" color="gray_100">
              {t('stats.title')}
            </Title>
            <Text size="xl" weight="medium" color="gray_400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum.
            </Text>
          </S.Head>
          <S.Body>
            <S.Stat>
              <Title size="l" weight="black" color="gray_100">
                {t('stats.items.0.number')}
              </Title>
              <Text size="xl" weight="medium" color="gray_400">
                {t('stats.items.0.title')}
              </Text>
            </S.Stat>
            <S.Stat>
              <Title size="l" weight="black" color="gray_100">
                {t('stats.items.1.number')}
              </Title>
              <Text size="xl" weight="medium" color="gray_400">
                {t('stats.items.1.title')}
              </Text>
            </S.Stat>
            <S.Stat>
              <Title size="l" weight="black" color="gray_100">
                {t('stats.items.2.number')}
              </Title>
              <Text size="xl" weight="medium" color="gray_400">
                {t('stats.items.2.title')}
              </Text>
            </S.Stat>
          </S.Body>
        </S.Content>
      </Container>
    </S.Stats>
  )
}
