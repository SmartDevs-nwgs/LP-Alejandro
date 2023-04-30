import Head from 'next/head'
import MainContainer from 'jsconfig.json/Components/MainContainer'
import SectionBenefits from 'jsconfig.json/Components/SectionBenefits'
import SectionSession from 'jsconfig.json/Components/SectionSession'
import SectionInfo from 'jsconfig.json/Components/SectionInfo'
import SectionExperience from 'jsconfig.json/Components/SectionExperience'
import Carousel from 'jsconfig.json/Components/Carousel'
import Footer from 'jsconfig.json/Components/Footer'
import Brain from '../Assets/images/BigBrain.ico'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alejandro J. Mena</title>
        <meta name="description" content="Landing Page Alejandro J. Mena" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href={Brain} />
      </Head>

      <MainContainer />
      <SectionBenefits />
      <SectionSession />
      <Carousel />
      <SectionInfo />
      <SectionExperience />
      <Footer />
    </>
  )
}
