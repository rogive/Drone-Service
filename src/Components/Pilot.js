import React, { useRef } from 'react'
import styled from 'styled-components'
import { useNearScreen } from '../hooks/useNearScreen'
import { fadeIn } from '../utils/Animation'
import PilotCard from './PilotCard'


const PilotContainerEffect = styled.div`
  ${fadeIn()}
`
const ImageFadeIn = styled.img`
  ${fadeIn()}
`

const PilotContainer = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
`

function Pilot({ element, setPilotCard, setModelToggle }) {
  const [show, ref] = useNearScreen()

  return (
    <PilotContainer ref={ref} key={element._id}>
      {show &&
        <PilotContainerEffect className="solicitude">
          <div className="image__container__solicitude">
            {element.media.map((image, index) => {
              if (index < 1) {
                return (
                  <ImageFadeIn
                    className="image__solicitude"
                    src={image.url}
                    alt=""
                  />
                );
              }
            })}
          </div>
          <div className="solicitude-right">
            <h2 className="solicitude-title">{element.name}</h2>
            <h3>{element.description}</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptas sunt ducimus incidunt dolor totam, beatae id
              officia alias eaque explicabo, quas distinctio pariatur est
              tempora temporibus laudantium quae asperiores neque.
                  </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptas sunt ducimus incidunt dolor totam, beatae id
              officia alias eaque explicabo, quas distinctio pariatur est
              tempora temporibus laudantium quae asperiores neque.
                  </p>

            <div className="buttons">
              <button
                onClick={(event) => {
                  setPilotCard(element);
                  setModelToggle(true);
                }}
              >
                Ver más
                    </button>
            </div>
          </div>
        </PilotContainerEffect>
      }
    </PilotContainer>
  )
}

export default Pilot
