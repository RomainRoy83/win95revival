import { useContext } from 'react'
import IconContext from '../contexts/IconContext'

const Icons = () => {
  const { activeIcon, setActiveIcon } = useContext(IconContext)

  const folder = document.getElementsByClassName('folder')

  const doubleClicked = () => {
    folder[0].classList.add('displayed')
    console.log(folder)
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
    <div className='icons'>
      //Display all icons
      {activeIcon.iconObjects.map((elements, index) => (
        <div
          id={index + 1}
          key={index}
          onClick={() => {
            toggleActive(index)
          }}
          onDoubleClick={doubleClicked}
        >
          <img src={elements.name} alt={elements.alt} draggable='false' />
          <div className='textContainer'>
            <p className={toggleActiveStyles(index)}>{elements.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Icons
