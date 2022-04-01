import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Routes/Home'
import Route1 from './Routes/Route1'
import Route2 from './Routes/Route2'
import Menu from './Menu'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/route-1" element={<Route1 />} />
      <Route exact path="/route-2" element={<Route2 />} />
    </Routes>
  </BrowserRouter>
)

export default App
