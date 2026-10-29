import {React, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landingpage from './Pages/Landingpage/Landingpage'
import AboutPage from './Pages/Aboutpage/Aboutpage'
import FeaturesPage from './Pages/Featurs/Features'
import FourOFour from './Pages/Error404/Error404.jsx'
import VastoRouter from './App/Router.jsx'

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landingpage />} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/features' element={<FeaturesPage/>} />
          <Route path='/vasto' element={<VastoRouter/>} />
          <Route path='*' element={<FourOFour/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
