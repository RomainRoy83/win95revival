const Header = () => {
  return (
    <div className='header'>
      <div className='bar'>
        <div className='start item'>
          <p>Démarrer</p>
        </div>
        <aside className='asideMenu'>
          <span className='volume item'>V</span>
          <span className='fullScreen item'>Fullscreen</span>
          <span className='clock item'>17:30</span>
          <span className='date item'>Sam 2 Juil 1995</span>
        </aside>
      </div>
      <div className='barLine'></div>
    </div>
  )
}

export default Header
