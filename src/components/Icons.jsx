import { useContext } from 'react'
import IconContext from '../contexts/IconContext'

const Icons = () => {
  const { activeIcon, setActiveIcon, isOpen, setIsOpen } =
    useContext(IconContext)

  const folder = document.getElementsByClassName('folder')

  const doubleClicked = () => {
    folder[activeIcon.activeIconObject.id - 1].classList.add('displayed')
    const result = [false, false, false, false, false, false, false]
    result[activeIcon.activeIconObject.id - 1] = true
    setIsOpen(result)
  }

  //Determine active icon
  const toggleActive = index => {
    setActiveIcon({
      ...activeIcon,
      activeIconObject: activeIcon.iconObjects[index]
    })
  }

  //Change CSS of active icon
  const toggleActiveStyles = index => {
    if (activeIcon.iconObjects[index] === activeIcon.activeIconObject) {
      return 'active'
    } else {
      return 'inactive'
    }
  }

  return (
    //Display all icons
    <div className='icons'>
      {activeIcon.iconObjects.map((el, index) => (
        <div
          id={index + 1}
          key={index}
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
  )
}

export default Icons
