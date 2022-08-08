import { useContext, useEffect } from 'react'

import IconContext from '../contexts/IconContext'

const Icons = () => {
  const {
    activeIcon,
    doubleClicked,
    toggleActive,
    toggleActiveStyles,
    bsodState
  } = useContext(IconContext)

  useEffect(() => {
    bsodState === true &&
      document.addEventListener('keydown', e => {
        location.reload()
      })
  })

  return (
    //Display all icons
    <>
      {bsodState ? (
        <div id='bsod' className='bsodActive'></div>
      ) : (
        <div className='icons'>
          {activeIcon.iconObjects.map((el, index) => (
            <div
              id={el.id}
              key={el.id}
              onClick={() => {
                toggleActive(index)
              }}
              onDoubleClick={doubleClicked}
            >
              <img src={el.name} alt={el.alt} draggable='false' />
              <div className='textContainer'>
                <p className={toggleActiveStyles(index)}>{el.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Icons
