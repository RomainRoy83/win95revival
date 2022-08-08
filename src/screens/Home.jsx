import React from 'react'

import FolderContainer from '../components/FolderContainer'
import Header from '../components/Header'
import Icons from '../components/Icons'
//To do : add old photos in a folder, like an album + démineur
const Home = () => {
  return (
    <div>
      <Header />
      <Icons />
      <FolderContainer />
    </div>
  )
}

export default Home
