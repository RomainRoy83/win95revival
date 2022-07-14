const Folder = () => {
  return (
    <div className='folder'>
      <div className='edging'>
        <div className='topBar'>
          <div className='topBarLeft'>
            <div className='folderIcon'></div>
            <div className='folderName'>My computer</div>
          </div>
          <div className='topBarRight'>
            <div className='close'>X</div>
          </div>
        </div>
        <div className='folderContent'></div>
      </div>
    </div>
  )
}

export default Folder
