import { useState } from 'react'
import { content } from './image'
import './App.css'

function App() {
  const [imageIndex, setImageIndex] = useState<number>(0)
  const nextIndex = () => {
    if(imageIndex < content.length - 1) {
      setImageIndex((prev: number) => prev + 1)
    }
  }

  const prevIndex = () => {
    if(imageIndex > 0) {
      setImageIndex((prev: number) => prev - 1)
    }
  }

  return (
    <> 
       <div className="feature">
          <img src={`./images/${content[imageIndex].image}`} alt="Featured" />
          <div className="caption">{content[imageIndex].caption}</div>
        </div>

        <div className="thumbnails">
          <ul>
            {content.map((image, index) => {
              let style = index === imageIndex ? 'selected' : ''
              return <li className={style} onClick={() => setImageIndex(index)}>
                        <a href="#">
                          <img src={`./images/${image.image}`} alt="" />
                        </a>
                      </li>
            })}
          </ul>
        </div>

        <a href="#" className="left" onClick={prevIndex}><img src="./images/chevron.svg" alt="" /></a>
        <a href="#" className="right" onClick={nextIndex}><img src="./images/chevron.svg" alt="" /></a>
    </>
  )
}

export default App
