import { StyleCarousel } from './style'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import { IoIosBusiness } from 'react-icons/io'
import { FaSchool } from 'react-icons/fa'
import ListCarousel from '../ListCarousel'
import useWidthPosition from 'jsconfig.json/hooks/useWidth'
import useScrollPosition from 'jsconfig.json/hooks/scroll'

const Carousel = () => {
  const [activeCard, setActiveCard] = useState(1)
  const [translateList, setTranslateList] = useState(0)

  const widthSize = useWidthPosition()
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

  useEffect(() => {
    let element = document.getElementsByClassName('card-active')[0]
    if (element) {
      element.classList.remove('card-active')
    }
    if (activeCard === 2) {
      if (widthSize >= 700 && widthSize < 1000) {
        element = document.getElementsByClassName('card-three')[0]
        setTranslateList(element.offsetLeft - element.offsetLeft / 12)
        return
      } else if (widthSize >= 1000 && widthSize < 1300) {
        element = document.getElementsByClassName('card-four')[0]
        setTranslateList(element.offsetLeft - element.offsetLeft / 9)
        return
      } else if (widthSize >= 1300 && widthSize < 1800) {
        element = document.getElementsByClassName('card-four')[0]
        setTranslateList(element.offsetLeft - element.offsetLeft / 6)
        return
      } else if (widthSize >= 1800) {
        element = document.getElementsByClassName('card-four')[0]
        setTranslateList(element.offsetLeft - element.offsetLeft / 4.6)
        return
      }
      element = document.getElementsByClassName('card-two')[0]
      element.classList.add('card-active')

      setTranslateList(element.offsetLeft)

      return
    } else if (activeCard === 3) {
      if (widthSize >= 700 && widthSize < 1000) {
        element = document.getElementsByClassName('card-five')[0]
        setTranslateList(element.offsetLeft - element.offsetLeft / 23)
        return
      } else if (widthSize >= 1000 && widthSize < 1300) {
        element = document.getElementsByClassName('card-seven')[0]
        setTranslateList(element.offsetLeft - element.offsetLeft / 17.5)
        return
      } else if (widthSize >= 1300 && widthSize < 1800) {
        element = document.getElementsByClassName('card-seven')[0]
        setTranslateList(element.offsetLeft - element.offsetLeft / 11)
        return
      } else if (widthSize >= 1800) {
        element = document.getElementsByClassName('card-seven')[0]
        setTranslateList(element.offsetLeft - element.offsetLeft / 8.3)
        return
      }
      element = document.getElementsByClassName('card-three')[0]
      element.classList.add('card-active')

      setTranslateList(element.offsetLeft)
      return
    } else if (activeCard === 4) {
      if (widthSize >= 700 && widthSize < 1000) {
        element = document.getElementsByClassName('card-seven')[0]
        setTranslateList(element.offsetLeft - element.offsetLeft / 34)
        return
      }
      element = document.getElementsByClassName('card-four')[0]
      element.classList.add('card-active')

      setTranslateList(element.offsetLeft)
      return
    } else if (activeCard === 5) {
      element = document.getElementsByClassName('card-five')[0]
      element.classList.add('card-active')

      setTranslateList(element.offsetLeft)
      return
    } else if (activeCard === 6) {
      element = document.getElementsByClassName('card-six')[0]
      element.classList.add('card-active')

      setTranslateList(element.offsetLeft)
      return
    } else if (activeCard === 7) {
      element = document.getElementsByClassName('card-seven')[0]
      element.classList.add('card-active')

      setTranslateList(element.offsetLeft)
      return
    } else if (activeCard === 8) {
      element = document.getElementsByClassName('card-eight')[0]
      element.classList.add('card-active')

      setTranslateList(element.offsetLeft)
      return
    } else if (activeCard === 1) {
      if (widthSize >= 700) {
        setTranslateList(0)
        return
      }

      element = document.getElementsByClassName('card-one')[0]
      setTranslateList(element.offsetLeft)
      return
    }
  })

  return (
    <StyleCarousel data-anime='left'>
      <div className='title-carousel' data-anime='up'>
        <h2>Demandas más frecuentes:</h2>
      </div>
      <div className='right-arrow'>
        <BsArrowRightCircle
          onClick={(e) => {
            if (widthSize < 700) {
              setActiveCard(activeCard < 8 ? activeCard + 1 : activeCard - 7)
            } else if (widthSize >= 700 && widthSize < 1000) {
              setActiveCard(activeCard < 4 ? activeCard + 1 : activeCard - 3)
            } else if (widthSize >= 1000) {
              setActiveCard(activeCard < 3 ? activeCard + 1 : activeCard - 2)
            }
          }}
        />
      </div>
      <div className='left-arrow'>
        <BsArrowLeftCircle
          onClick={(e) => {
            if (widthSize < 700) {
              setActiveCard(activeCard > 1 ? activeCard - 1 : activeCard + 7)
            } else if (widthSize >= 700 && widthSize < 1000) {
              setActiveCard(activeCard > 1 ? activeCard - 1 : activeCard + 3)
            } else if (widthSize >= 1000) {
              setActiveCard(activeCard > 1 ? activeCard - 1 : activeCard + 2)
            }
          }}
        />
      </div>
      <div className='wrapper' data-anime='left'>
        <div
          className='list-cards'
          style={{
            transform: `translateX(-${translateList}px)`,
            transitionDuration: '500ms',
            transitionDelay: '0ms',
          }}
        >
          <ListCarousel widthSize={widthSize} />
        </div>
      </div>
      <div className='progression-bar' data-anime='up'>
        <div className='bar'>
          {widthSize < 700 ? (
            <>
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
            </>
          ) : widthSize >= 1000 ? (
            <>
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
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
      <div className='consultation'>
        <div className='content-consultation' data-anime='up'>
          <div className='icons'>
            <IoIosBusiness />
            <FaSchool />
          </div>
          <h2>
            Consultoría en Investigación para trabajos de graduación y
            consultoria para empresas, organizaciones e instituciones educativas
          </h2>
          <div className='link'>
            <a
              href='https://api.whatsapp.com/send?phone=554888181012&text=Hola,%20v%C3%AD%20el%20anuncio%20de%20primera%20consulta%20gr%C3%A1tis.%20Me%20gustar%C3%ADa%20saber%C2%A0c%C3%B3mo%C2%A0funciona.'
              target='_blank'
              rel='noreferrer'
            >
              Más información...
            </a>
          </div>
        </div>
      </div>
    </StyleCarousel>
  )
}
export default Carousel
