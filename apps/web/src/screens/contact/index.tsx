import { Header } from '~/components/organisms'
import { useTranslation } from 'next-i18next'
import Footer from '~/components/organisms/footer'
import Contact from './components/main'

export default function ContactScreen({}: any) {
  const { t } = useTranslation('common')
  return (
    // TODO: It should has a default layout
    <>
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  )
}
