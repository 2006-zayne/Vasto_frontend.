import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landingpage from './Pages/Landingpage/Landingpage'
import AboutPage from './Pages/Aboutpage/Aboutpage'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landingpage />} />
          <Route path='/about' element={<AboutPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
