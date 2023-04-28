import { StyledSectionBenefits } from './style'
import { IoLogoWhatsapp } from 'react-icons/io'
import Brain from '../../Assets/images/BigBrain.png'
import Image from 'next/image'

const SectionBenefits = () => {
  return (
    <StyledSectionBenefits>
      <div className="container">
        <div className="info">
          <h1>Los beneficios de la terapia</h1>
          <p>
            En definitiva, la terapia puede traer innumerables ventajas a la
            vida de una persona, promoviendo el bienestar emocional, mejorando
            las relaciones, desarrollando talentos y habilidades, y promoviendo
            una mayor autoconciencia. Si estás experimentando dificultades
            emocionales o simplemente quieres mejorar tu calidad de vida, la
            terapia puede ser una excelente opción.
          </p>
        </div>
        <div className="button">
          <button>
            Programar una cita <IoLogoWhatsapp className="whatsapp-icon" />
          </button>
        </div>
      </div>

      <Image src={Brain} width={540} height={540} className="brain" />
    </StyledSectionBenefits>
  )
}

export default SectionBenefits
