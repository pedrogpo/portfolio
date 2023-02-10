import { Container } from 'react-bootstrap'
import { Text, Title } from '~/components/atoms'
import * as S from './styles'

export default function Stats() {
  return (
    <S.Stats>
      <Container>
        <S.Content>
          <S.Head>
            <Text size="xl" weight="medium" color="gray_400">
              Lorem ipsum
            </Text>
            <Title size="s" weight="bold" color="gray_100">
              Check out some of my stats.
            </Title>
            <Text size="xl" weight="medium" color="gray_400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum.
            </Text>
          </S.Head>
          <S.Body>
            <S.Stat>
              <Title size="l" weight="black" color="gray_100">
                5+
              </Title>
              <Text size="xl" weight="medium" color="gray_400">
                Years of experience
              </Text>
            </S.Stat>
            <S.Stat>
              <Title size="l" weight="black" color="gray_100">
                5000+
              </Title>
              <Text size="xl" weight="medium" color="gray_400">
                Code lines
              </Text>
            </S.Stat>
            <S.Stat>
              <Title size="l" weight="black" color="gray_100">
                5+
              </Title>
              <Text size="xl" weight="medium" color="gray_400">
                Years of experience
              </Text>
            </S.Stat>
          </S.Body>
        </S.Content>
      </Container>
    </S.Stats>
  )
}
