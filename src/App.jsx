import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landingpage from './Pages/Landingpage/Landingpage'
import AboutPage from './Pages/Aboutpage/Aboutpage'
import FeaturesPage from './Pages/Featurs/Features'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landingpage />} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/features' element={<FeaturesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
