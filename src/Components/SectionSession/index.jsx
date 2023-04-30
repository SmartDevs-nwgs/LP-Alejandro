import { StyledSectionSessions } from './style'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { BiBrain } from 'react-icons/bi'
import useWidthPosition from 'jsconfig.json/hooks/useWidth'
import useScrollPosition from 'jsconfig.json/hooks/scroll'
import { useEffect } from 'react'

const SectionSession = () => {
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
    <StyledSectionSessions>
      <div className="title-sessions" data-anime="left">
        <h1>Sobre las sessiones:</h1>
      </div>
      <div className="container">
        <div className="alt">
          <section className="free-section" data-anime="left">
            <BiBrain className="brain-icon" />
            <p>
              La primera cita es <span>GRATUITA</span>. En dicha sesión la
              persona consultante expone los motivos por los cuales busca ayuda
              psicológica, al final de esa primera sesión se define si habrá
              continuidad en el proceso psicoterapéutico de acuerdo con el caso,
              momento y situación analizada en conjunto entre paciente y
              psicólogo.
            </p>
          </section>
          <section className="time-section" data-anime="right">
            <div className="info-time-section">
              <div>
                <p>
                  Las citas son previamente agendadas <span>ONLINE</span>{' '}
                  (Google Meet, Teams o Whatsapp) y tienen una duración de una
                  hora. Dichas citas deberán ser agendadas en el mismo día y
                  horario acordados entre consultante y terapeuta.
                </p>
                <AiOutlineHeart className="heart-icon" />
              </div>
            </div>
            <div className="div-button">
              <button>
                Programar una cita <BsWhatsapp />
              </button>
            </div>
          </section>
        </div>
      </div>
    </StyledSectionSessions>
  )
}

export default SectionSession
