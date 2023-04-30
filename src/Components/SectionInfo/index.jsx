import { StyledSectionInfo } from './style'
import useScrollPosition from 'jsconfig.json/hooks/scroll'
import profile from '../../Assets/images/profile.png'
import Image from 'next/image'
import { useEffect } from 'react'

const SectionInfo = () => {
  const scrollSize = useScrollPosition() + 600

  useEffect(() => {
    let animatedElements = document.querySelectorAll('[data-anime]')

    animatedElements.forEach((element) => {
      if (scrollSize > element.offsetTop) {
        element.classList.add('animate')
      } else {
        element.classList.remove('animate')
      }
    })
  })
  return (
    <StyledSectionInfo>
      <div className='container' data-anime='right'>
        <div className='info'>
          <Image
            crossOrigin=''
            src={profile}
            alt='Alejandro Mena'
            className='profile'
          />
          <div className='info-name'>
            <h1>Alejandro J. Mena</h1>
            <h2>Psicólogo clínico</h2>
          </div>
        </div>
        <ul data-anime='left'>
          <li>
            <span>●</span> Doctorado en psicología clínica PUCRS, 2022 (Brasil)
          </li>

          <li>
            <span>●</span> Maestría en psicología, área de concentración
            Cognición Humana PUCRS , 2014 (Brasil)
          </li>
          <li>
            <span>●</span> Graduado como psicólogo clínico en la Universidad
            Rafael Landívar, 2003 (Guatemala)
          </li>
          <li>
            <span>●</span> Especialización en Terapia Cognitivo Comportamental
            PUCPR, 2023 (Brasil)
          </li>
        </ul>
        <p data-anime='left'>
          Cuenta con 20 años de experiencia en el campo del bienestar
          psicológico Ha publicado diversos artículos científicos en revistas
          indexadas de Estados Unidos, España, Chile, Brasil y Guatemala.
        </p>
      </div>
    </StyledSectionInfo>
  )
}

export default SectionInfo
