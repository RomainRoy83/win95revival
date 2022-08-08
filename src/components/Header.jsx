import { useState, useEffect } from 'react'

const Header = () => {
  const [time, setTime] = useState()
  const [date, setDate] = useState()
  const [fullscreen, setFullscreen] = useState()

  const options = {
    weekday: 'short',
    month: 'long',
    day: 'numeric'
  }
  const today = new Date()
  const year = 1995

  useEffect(() => {
    console.log()
    setInterval(() => {
      setDate(today.toLocaleDateString('fr-FR', options) + ' ' + year)
      setTime(
        today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      )
    }, 1000)
  }, [])

  const toggleFullscreen = () => {
    fullscreen
      ? document.exitFullscreen()
      : document.documentElement.requestFullscreen()
    setFullscreen(!fullscreen)
  }

  return (
    <div className='header'>
      <div className='bar'>
        <div className='start item'>
          <p>Démarrer</p>
        </div>
        <aside className='asideMenu'>
          <span className='volume item'>V</span>
          <span className='fullScreen item' onClick={() => toggleFullscreen()}>
            Fullscreen
          </span>
          <span className='clock item'>{time}</span>
          <span className='date item'>{date}</span>
        </aside>
      </div>
    </div>
  )
}

export default Header
