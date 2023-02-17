import Image from 'next/image'
import Link from 'next/link'
import { Container } from 'react-bootstrap'
import { BiHeart } from 'react-icons/bi'
import { FaLinkedin, FaGithubSquare, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { Text } from '~/components/atoms'
import * as S from './styles'
import { useTranslation } from 'next-i18next'

export default function Footer() {
  const { t, i18n } = useTranslation('common')

  return (
    <S.Footer>
      <Container>
        <S.Content>
          <S.ContentLeft>
            {/* logo */}
            <Image src="/logo.svg" alt="Logo" width={40} height={40} quality={45} />
            <Text size="l" weight="medium" color="gray_400">
              {t('footer.text_one')}
              <br />
              {t('footer.text_two')} <BiHeart size={18} />
            </Text>
          </S.ContentLeft>
          <S.ContentRight>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/pedrogpo/"
              rel="noreferrer"
            >
              <FaLinkedinIn size={28} />
            </a>
            <a target="_blank" href="https://github.com/pedrogpo" rel="noreferrer">
              <FaGithub size={28} />
            </a>
          </S.ContentRight>
        </S.Content>
      </Container>
    </S.Footer>
  )
}
