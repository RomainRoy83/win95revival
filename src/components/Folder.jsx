import React, { useState } from 'react'

import SubIcons from './SubIcons'

import close from '../assets/img/ui/close.png'
import cv from '../assets/img/cv.png'

const Folder = ({ el }) => {
  const [diffX, setDiffX] = useState(0)
  const [diffY, setDiffY] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [styles, setStyles] = useState({})

  const dragStart = e => {
    toForeground()
    document.getElementById(`topBar${el.id}`).setPointerCapture(e.pointerId)
    setDiffX(e.screenX - e.currentTarget.getBoundingClientRect().left)
    setDiffY(e.screenY - e.currentTarget.getBoundingClientRect().top)
    setIsDragging(true)
  }

  const dragging = e => {
    if (isDragging) {
      let left = e.screenX - diffX
      let top = e.screenY - diffY
      setStyles({
        left: left,
        top: top
      })
    }
  }

  const dragEnd = () => {
    setIsDragging(false)
  }

  //Window comes to foreground when clicked
  const toForeground = () => {
    document.getElementById(`folder${el.id}`).style.zIndex = 1
    const unfocusedFolders = document.querySelectorAll(
      `.folder:not(#folder${el.id}`
    )
    const unfocusedFoldersArray = [...unfocusedFolders]
    unfocusedFoldersArray.map(el => (el.style.zIndex = 0))
  }

  //Folder1 = Music
  //Folder2 = Le déclin des âmes
  //Folder3 = Computer
  //Folder4 = Notepad
  //Folder5 = Disk on
  //Folder6 = Projets
  //Folder7 = Program
  //Folder8 = Defragmenter

  return (
    <div
      id={`folder${el.id}`}
      className='folder'
      style={styles}
      onPointerDown={toForeground}
    >
      <div
        className='topBar'
        id={`topBar${el.id}`}
        onPointerDown={dragStart}
        onPointerMove={dragging}
        onPointerUp={dragEnd}
      >
        <div className='topBarLeft'>
          <div className='folderIcon'>
            <img src={el.name} alt='computer' />
          </div>
          <div className='folderName'>{el.text}</div>
        </div>
        <div className='topBarRight'>
          <div
            className='close'
            onPointerDown={() => {
              const activeFolder = document.getElementById(`folder${el.id}`)
              activeFolder.classList.toggle('displayed')
            }}
          >
            <img className='x' src={close} alt='close icon' />
          </div>
        </div>
      </div>
      <div className='folderContent'>
        {el.id == 4 && (
          <div className='contained'>
            <a href={cv} download='cv'>
              Télécharger mon CV pour le voir dans les années 2020
            </a>
            <img src={cv} alt='cv' />
          </div>
        )}
        {el.id == 6 && <SubIcons />}
      </div>
      <div className='folderFooterBar'></div>
    </div>
  )
}

export default Folder
