import * as S from './styles'
import { Navbar, Container, Nav } from 'react-bootstrap'

import Image from 'next/image'
import { Button, Text, Title } from '~/components/atoms'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { BiUser } from 'react-icons/bi'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isHomePage, setHomePage] = useState(false)

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
            <S.LanguageSelector className="mb-4 mb-lg-0 mt-lg-0 mt-4">
              <Text size="m" weight="medium" color="gray_100">
                PT/BR
              </Text>
              <Image src="/flags/br.svg" width={40} height={26} alt="Brasil Flag" />
            </S.LanguageSelector>
            <Nav className="gap-3 align-items-lg-center align-items-start">
              <Link href="#product" className="nav-link active" scroll={false}>
                Home
              </Link>
              <Link href="#features" className="nav-link" scroll={false}>
                Portfolio
              </Link>
              <Link href="#feedback-anchor" className="nav-link" scroll={false}>
                Services
              </Link>
              <Link href="#showcases-anchor" className="nav-link" scroll={false}>
                About me
              </Link>
            </Nav>
            <div className="d-flex flex-wrap gap-3 mt-md-0 mt-3">
              <Button boxShadow>Get in touch</Button>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </S.Header>
  )
}
