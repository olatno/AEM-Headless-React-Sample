import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AemPage from '../pages/AemPage'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AemPage />} />
      </Routes>
    </BrowserRouter>
  )
}
