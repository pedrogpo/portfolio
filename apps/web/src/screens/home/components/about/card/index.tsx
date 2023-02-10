import Image from 'next/image'
import { BiDesktop } from 'react-icons/bi'
import { Text } from '~/components/atoms'
import * as S from './styles'

export default function Card() {
  return (
    <S.Card>
      <S.IconBox>
        <Image src="/icons/web.svg" alt="UI/UX Designer" width={24} height={24} />
      </S.IconBox>
      <S.Content>
        <Text size="xl" weight="bold" color="gray_100">
          Web developer
        </Text>
        <Text size="s" weight="medium" color="gray_400">
          I can turn your ideas and designs into reality through the development of web
          and mobile applications.
        </Text>
      </S.Content>
    </S.Card>
  )
}
