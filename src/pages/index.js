import Head from 'next/head'
import MainContainer from 'jsconfig.json/Components/MainContainer'
import SectionBenefits from 'jsconfig.json/Components/SectionBenefits'
import SectionSession from 'jsconfig.json/Components/SectionSession'
import SectionInfo from 'jsconfig.json/Components/SectionInfo'
import SectionExperience from '../Components/SectionExperience'
import Carousel from 'jsconfig.json/Components/Carousel'
import Footer from 'jsconfig.json/Components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alejandro J. Mena Psicólogo</title>
        <meta
          name='description'
          content='Alejandro J. Mena es un experimentado psicólogo clínico, egresado de la Universidad Rafael Landívar en 2003 y con un Doctorado en Psicología Clínica de la PUCRS en 2022. Su enfoque humanista e integrador combina técnicas terapéuticas para satisfacer las necesidades individuales de sus pacientes.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
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
