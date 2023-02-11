import Image from 'next/image'
import { BiStar, BiUser } from 'react-icons/bi'
import { Text } from '~/components/atoms'
import * as S from './styles'

export default function Card() {
  return (
    <S.Card>
      <S.Head>
        <S.UserIcon>
          <Image src="/icons/user.svg" width={22} height={23} alt="Joao Guilherme user" />
        </S.UserIcon>
        <S.Content>
          <Text as="h3" size="xl" weight="bold" color="gray_100">
            João Guilherme
          </Text>
          <S.Stars>
            <BiStar size={16} color="#FFA217" />
            <BiStar size={16} color="#FFA217" />
            <BiStar size={16} color="#FFA217" />
            <BiStar size={16} color="#FFA217" />
            <BiStar size={16} color="#FFA217" />
          </S.Stars>
        </S.Content>
      </S.Head>
      <Text size="m" weight="medium" color="gray_300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
        velit interdum, ac aliquet odio mattis.
      </Text>
    </S.Card>
  )
}
