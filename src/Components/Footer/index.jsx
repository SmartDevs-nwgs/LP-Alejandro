import { StyledFooter } from './style'
import { FaTiktok, FaInstagram } from 'react-icons/fa'

const Footer = () => {
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
              {/* <h2>Instagram</h2> */}
            </div>
            <div className="tiktok">
              <FaTiktok className="icon" />
              {/* <h2>TikTok</h2> */}
            </div>
          </div>
        </div>
        <div className="copyright">
          <p> &copy;Copyright Clínica Alejando J.Mena</p>
          <p>Desarrollado por SmartDevs</p>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer
