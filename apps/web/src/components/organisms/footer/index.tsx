import Image from 'next/image'
import Link from 'next/link'
import { Container } from 'react-bootstrap'
import { BiHeart } from 'react-icons/bi'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import { Text } from '~/components/atoms'
import * as S from './styles'

export default function Footer() {
  return (
    <S.Footer>
      <Container>
        <S.Content>
          <S.ContentLeft>
            {/* logo */}
            <Image src="/logo.svg" alt="Logo" width={40} height={40} quality={45} />
            <Text size="l" weight="medium" color="gray_400">
              © Todos os Diretos Reservados - Pedro Guilherme <br /> Made by me with{' '}
              <BiHeart size={18} />
            </Text>
          </S.ContentLeft>
          <S.ContentRight>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/pedrogpo/"
              rel="noreferrer"
            >
              <FaLinkedin size={28} />
            </a>
            <a target="_blank" href="https://github.com/pedrogpo" rel="noreferrer">
              <FaGithubSquare size={28} />
            </a>
          </S.ContentRight>
        </S.Content>
      </Container>
    </S.Footer>
  )
}
