import useWidthPosition from 'jsconfig.json/hooks/useWidth'
import { BsWhatsapp } from 'react-icons/bs'
import { StyledMainContainer } from './style'

const MainContainer = () => {
  const widthSize = useWidthPosition()
  return (
    <StyledMainContainer>
      {widthSize < 600 ? (
        <div className="container-main">
          <div className="title">
            <h1 className="name">Alejandro J. Mena</h1>
            <div className="title-training">
              <div className="white-bar"></div>
              <h1>Psicólogo</h1>
            </div>
            <div className="main-info">
              <h2>
                Transformando vidas a través de la terapia
                cognitivo-comportamental y la psicología basada en evidencias
              </h2>
            </div>
            <div className="div-button">
              <button
                onClick={() => {
                  window.location.href = 'https://wa.me/4888181012'
                }}
              >
                Programar una cita
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-main">
          <div className="title">
            <h1 className="name">Alejandro J. Mena</h1>
            <div className="title-training">
              <div className="white-bar"></div>
              <h1>Psicólogo</h1>
            </div>
            <div className="main-info">
              <h2>
                Transformando vidas a través de la terapia
                cognitivo-comportamental y la psicología basada en evidencias
              </h2>
            </div>
          </div>
          <div className="div-button">
            <button
              onClick={() => {
                window.location.href = 'https://wa.me/4888181012'
              }}
            >
              Programar una cita <BsWhatsapp className="whatsapp-icon" />
            </button>
          </div>
        </div>
      )}
    </StyledMainContainer>
  )
}

export default MainContainer
