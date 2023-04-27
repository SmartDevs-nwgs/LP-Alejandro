import { StyledSectionInfo } from './style'
import profile from '../../Assets/images/profile.png'
import Image from 'next/image'

const SectionInfo = () => {
  return (
    <StyledSectionInfo>
      <div className='container'>
        <div className='info'>
          <Image
            crossOrigin=''
            src={profile}
            alt='profile'
            className='profile'
          />
          <div className='info-name'>
            <h1>Alejandro J. Mena</h1>
            <h2>Psicólogo clínico</h2>
          </div>
        </div>
        <ul>
          <li>
            Graduado como psicólogo clínico en la Universidad Rafael Landívar,
            2003 (Guatemala)
          </li>
          <li>
            Maestría en psicología, área de concentración Cognición Humana PUCRS
            , 2014 (Brasil)
          </li>
          <li>Doctorado en psicología clínica PUCRS, 2022 (Brasil)</li>
          <li>
            Especialización en Terapia Cognitivo Comportamental PUCPR, 2023
            (Brasil)
          </li>
        </ul>
        <p>
          Cuenta con 20 años de experiencia en el campo del bienestar
          psicológico Ha publicado diversos artículos científicos en revistas
          indexadas de Estados Unidos, España, Chile, Brasil y Guatemala.
        </p>
        <h2>Un poco de historia:</h2>
      </div>
    </StyledSectionInfo>
  )
}

export default SectionInfo
