import { NextSeo } from 'next-seo'
import { Header } from '~/components/organisms'
import About from './components/about'
import Contact from './components/contact'
import Feedbacks from './components/feedbacks'
import Hero from './components/hero'
import Portfolio from './components/portfolio'
import Stats from './components/stats'
import { useTranslation } from 'next-i18next'
import Footer from '~/components/organisms/footer'

export default function HomeScreen({}: any) {
  const seo_fallback = {
    title:
      'Pedro Guilherme - Desenvolvedor, Designer UI/UX & Estrategista de Business/SEO',
    description:
      'Aumente sua presença online com um desenvolvedor web multi-talentoso, designer de UI/UX e desenvolvedor de software que pode fornecer estratégias de negócios de primeira linha e também melhorias de SEO.',
    canonical: 'https://www.pedrogui.com/',
  }

  const { t } = useTranslation('common')
  return (
    // TODO: It should has a default layout
    <>
      <NextSeo
        title={t('seo.title') || seo_fallback.title}
        description={t('seo.description') || seo_fallback.title}
        canonical={t('seo.canonical') || seo_fallback.title}
        themeColor="#497CFF"
        openGraph={{
          url: t('seo.canonical') || seo_fallback.title,
          title: t('seo.title') || seo_fallback.title,
          description: t('seo.description') || seo_fallback.title,
          images: [
            {
              url: 'https://www.pedrogui.com/me.png',
              width: 420,
              height: 420,
              alt: 'Pedro Guilherme - Website',
              type: 'image/jpeg',
            },
          ],
          siteName: 'Pedro Guilherme - Portfolio',
        }}
      />
      <Header />
      <Hero />
      <About />
      <Stats />
      <Portfolio />
      <Feedbacks />
      <Contact />
      <Footer />
    </>
  )
}
