import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'

import Navbar
  from './components/layout/Navbar.jsx'

import Footer
  from './components/layout/Footer.jsx'

import ScrollToTop
  from './components/ScrollToTop.jsx'

import RouteMeta
  from './components/RouteMeta.jsx'

import Home
  from './pages/Home.jsx'

import PCs
  from './pages/PCs.jsx'

import PCDetail
  from './pages/PCDetail.jsx'

import Cart
  from './pages/Cart.jsx'

import Contact
  from './pages/Contact.jsx'

import Services
  from './pages/Services.jsx'

import ProcesoArmado
  from './pages/ProcesoArmado.jsx'

import About
  from './pages/About.jsx'

import NotFound
  from './pages/NotFound.jsx'


function App() {
  return (
    <div className="app">

      <ScrollToTop />

      <RouteMeta />


      <Navbar />


      <main>

        <Routes>

          <Route
            path="/"
            element={
              <Home />
            }
          />


          <Route
            path="/pcs"
            element={
              <PCs />
            }
          />


          <Route
            path="/pcs/:slug"
            element={
              <PCDetail />
            }
          />


          <Route
            path="/cart"
            element={
              <Cart />
            }
          />


          <Route
            path="/services"
            element={
              <Services />
            }
          />


          <Route
            path="/proceso-armado"
            element={
              <ProcesoArmado />
            }
          />


          <Route
            path="/the-lab"
            element={
              <Navigate
                to="/proceso-armado"
                replace
              />
            }
          />


          <Route
            path="/about"
            element={
              <About />
            }
          />


          <Route
            path="/contact"
            element={
              <Contact />
            }
          />


          <Route
            path="*"
            element={
              <NotFound />
            }
          />

        </Routes>

      </main>


      <Footer />

    </div>
  )
}


export default App