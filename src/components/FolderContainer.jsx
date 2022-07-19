import { useContext } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import Folder from './Folder'

import IconContext from '../contexts/IconContext'

const FolderContainer = () => {
  const { activeIcon } = useContext(IconContext)

  // const [, drop] = useDrop(() => ({
  //   accept: 'folder',
  //   drop: () => {
  //     moveFolder(x, y)
  //   }
  // }))

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='folderContainer'>
        {activeIcon.iconObjects.map(el => (
          <Folder el={el} key={el.id} />
        ))}
      </div>
    </DndProvider>
  )
}

export default FolderContainer
