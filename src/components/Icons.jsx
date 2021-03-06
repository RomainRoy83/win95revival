import { useState } from 'react'

import cdMusic from '../assets/img/icons/cd-music.png'
import cdProgram from '../assets/img/icons/cd-program.png'
import computer from '../assets/img/icons/computer.png'
import diskOff from '../assets/img/icons/disk-off.png'
import diskOn from '../assets/img/icons/disk-on.png'
import folder from '../assets/img/icons/folder.png'
import programNoIcon from '../assets/img/icons/program-no-icon.png'

const Icons = () => {
  const [activeIcon, setActiveIcon] = useState({
    activeIconObject: null,
    iconObjects: [
      { id: 1, name: cdMusic, alt: 'Music CD icon', text: 'Music' },
      { id: 2, name: cdProgram, alt: 'Program CD icon', text: 'Program' },
      { id: 3, name: computer, alt: 'Computer icon', text: 'Computer' },
      { id: 4, name: diskOff, alt: 'Disk off icon', text: 'Disk off' },
      { id: 5, name: diskOn, alt: 'Disk on icon', text: 'Disk on' },
      { id: 6, name: folder, alt: 'Folder icon', text: 'Folder' },
      {
        id: 7,
        name: programNoIcon,
        alt: 'Program without a specific icon',
        text: 'Program'
      }
    ]
  })

  const toggleActive = index => {
    setActiveIcon({
      ...activeIcon,
      activeIconObject: activeIcon.iconObjects[index]
    })
  }

  const toggleActiveStyles = index => {
    if (activeIcon.iconObjects[index] === activeIcon.activeIconObject) {
      return 'active'
    } else {
      return 'inactive'
    }
  }

  return (
    <div className='icons'>
      {activeIcon.iconObjects.map((elements, index) => (
        <div
          key={index}
          onClick={() => {
            toggleActive(index)
          }}
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
