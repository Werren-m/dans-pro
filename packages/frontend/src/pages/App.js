import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'

import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import JobListPage from './JobListPage'
import JobDetailPage from './JobDetailPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/joblist" element={<JobListPage />} />
        <Route path="/jobDetail" element={<JobDetailPage />} />
      </Routes>
    </Router>
  )
}

export default App
