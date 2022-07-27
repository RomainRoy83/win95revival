import { useContext } from 'react'
import IconContext from '../contexts/IconContext'

const Icons = ({ bsodState, setBsodState }) => {
  const { activeIcon, setActiveIcon, isOpen, setIsOpen } =
    useContext(IconContext)

  const playSound = () => {
    const audio = new Audio('assets/sound/error.mp3')
    audio.loop = false
    audio.play()
  }

  const folder = document.getElementsByClassName('folder')

  const doubleClicked = () => {
    //BSOD if disk defragmenter is double clicked
    if (activeIcon.activeIconObject.id === 8) {
      setBsodState(true)
      playSound()
      const openFolders = document.querySelectorAll('.folder:not(#folder8')
      const openFoldersArray = [...openFolders]
      openFoldersArray.map(el => el.classList.remove('displayed'))
    } else {
      folder[activeIcon.activeIconObject.id - 1].classList.add('displayed')
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
    const result = [false, false, false, false, false, false, false, false]
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
    <>
      {bsodState ? (
        <div id='bsod' className='bsodActive'></div>
      ) : (
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
      )}
    </>
  )
}

export default Icons
