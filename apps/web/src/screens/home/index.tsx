import { NextSeo } from 'next-seo'
import { Header } from '~/components/organisms'
import About from './components/about'
import Feedbacks from './components/feedbacks'
import Hero from './components/hero'
import Portfolio from './components/portfolio'
import Stats from './components/stats'

export default function HomeScreen({}: any) {
  return (
    // TODO: It should has a default layout
    <>
      <NextSeo
        title="Pedro Guilherme - Developer, UI/UX Designer & Business/SEO Strategist"
        description="Boost your online presence with a multi-talented web developer, UI/UX designer, and software developer who can provide top-notch business strategies and SEO improvements."
        canonical="https://www.pedrogui.com/"
        themeColor="#497CFF"
        openGraph={{
          url: 'https://www.pedrogui.com/',
          title: 'Pedro Guilherme - Developer, UI/UX Designer & Business/SEO Strategist',
          description:
            'Boost your online presence with a multi-talented web developer, UI/UX designer, and software developer who can provide top-notch business strategies and SEO improvements.',
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
    </>
  )
}
