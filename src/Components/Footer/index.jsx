import { StyledFooter } from './style'
import { FaInstagram } from 'react-icons/fa'
import useWidthPosition from 'jsconfig.json/hooks/useWidth'
import tiktok from '../../Assets/images/tiktok.png'
import Image from 'next/image'

const Footer = () => {
  const screenWidth = useWidthPosition()

  return (
    <StyledFooter>
      <div className="container">
        <div className="logo">
          <h1 className="info-name">ALEJANDRO J. MENA</h1>
          <div className="info-bar">
            <div className="white-bar"></div>
            <h1 className="info-bar-formation">PSICÓLOGO</h1>
          </div>
        </div>
        <div className="social-midia">
          <h2>
            Acompañe de cerca mi trabajo a través de las siguientes redes
            sociales:
          </h2>
          <div className="midia-icons">
            <div className="instagram">
              <FaInstagram className="icon" />
              {screenWidth >= 900 ? <h2>Instagram</h2> : null}
            </div>
            <div className="tiktok">
              <Image src={tiktok} className="tiktok-img" />
              {screenWidth >= 900 ? <h2>TikTok</h2> : null}
            </div>
          </div>
        </div>
        <div className="copyright">
          <p
            onClick={() => {
              window.location.href = 'https://wa.me/4888181012'
            }}
          >
            {' '}
            &copy;Copyright Clínica Alejando J.Mena
          </p>
          <p
            onClick={() => {
              window.location.href = 'https://smartdevs.vercel.app/'
            }}
          >
            Desarrollado por <span>SmartDevs</span>
          </p>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer
