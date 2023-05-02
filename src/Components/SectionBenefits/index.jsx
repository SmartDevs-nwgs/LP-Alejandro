import { StyledSectionBenefits } from './style'
import useWidthPosition from 'jsconfig.json/hooks/useWidth'
import useScrollPosition from 'jsconfig.json/hooks/scroll'
import { useEffect } from 'react'

const SectionBenefits = () => {
  const screenWidth = useWidthPosition()
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
    <StyledSectionBenefits>
      <div className='container-benefits'>
        <div className='info'>
          <div className='post-one'>
            <div className='post-one-info'>
              <h1>Los beneficios de la terapia</h1>
              <p>
                La psicoterapia puede traer innumerables ventajas a la vida de
                una persona, promoviendo el bienestar psicológico, mejorando las
                relaciones, desarrollando talentos y promoviendo una mayor
                consciencia de las propias conductas. Si estás experimentando
                dificultades emocionales, en tus relaciones o simplemente
                quieres mejorar tu calidad de vida, la psicoterapia es con
                certeza una excelente opción.
              </p>
            </div>
            {screenWidth >= 900 ? <div className='image'></div> : <></>}
          </div>
          <div className='post-two'>
            <div className='post-two-info' data-anime='up'>
              <h1>Sobre el modelo psicoterapéutico</h1>
              <p>
                La psicología basada en evidencias tiene como pilares
                fundamentales la investigación empírica y los datos
                rigurosamente obtenidos, para ello el psicólogo debe poseer
                sólida y actualizada formación en métodos cualitativos y
                cuantitativos de investigación. De esa manera el terapéuta podrá
                tomar decisiones informadas sobre cómo abordar a sus pacientes o
                consultantes y a evaluar la efectividad de sus intervenciones.
                La psicología cognitivo-comportamental es una de las corrientes
                terapéuticas que más se benefician de la psicología basada en
                evidencias, ya que se apoya en estudios empíricos y tiene una
                gran cantidad de investigación respaldando su eficacia en el
                tratamiento de diversas condiciones psicológicas.
              </p>
            </div>
            <div className='image'></div>
          </div>
        </div>
      </div>
    </StyledSectionBenefits>
  )
}

export default SectionBenefits
