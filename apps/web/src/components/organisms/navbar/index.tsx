import * as S from './styles'
import { Navbar, Container, Nav } from 'react-bootstrap'

import Image from 'next/image'
import { Button, Text, Title } from '~/components/atoms'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isHomePage, setHomePage] = useState(false)

  const { t, i18n } = useTranslation('common')

  const router = useRouter()

  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }

  const changeTo = router.locale === 'en' ? 'pt' : 'en'

  useEffect(() => {
    setHomePage(window.location.pathname === '/')
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <S.Header className={scrolled ? '--scrolled' : ''}>
      <Container>
        <Navbar
          bg="transparent"
          expand="lg"
          variant="dark"
          className="justify-content-between"
        >
          <Link href={isHomePage ? '#' : '/'} scroll={false}>
            <Image src="/logo.svg" width={40} height={50} alt="Logo" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end gap-4">
            <Link href="/" locale={changeTo}>
              <S.LanguageSelector className="mb-4 mb-lg-0 mt-lg-0 mt-4">
                {i18n.language == 'en' ? (
                  <>
                    <Text size="m" weight="medium" color="gray_100">
                      EN/US
                    </Text>
                    <Image src="/flags/usa.svg" width={40} height={26} alt="USA Flag" />
                  </>
                ) : (
                  <>
                    <Text size="m" weight="medium" color="gray_100">
                      PT/BR
                    </Text>
                    <Image src="/flags/br.svg" width={40} height={26} alt="Brasil Flag" />
                  </>
                )}
              </S.LanguageSelector>
            </Link>
            <Nav className="gap-3 align-items-lg-center align-items-start">
              <Link href="#hero" className="nav-link active" scroll={false}>
                {t('navbar.links.0.name')}
              </Link>
              <Link href="#services" className="nav-link" scroll={false}>
                {t('navbar.links.1.name')}
              </Link>
              <Link href="#portfolio" className="nav-link" scroll={false}>
                {t('navbar.links.2.name')}
              </Link>
              <Link href="#feedbacks" className="nav-link" scroll={false}>
                {t('navbar.links.3.name')}
              </Link>
            </Nav>
            <div className="d-flex flex-wrap gap-3 mt-md-0 mt-3">
              <Button boxShadow>{t('navbar.button')}</Button>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </S.Header>
  )
}
