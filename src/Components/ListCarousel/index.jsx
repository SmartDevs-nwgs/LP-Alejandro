import {
  BsCloudRainFill,
  BsFillHeartFill,
  BsFillHeartbreakFill,
} from 'react-icons/bs'
import { SiSpringCreators, SiHeadspace } from 'react-icons/si'
import { MdNoDrinks } from 'react-icons/md'
import { FaUsers } from 'react-icons/fa'
import { GiPunch } from 'react-icons/gi'

const ListCarousel = ({ widthSize }) => {
  return (
    <>
      {widthSize < 700 ? (
        <>
          <div className="card-one card card-active">
            <div>
              <BsCloudRainFill
                className="cloud"
                style={{ color: 'var(--blue)' }}
              />
              <h2>Depresión</h2>
            </div>
          </div>
          <div className="card-two card">
            <div>
              <SiSpringCreators
                className="anxiety"
                style={{ color: 'var(--blue)' }}
              />
              <h2>Ansiedad</h2>
            </div>
          </div>
          <div className="card-three card">
            <div>
              <SiHeadspace
                className="stress"
                style={{ color: 'var(--blue)' }}
              />
              <h2>Estrés Crónico</h2>
            </div>
          </div>
          <div className="card-four card">
            <div>
              <MdNoDrinks
                className="no-drink"
                style={{ color: 'var(--blue)' }}
              />
              <h2>Trastorno Obsesivo-Compulsivo</h2>
            </div>
          </div>
          <div className="card-five card">
            <div>
              <FaUsers className="social" style={{ color: 'var(--blue)' }} />
              <h2>Habilidades Sociales</h2>
            </div>
          </div>
          <div className="card-six card">
            <div>
              <GiPunch className="punch" style={{ color: 'var(--blue)' }} />
              <h2>Agresividad</h2>
            </div>
          </div>
          <div className="card-seven card">
            <div>
              <BsFillHeartFill
                className="heart"
                style={{ color: 'var(--blue)' }}
              />
              <h2>Autoestima</h2>
            </div>
          </div>
          <div className="card-eight card">
            <div>
              <BsFillHeartbreakFill
                className="broken-heart"
                style={{ color: 'var(--blue)' }}
              />
              <h2>Relaciones afectivas</h2>
            </div>
          </div>
        </>
      ) : widthSize >= 700 && widthSize < 1000 ? (
        <>
          <div className="cards-div1">
            <div className="card-one card card-active">
              <div>
                <BsCloudRainFill
                  className="cloud"
                  style={{ color: 'var(--blue)' }}
                />
                <h2>Depresión</h2>
              </div>
            </div>
            <div className="card-two card">
              <div>
                <SiSpringCreators
                  className="anxiety"
                  style={{ color: 'var(--blue)' }}
                />
                <h2>Ansiedad</h2>
              </div>
            </div>
          </div>

          <div className="cards-div2">
            <div className="card-three card">
              <div>
                <SiHeadspace
                  className="stress"
                  style={{ color: 'var(--blue)' }}
                />
                <h2>Estrés Crónico</h2>
              </div>
            </div>
            <div className="card-four card">
              <div>
                <MdNoDrinks
                  className="no-drink"
                  style={{ color: 'var(--blue)' }}
                />
                <h2>Trastorno Obsesivo-Compulsivo</h2>
              </div>
            </div>
          </div>

          <div className="cards-div3">
            <div className="card-five card">
              <div>
                <FaUsers className="social" style={{ color: 'var(--blue)' }} />
                <h2>Habilidades Sociales</h2>
              </div>
            </div>
            <div className="card-six card">
              <div>
                <GiPunch className="punch" style={{ color: 'var(--blue)' }} />
                <h2>Agresividad</h2>
              </div>
            </div>
          </div>

          <div className="cards-div4">
            <div className="card-seven card">
              <div>
                <BsFillHeartFill
                  className="heart"
                  style={{ color: 'var(--blue)' }}
                />
                <h2>Autoestima</h2>
              </div>
            </div>
            <div className="card-eight card">
              <div>
                <BsFillHeartbreakFill
                  className="broken-heart"
                  style={{ color: 'var(--blue)' }}
                />
                <h2>Relaciones afectivas</h2>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="cards-div1">
            <div className="card-one card card-active">
              <div>
                <BsCloudRainFill
                  className="cloud"
                  style={{ color: 'var(--blue)' }}
                />
                <h2>Depresión</h2>
              </div>
            </div>
            <div className="card-two card">
              <div>
                <SiSpringCreators
                  className="anxiety"
                  style={{ color: 'var(--blue)' }}
                />
                <h2>Ansiedad</h2>
              </div>
            </div>

            <div className="card-three card">
              <div>
                <SiHeadspace
                  className="stress"
                  style={{ color: 'var(--blue)' }}
                />
                <h2>Estrés Crónico</h2>
              </div>
            </div>
          </div>

          <div className="cards-div2">
            <div className="card-four card">
              <div>
                <MdNoDrinks
                  className="no-drink"
                  style={{ color: 'var(--blue)' }}
                />
                <h2>Trastorno Obsesivo-Compulsivo</h2>
              </div>
            </div>

            <div className="card-five card">
              <div>
                <FaUsers className="social" style={{ color: 'var(--blue)' }} />
                <h2>Habilidades Sociales</h2>
              </div>
            </div>
            <div className="card-six card">
              <div>
                <GiPunch className="punch" style={{ color: 'var(--blue)' }} />
                <h2>Agresividad</h2>
              </div>
            </div>
          </div>

          <div className="cards-div3">
            <div className="card-seven card">
              <div>
                <BsFillHeartFill
                  className="heart"
                  style={{ color: 'var(--blue)' }}
                />
                <h2>Autoestima</h2>
              </div>
            </div>
            <div className="card-eight card">
              <div>
                <BsFillHeartbreakFill
                  className="broken-heart"
                  style={{ color: 'var(--blue)' }}
                />
                <h2>Relaciones afectivas</h2>
              </div>
            </div>
            <div className="card-one-repeat card ">
              <div>
                <BsCloudRainFill
                  className="cloud"
                  style={{ color: 'var(--blue)' }}
                />
                <h2>Depresión</h2>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
export default ListCarousel
