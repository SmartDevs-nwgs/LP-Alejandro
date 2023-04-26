import { StyledSectionBenefits } from './style'
import { IoLogoWhatsapp } from 'react-icons/io'

const SectionBenefits = () => {
  return (
    <>
      <StyledSectionBenefits>
        <div className="container">
          <div className="info">
            <h1>Los beneficios de la terapia</h1>
            <p>
              En definitiva, la terapia puede traer innumerables ventajas a la
              vida de una persona, promoviendo el bienestar emocional, mejorando
              las relaciones, desarrollando talentos y habilidades, y
              promoviendo una mayor autoconciencia. Si estás experimentando
              dificultades emocionales o simplemente quieres mejorar tu calidad
              de vida, la terapia puede ser una excelente opción.
            </p>
          </div>
          <div className="button">
            <button>
              Programar una cita <IoLogoWhatsapp className="whatsapp-icon" />
            </button>
          </div>

          <h2>Sobre las sesiones:</h2>
        </div>
      </StyledSectionBenefits>
    </>
  )
}

export default SectionBenefits
