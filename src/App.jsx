import Landingpage from './Pages/Landingpage/Landingpage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landingpage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
