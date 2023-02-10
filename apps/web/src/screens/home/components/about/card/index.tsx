import Image from 'next/image'
import { BiDesktop } from 'react-icons/bi'
import { Text } from '~/components/atoms'
import * as S from './styles'

interface CardProps {
  iconSrc: string
  title: string
  description: string
}

export default function Card({ iconSrc, title, description }: CardProps) {
  return (
    <S.Card>
      <S.IconBox>
        <Image src={iconSrc} alt={title} width={24} height={24} />
      </S.IconBox>
      <S.Content>
        <Text size="xl" weight="bold" color="gray_100">
          {title}
        </Text>
        <Text size="s" weight="medium" color="gray_400">
          {description}
        </Text>
      </S.Content>
    </S.Card>
  )
}
