import { useEffect, useState } from 'react'
import { StyledSectionExperience } from './style'
import useScrollPosition from 'jsconfig.json/hooks/scroll'

const SectionExperience = () => {
  const scrollSize = useScrollPosition() + 750

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
    <StyledSectionExperience>
      <div className='background' data-anime='left'>
        <h2 data-anime='left'>Un poco de historia:</h2>
        <div className='container'>
          <div className='one'>
            <h2>2003</h2>
            <div className='dropdown dropdown-one'>
              <div className='triangle-one'></div>
              <div className='dropdown-content-one'>
                <p>
                  Alejandro se forma como psicólogo en 2003 en la Universidad
                  Rafael Landívar. Desde ese año y hasta el 2012 construye las
                  bases de su experiencia como psicólogo clínico, al tiempo que
                  ejerce como psicólogo escolar y docente en diversos colegios y
                  universidades de prestigio de dicho país.
                </p>
              </div>
            </div>
          </div>
          <div className='two'>
            <h2>2012</h2>
            <div className='dropdown dropdown-two'>
              <div className='triangle-two'></div>
              <div className='dropdown-content-two'>
                <p>
                  En el 2012 obtiene la concurrida beca de maestría PEC-PG
                  otorgada por el gobierno de Brasil a través del Consejo
                  Nacional de Ciencia y Tecnología (CNPq) para estudiantes y
                  profesionales destacados de américa latina, Asia y África.{' '}
                </p>
              </div>
            </div>
          </div>
          <div className='thre'>
            <h2>2014</h2>
            <div className='dropdown dropdown-thre'>
              <div className='triangle-thre'></div>
              <div className='dropdown-content-thre'>
                <p>
                  Luego de concluir la maestría en Cognición Humana en Brasil,
                  regresa a Guatemala donde ejerce como psicólogo, docente e
                  investigador, esta vez en la Universidad Rafael Landívar donde
                  coordina el área de investigación en psicología.
                </p>
              </div>
            </div>
          </div>

          <div className='four'>
            <h2>2018</h2>
            <div className='dropdown dropdown-four'>
              <div className='triangle-four'></div>
              <div className='dropdown-content-four'>
                <p>
                  Luego de 4 años como docente, psicólogo clínico e investigador
                  en la ciudad de Guatemala, es nuevamente reconocido con la
                  BECA PEC-PG esta vez para realizar 4 años de formación a nivel
                  de Doctorado en Brasil.{' '}
                </p>
              </div>
            </div>
          </div>

          <div className='five'>
            <h2>2022</h2>
            <div className='dropdown dropdown-five'>
              <div className='triangle-five'></div>
              <div className='dropdown-content-five'>
                <p>
                  En 2022 concluye su formación Doctoral. Desde entonces combina
                  la práctica clínica con consultorías en trabajos de
                  investigación. Actualmente, forma parte de dos equipos de
                  investigación (en PUCRS y UFSC) y actúa como docente invitado
                  en universidades de Brasil, Guatemala y Costa Rica
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledSectionExperience>
  )
}

export default SectionExperience
