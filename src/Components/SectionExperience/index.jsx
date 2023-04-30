import { useEffect, useState } from 'react'
import { StyledSectionExperience } from './style'
import useWidthPosition from 'jsconfig.json/hooks/useWidth'
import useScrollPosition from 'jsconfig.json/hooks/scroll'

const SectionExperience = () => {
  const screenWidth = useWidthPosition()
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
    <StyledSectionExperience>
      <div className="background">
        <h2 data-anime="left">Un poco de historia:</h2>
        <div className="container">
          <div className="one" data-anime="left">
            <h2>2003</h2>
            <div className="dropdown dropdown-one">
              <div className="triangle-one"></div>
              <div className="dropdown-content-one">
                <p>
                  Alejandro se forma como psicólogo en 2003 en la Universidad
                  Rafael Landívar, Universidad Jesuita de la Ciudad de
                  Guatemala. En dicho año y hasta el 2012 construye las bases de
                  su experiencia como profesional de la salud mental en el
                  contexto clínico al tiempo que ejerce como psicólogo escolar y
                  docente en diversas instituciones educativas de prestigio en
                  dicho país (Colegio Americano del Sur, Colegio Internacional
                  Montessori y Universidad Rafael Landívar).
                </p>
              </div>
            </div>
          </div>
          <div className="two" data-anime="left">
            <h2>2012</h2>
            <div className="dropdown dropdown-two">
              <div className="triangle-two"></div>
              <div className="dropdown-content-two">
                <p>
                  En el 2012 obtiene la concurrida beca de maestría PEC-PG
                  otorgada por el gobierno de Brasil a través del Consejo
                  Nacional de Ciencia y Tecnología (CNPq) para estudiantes y
                  profesionales destacados de américa latina, Asia y África.{' '}
                </p>
              </div>
            </div>
          </div>
          {screenWidth < 600 ? (
            <div className="thre" data-anime="left">
              <h2>2014</h2>
              <div className="dropdown dropdown-thre">
                <div className="triangle-thre"></div>
                <div className="dropdown-content-thre">
                  <p>
                    En 2014, luego de obtener la maestría en Cognición Humana en
                    la Pontificia Universidade Católica do Rio Grande do Sul en
                    Porto Alegre, Brasil regresa a Guatemala donde continúa su
                    crecimiento como psicólogo e investigador, está vez en la
                    Universidad Rafael Landívar como docente y coordinador de
                    investigación en psicología.{' '}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="thre" data-anime="up">
              <h2>2014</h2>
              <div className="dropdown dropdown-thre">
                <div className="triangle-thre"></div>
                <div className="dropdown-content-thre">
                  <p>
                    En 2014, luego de obtener la maestría en Cognición Humana en
                    la Pontificia Universidade Católica do Rio Grande do Sul en
                    Porto Alegre, Brasil regresa a Guatemala donde continúa su
                    crecimiento como psicólogo e investigador, está vez en la
                    Universidad Rafael Landívar como docente y coordinador de
                    investigación en psicología.{' '}
                  </p>
                </div>
              </div>
            </div>
          )}
          {screenWidth < 600 ? (
            <div className="four" data-anime="left">
              <h2>2018</h2>
              <div className="dropdown dropdown-four">
                <div className="triangle-four"></div>
                <div className="dropdown-content-four">
                  <p>
                    Luego de 4 años como docente, clínico e investigador en la
                    ciudad de Guatemala a es nuevamente reconocido con la BECA
                    PEC-PG esta vez para realizar 4 años de formación a nivel de
                    Doctorado en Brasil.{' '}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="four" data-anime="right">
              <h2>2018</h2>
              <div className="dropdown dropdown-four">
                <div className="triangle-four"></div>
                <div className="dropdown-content-four">
                  <p>
                    Luego de 4 años como docente, clínico e investigador en la
                    ciudad de Guatemala a es nuevamente reconocido con la BECA
                    PEC-PG esta vez para realizar 4 años de formación a nivel de
                    Doctorado en Brasil.{' '}
                  </p>
                </div>
              </div>
            </div>
          )}
          {screenWidth < 600 ? (
            <div className="five" data-anime="left">
              <h2>2022</h2>
              <div className="dropdown dropdown-five">
                <div className="triangle-five"></div>
                <div className="dropdown-content-five">
                  <p>
                    A partir de entonces combina la práctica clínica con
                    consultorías en trabajos de investigación, forma parte del
                    grupo de pesquisa Avaliacao e intervencao no ciclo vital de
                    la PUCRS y como docente invitado en universidades de Brasil,
                    Guatemala y Costa Rica.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="five" data-anime="right">
              <h2>2022</h2>
              <div className="dropdown dropdown-five">
                <div className="triangle-five"></div>
                <div className="dropdown-content-five">
                  <p>
                    A partir de entonces combina la práctica clínica con
                    consultorías en trabajos de investigación, forma parte del
                    grupo de pesquisa Avaliacao e intervencao no ciclo vital de
                    la PUCRS y como docente invitado en universidades de Brasil,
                    Guatemala y Costa Rica.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </StyledSectionExperience>
  )
}

export default SectionExperience
