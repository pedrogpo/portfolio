import { Header } from '~/components/organisms'
import About from './components/about'
import Feedbacks from './components/feedbacks'
import Hero from './components/hero'
import Portfolio from './components/portfolio'
import Stats from './components/stats'

export default function HomeScreen({ analytics }: any) {
  return (
    // TODO: It should has a default layout
    <>
      <Header />
      <Hero />
      <About />
      <Stats />
      <Portfolio />
      <Feedbacks />
    </>
  )
}
