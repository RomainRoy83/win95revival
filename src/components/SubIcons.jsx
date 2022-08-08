import { useContext } from 'react'

import IconContext from '../contexts/IconContext'

const SubIcons = () => {
  const { activeSubIcon, toggleActive, toggleActiveStyles, doubleClicked } =
    useContext(IconContext)

  return (
    <div className='subIcons'>
      {activeSubIcon.subIconObjects.map((el, index) => (
        <div
          id={el.id}
          key={el.id}
          onClick={() => {
            toggleActive(index + 100)
          }}
          onDoubleClick={doubleClicked}
        >
          <img src={el.name} alt={el.alt} draggable='false' />
          <div className='textContainer'>
            <p className={toggleActiveStyles(index + 100)}>{el.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SubIcons
