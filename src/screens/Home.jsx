import React, { useState, useEffect } from 'react'

import FolderContainer from '../components/FolderContainer'
import Header from '../components/Header'
import Icons from '../components/Icons'

const Home = () => {
  const [bsodState, setBsodState] = useState(false)

  useEffect(() => {
    if (bsodState === true) {
      document.addEventListener('keydown', event => {
        location.reload()
      })
    }
  })

  return (
    <div>
      <Header />
      <Icons bsodState={bsodState} setBsodState={setBsodState} />
      <FolderContainer />
    </div>
  )
}

export default Home
