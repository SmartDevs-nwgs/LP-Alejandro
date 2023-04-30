import { StyledSectionSessions } from './style'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { BiBrain } from 'react-icons/bi'
import useWidthPosition from 'jsconfig.json/hooks/useWidth'

const SectionSession = () => {
  return (
    <StyledSectionSessions>
      <div className='title-sessions'>
        <h1>Sobre las sessiones:</h1>
      </div>
      <div className='container'>
        <div className='alt'>
          <section className='free-section'>
            <BiBrain className='brain-icon' />
            <p>
              La primera cita es <span>GRATUITA</span>. En dicha sesión la
              persona consultante expone los motivos por los cuales busca ayuda
              psicológica, al final de esa primera sesión se define si habrá
              continuidad en el proceso psicoterapéutico de acuerdo con el caso,
              momento y situación analizada en conjunto entre paciente y
              psicólogo.
            </p>
          </section>
          <section className='time-section'>
            <div className='info-time-section'>
              <div>
                <p>
                  Las citas son previamente agendadas <span>ONLINE</span>{' '}
                  (Google Meet, Teams o Whatsapp) y tienen una duración de una
                  hora. Dichas citas deberán ser agendadas en el mismo día y
                  horario acordados entre consultante y terapeuta.
                </p>
                <AiOutlineHeart className='heart-icon' />
              </div>
            </div>
            <div className="button">
              <button
                onClick={() => {
                  window.location.href = 'https://wa.me/4888181012'
                }}
              >
                Programar una cita <BsWhatsapp className="whatsapp-icon" />
              </button>
            </div>
          </section>
        </div>
      </div>
    </StyledSectionSessions>
  )
}

export default SectionSession
