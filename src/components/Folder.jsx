import { useContext } from 'react'

import IconContext from '../contexts/IconContext'

import close from '../assets/img/ui/close.png'

const Folder = () => {
  const { activeIcon } = useContext(IconContext)

  return (
    <div className='folders'>
      {activeIcon.iconObjects.map((el, index) => (
        <div id={`folder${el.id}`} key={index} className='folder'>
          <div className='topBar'>
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
      ))}
    </div>
  )
}

export default Folder
