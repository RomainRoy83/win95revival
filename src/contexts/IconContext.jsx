import { createContext, useState } from 'react'

import cdMusic from '../assets/img/icons/cd-music.png'
import cdProgram from '../assets/img/icons/cd-program.png'
import computer from '../assets/img/icons/computer.png'
import defragmenter from '../assets/img/icons/defragmenter.png'
import notepad from '../assets/img/icons/notepad.png'
import diskOn from '../assets/img/icons/disk-on.png'
import folder from '../assets/img/icons/folder.png'
import programNoIcon from '../assets/img/icons/program-no-icon.png'

const IconContext = createContext()

export default IconContext

export const IconContextProvider = ({ children }) => {
  //Determine which icon is active (icons on main screen)
  const [activeIcon, setActiveIcon] = useState({
    activeIconObject: null,
    iconObjects: [
      { id: 1, name: cdMusic, alt: 'Music CD icon', text: 'Music' },
      {
        id: 2,
        name: cdProgram,
        alt: 'Program CD icon',
        text: 'Le Déclin des Âmes.exe'
      },
      { id: 3, name: computer, alt: 'Computer icon', text: 'Computer' },
      { id: 4, name: notepad, alt: 'Notepad icon', text: 'Notepad' },
      { id: 5, name: diskOn, alt: 'Disk on icon', text: 'Disk on' },
      { id: 6, name: folder, alt: 'Folder icon', text: 'Projets' },
      {
        id: 7,
        name: programNoIcon,
        alt: 'Program without a specific icon',
        text: 'Program'
      },
      {
        id: 8,
        name: defragmenter,
        alt: 'Defragment icon',
        text: 'Defragmenter'
      }
    ]
  })

  //Same for icons inside folder

  const [activeSubIcon, setActiveSubIcon] = useState({
    activeSubIconObject: null,
    subIconObjects: [
      { id: 101, name: cdMusic, alt: 'Music CD icon', text: 'Music' },
      {
        id: 102,
        name: cdProgram,
        alt: 'Program CD icon',
        text: 'Le Déclin des Âmes.exe'
      },
      { id: 103, name: computer, alt: 'Computer icon', text: 'Computer' },
      { id: 104, name: notepad, alt: 'Notepad icon', text: 'Notepad' },
      { id: 105, name: diskOn, alt: 'Disk on icon', text: 'Disk on' },
      { id: 106, name: folder, alt: 'Folder icon', text: 'Projets' },
      {
        id: 107,
        name: programNoIcon,
        alt: 'Program without a specific icon',
        text: 'Program'
      },
      {
        id: 108,
        name: defragmenter,
        alt: 'Defragment icon',
        text: 'Defragmenter'
      }
    ]
  })

  const getFolder = document.getElementsByClassName('folder')

  const [bsodState, setBsodState] = useState(false)

  //Defragmenter error sound
  const playSound = () => {
    const audio = new Audio('assets/sound/error.mp3')
    audio.loop = false
    audio.play()
  }

  const doubleClicked = () => {
    //BSOD if disk defragmenter is double clicked
    if (activeIcon.activeIconObject.id === 8) {
      setBsodState(true)
      playSound()
      const openFolders = document.querySelectorAll('.folder:not(#folder8')
      const openFoldersArray = [...openFolders]
      openFoldersArray.map(el => el.classList.remove('displayed'))
    } else {
      getFolder[activeIcon.activeIconObject.id - 1].classList.add('displayed')
      //Newly opened folder comes to foreground :
      //Select newly opened folder and move to foreground
      let folderFocus = document.getElementById(
        `folder${activeIcon.activeIconObject.id}`
      )
      folderFocus.style.zIndex = 1
      //Select all other folders and move them behind the newly opened folder
      const unfocusedFolders = document.querySelectorAll(
        `.folder:not(#folder${activeIcon.activeIconObject.id})`
      )
      const unfocusedFoldersArray = [...unfocusedFolders]
      unfocusedFoldersArray.map(el => (el.style.zIndex = 0))
    }
  }

  //Determine active icon
  const toggleActive = index => {
    // console.log('Main icon :', activeIcon.activeIconObject)
    // console.log('Inside folder icon :', activeSubIcon)
    // console.log('index :', index)
    index < 100
      ? setActiveIcon({
          ...activeIcon,
          activeIconObject: activeIcon.iconObjects[index]
        })
      : setActiveSubIcon({
          ...activeSubIcon,
          activeSubIconObject: activeSubIcon.subIconObjects[index - 100]
        })
  }

  //Change CSS of active icon
  const toggleActiveStyles = index => {
    if (index < 100) {
      return activeIcon.iconObjects[index] === activeIcon.activeIconObject
        ? 'active'
        : 'inactive'
    } else {
      return activeSubIcon.subIconObjects[index - 100] ===
        activeSubIcon.activeSubIconObject
        ? 'active'
        : 'inactive'
    }
  }

  return (
    <IconContext.Provider
      value={{
        activeIcon,
        setActiveIcon,
        toggleActive,
        toggleActiveStyles,
        doubleClicked,
        playSound,
        bsodState,
        setBsodState,
        activeSubIcon
      }}
    >
      {children}
    </IconContext.Provider>
  )
}
