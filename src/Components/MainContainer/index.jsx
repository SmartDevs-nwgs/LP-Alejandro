import useWidthPosition from 'jsconfig.json/hooks/useWidth'
import { StyledMainContainer } from './style'
import { BsWhatsapp } from 'react-icons/bs'

const MainContainer = () => {
  const widthSize = useWidthPosition()
  return (
    <StyledMainContainer>
      {widthSize < 600 ? (
        <div className='container-main'>
          <div className='title'>
            <h1 className='name'>Alejandro J. Mena</h1>
            <div className='title-training'>
              <div className='white-bar'></div>
              <h1>Psicólogo</h1>
            </div>
            <div className='main-info'>
              <h2>
                Transformando vidas a través de la terapia
                cognitivo-comportamental y la psicología basada en evidencias
              </h2>
            </div>

            <div className='div-button'>
              <button
                onClick={() => {
                  window?.open(
                    'https://api.whatsapp.com/send?phone=554888181012&text=Hola,%20v%C3%AD%20el%20anuncio%20de%20primera%20consulta%20gr%C3%A1tis.%20Me%20gustar%C3%ADa%20saber%C2%A0c%C3%B3mo%C2%A0funciona.'
                  )
                }}
              >
                Programar una cita <BsWhatsapp />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className='container-main'>
          <div className='title'>
            <h1 className='name'>Alejandro J. Mena</h1>
            <div className='title-training'>
              <div className='white-bar'></div>
              <h1>Psicólogo</h1>
            </div>
            <div className='main-info'>
              <h2>
                Transformando vidas a través de la terapia
                cognitivo-comportamental y la psicología basada en evidencias
              </h2>
            </div>
          </div>
          <div className='div-button'>
            <button
              onClick={() => {
                window?.open('https://wa.me/4888181012')
              }}
            >
              Programar una cita <BsWhatsapp />
            </button>
          </div>
        </div>
      )}
    </StyledMainContainer>
  )
}

export default MainContainer
