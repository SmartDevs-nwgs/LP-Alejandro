import { StyledSectionTop } from './style'
import { BsWhatsapp } from 'react-icons/bs'

const SectionTop = () => {
  return (
    <StyledSectionTop>
      <div className="container">
        <div className="info">
          <h1 className="info-name">ALEJANDRO J. MENA</h1>
          <div className="info-bar">
            <div className="white-bar"></div>
            <h1 className="info-bar-formation">PSICÓLOGO</h1>
          </div>
          <p>
            Transformando vidas a través de la terapia cognitivo-comportamental
            y la psicología basada en evidencias
          </p>
        </div>

        <button>
          Programar una cita <BsWhatsapp className="whatsapp-icon" />
        </button>
      </div>
    </StyledSectionTop>
  )
}

export default SectionTop
