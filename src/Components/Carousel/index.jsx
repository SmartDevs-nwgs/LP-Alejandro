import { StyleCarousel } from './style'
import { BsCloudRainFill } from 'react-icons/bs'
import { SiSpringCreators, SiHeadspace } from 'react-icons/si'
import { MdNoDrinks } from 'react-icons/md'
import { FaUsers } from 'react-icons/fa'
import { GiPunch } from 'react-icons/gi'
import {
  BsFillHeartFill,
  BsFillHeartbreakFill,
  BsArrowLeftCircle,
  BsArrowRightCircle,
} from 'react-icons/bs'
import { useEffect, useState } from 'react'
import { IoIosBusiness } from 'react-icons/io'
import { FaSchool } from 'react-icons/fa'

const Carousel = () => {
  const [activeCard, setActiveCard] = useState(1)
  const [translate, setTranslate] = useState(0)

  useEffect(() => {
    let element = null
    if (activeCard === 2) {
      element = document.getElementsByClassName('card-two')[0]
      setTranslate(element.offsetLeft)
      return
    } else if (activeCard === 3) {
      element = document.getElementsByClassName('card-three')[0]
      setTranslate(element.offsetLeft)
      return
    } else if (activeCard === 4) {
      element = document.getElementsByClassName('card-four')[0]
      setTranslate(element.offsetLeft)
      return
    } else if (activeCard === 5) {
      element = document.getElementsByClassName('card-five')[0]
      setTranslate(element.offsetLeft)
      return
    } else if (activeCard === 6) {
      element = document.getElementsByClassName('card-six')[0]
      setTranslate(element.offsetLeft)
      return
    } else if (activeCard === 7) {
      element = document.getElementsByClassName('card-seven')[0]
      setTranslate(element.offsetLeft)
      return
    } else if (activeCard === 8) {
      element = document.getElementsByClassName('card-eight')[0]
      setTranslate(element.offsetLeft)
      return
    } else {
      element = document.getElementsByClassName('card-one')[0]
      setTranslate(element.offsetLeft)
      return
    }
  })

  return (
    <StyleCarousel>
      <div className='title-carousel'>
        <h2>Demandas más frecuentes:</h2>
      </div>
      <div className='right-arrow'>
        <BsArrowRightCircle
          onClick={(e) => {
            setActiveCard(activeCard < 8 ? activeCard + 1 : activeCard - 7)
          }}
        />
      </div>
      <div className='left-arrow'>
        <BsArrowLeftCircle
          onClick={(e) => {
            setActiveCard(activeCard > 1 ? activeCard - 1 : activeCard + 7)
          }}
        />
      </div>
      <div className='wrapper'>
        <div
          className='list-cards'
          style={{
            transform: `translateX(-${translate}px)`,
            transitionDuration: '500ms',
            transitionDelay: '0ms',
          }}
        >
          <div className='card-one card'>
            <div>
              <BsCloudRainFill className='cloud' />
              <h2>Depresión</h2>
            </div>
          </div>
          <div className='card-two card'>
            <div>
              <SiSpringCreators className='anxiety' />
              <h2>Ansiedad</h2>
            </div>
          </div>
          <div className='card-three card'>
            <div>
              <SiHeadspace className='stress' />
              <h2>Estrés Crónico</h2>
            </div>
          </div>
          <div className='card-four card'>
            <div>
              <MdNoDrinks className='no-drink' />
              <h2>Trastorno Obsesivo-Compulsivo</h2>
            </div>
          </div>
          <div className='card-five card'>
            <div>
              <FaUsers className='social' />
              <h2>Habilidades Sociales</h2>
            </div>
          </div>
          <div className='card-six card'>
            <div>
              <GiPunch className='punch' />
              <h2>Agresividad</h2>
            </div>
          </div>
          <div className='card-seven card'>
            <div>
              <BsFillHeartFill className='heart' />
              <h2>Autoestima</h2>
            </div>
          </div>
          <div className='card-eight card'>
            <div>
              <BsFillHeartbreakFill className='broken-heart' />
              <h2>Relaciones afectivas</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='progression-bar'>
        <div className='bar'>
          <div
            className={activeCard === 1 ? 'active' : null}
            onClick={(e) => {
              setActiveCard(1)
            }}
          ></div>
          <div
            className={activeCard === 2 ? 'active' : null}
            onClick={(e) => {
              setActiveCard(2)
            }}
          ></div>
          <div
            className={activeCard === 3 ? 'active' : null}
            onClick={(e) => {
              setActiveCard(3)
            }}
          ></div>
          <div
            className={activeCard === 4 ? 'active' : null}
            onClick={(e) => {
              setActiveCard(4)
            }}
          ></div>
          <div
            className={activeCard === 5 ? 'active' : null}
            onClick={(e) => {
              setActiveCard(5)
            }}
          ></div>
          <div
            className={activeCard === 6 ? 'active' : null}
            onClick={(e) => {
              setActiveCard(6)
            }}
          ></div>
          <div
            className={activeCard === 7 ? 'active' : null}
            onClick={(e) => {
              setActiveCard(7)
            }}
          ></div>
          <div
            className={activeCard === 8 ? 'active' : null}
            onClick={(e) => {
              setActiveCard(8)
            }}
          ></div>
        </div>
      </div>
      <div className='consultation'>
        <div className='content-consultation'>
          <div className='icons'>
            <IoIosBusiness />
            <FaSchool />
          </div>
          <h2>
            Consultoría en Investigación para trabajos de graduación y
            consultoria para empresas, organizaciones e instituciones educativas
          </h2>
          <button>Sepa mas...</button>
        </div>
      </div>
    </StyleCarousel>
  )
}
export default Carousel
