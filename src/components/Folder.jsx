import computer from '../assets/img/icons/computer.png'

const Folder = () => {
  return (
    <div className='folder'>
      <div className='topBar'>
        <div className='topBarLeft'>
          <div className='folderIcon'>
            <img src={computer} alt='computer' />
          </div>
          <div className='folderName'>My computer</div>
        </div>
        <div className='topBarRight'>
          <div className='close'>
            <div className='x'>X</div>
          </div>
        </div>
      </div>
      <div className='folderContent'></div>
    </div>
  )
}

export default Folder
