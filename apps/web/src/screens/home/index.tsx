import { Header } from '~/components/organisms'
import About from './components/about'
import Hero from './components/hero'

export default function HomeScreen({ analytics }: any) {
  return (
    // TODO: It should has a default layout
    <>
      <Header />
      <Hero />
      <About />
    </>
  )
}
