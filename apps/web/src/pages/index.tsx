import { GetStaticProps } from 'next'
import HomeScreen from '~/screens/home'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

type Props = {
  // Add custom props here
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
})

export default HomeScreen
