import Image from 'next/image'
import { BiStar, BiUser } from 'react-icons/bi'
import { Text } from '~/components/atoms'
import * as S from './styles'

interface CardProps {
  name: string
  stars: number
  description: string
}

export default function Card({ name, stars, description }: CardProps) {
  return (
    <S.Card>
      <S.Head>
        <S.UserIcon>
          <Image src="/icons/user.svg" width={22} height={23} alt={`${name} Feedback`} />
        </S.UserIcon>
        <S.Content>
          <Text as="h3" size="xl" weight="bold" color="gray_100">
            {name}
          </Text>
          <S.Stars>
            {[...Array(stars)].map((_, index) => (
              <BiStar key={index} size={16} color="#FFA217" />
            ))}
            {[...Array(5 - stars)].map((_, index) => (
              <BiStar key={index} size={16} color="#5C6770" />
            ))}
          </S.Stars>
        </S.Content>
      </S.Head>
      <Text size="m" weight="medium" color="gray_300">
        {description}
      </Text>
    </S.Card>
  )
}
