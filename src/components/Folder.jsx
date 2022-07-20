import React, { useEffect, useContext, useState, useCallback } from 'react'

import IconContext from '../contexts/IconContext'

import close from '../assets/img/ui/close.png'

const Folder = ({ el }) => {
  const [diffX, setDiffX] = useState(0)
  const [diffY, setDiffY] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [styles, setStyles] = useState({})
  const [zIndex, setZIndex] = useState(0)

  const dragStart = e => {
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

  const dragEnd = e => {
    setIsDragging(false)
  }

  return (
    <div id={`folder${el.id}`} className='folder' style={styles}>
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
            onClick={() => {
              const activeFolder = document.getElementById(`folder${el.id}`)
              activeFolder.classList.toggle('displayed')
            }}
          >
            <img className='x' src={close} alt='close icon' />
          </div>
        </div>
      </div>
      <div className='folderContent'></div>
      <div className='folderFooterBar'></div>
    </div>
  )
}

export default Folder
