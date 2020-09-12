import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import Signup from '../auth/Signup'
import Me from '../me/Me'

const DevTruck = () => (
  <Router>
    <Routes>
      <Route path='/signup' element={<Signup />} />
      <Route path='/@me' element={<Me />} />
    </Routes>
  </Router>
)

DevTruck.propTypes = {}

export default DevTruck
