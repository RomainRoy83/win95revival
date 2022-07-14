import Home from './screens/Home'

import { IconContextProvider } from './contexts/IconContext'

function App() {
  return (
    <IconContextProvider>
      <div className='app'>
        <Home />
      </div>
    </IconContextProvider>
  )
}

export default App
