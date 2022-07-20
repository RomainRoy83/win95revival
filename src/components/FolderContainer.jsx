import { useContext } from 'react'

import Folder from './Folder'

import IconContext from '../contexts/IconContext'

const FolderContainer = () => {
  const { activeIcon } = useContext(IconContext)

  return (
    <div className='folderContainer'>
      {activeIcon.iconObjects.map(el => (
        <Folder el={el} key={el.id} />
      ))}
    </div>
  )
}

export default FolderContainer
