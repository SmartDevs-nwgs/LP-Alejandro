import { StyledSectionSessions } from './style'
import Image from 'next/image'
import Brain from '../../Assets/images/brain.png'
import Heart from '../../Assets/images/Heart.png'
import { BsWhatsapp } from 'react-icons/bs'

const SectionSession = () => {
  return (
    <StyledSectionSessions>
      <h2>Sobre las sesiones:</h2>
      <section className='free-section'>
        <div className='icon'>
          <Image src={Brain} alt='brain' className='brain-icon' />
        </div>

        <p>
          La primera cita es GRATUITA. En dicha sesión la persona consultante
          expone los motivos por los cuales busca ayuda psicológica, al final de
          esa primera sesión se define si habrá continuidad en el proceso
          psicoterapéutico de acuerdo con el caso, momento y situación analizada
          en conjunto entre paciente y psicólogo. 
        </p>
      </section>
      <section className='time-section'>
        <div className='info-time-section'>
          <p>
            Las citas son previamente agendadas ONLINE (Google Meet, Teams o
            Whatsapp) y tienen una duración de una hora. Dichas citas deberán
            ser agendadas en el mismo día y horario acordados entre consultante
            y terapeuta.
          </p>
          <div className='icon'>
            <Image src={Heart} alt='heart' className='heart-icon' />
          </div>
        </div>
        <div className='button'>
          <button>
            Programar una cita <BsWhatsapp className='whatsapp-icon' />
          </button>
        </div>
      </section>
    </StyledSectionSessions>
  )
}

export default SectionSession
