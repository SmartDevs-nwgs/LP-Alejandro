import Head from 'next/head'
import SectionTop from 'jsconfig.json/Components/SectionTop'
import SectionBenefits from 'jsconfig.json/Components/SectionBenefits'
import SectionSession from 'jsconfig.json/Components/SectionSession'
import SectionInfo from 'jsconfig.json/Components/SectionInfo'
import SectionExperience from 'jsconfig.json/Components/SectionExperience'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SectionTop />
      <SectionBenefits />
      <SectionSession />
      <SectionInfo />
      <SectionExperience />
    </>
  )
}
