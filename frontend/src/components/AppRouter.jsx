import React from 'react'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";





import Homepage from '../pages/Homepage';
import Books from '../pages/Books';
import AddBooks from '../pages/AddBooks';
import LogIn from '../pages/Auth/LogIn';
import SignuUp from '../pages/Auth/SignUp';
export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
         <Route path="/homepage" element={<Homepage />} />
        <Route path="/books" element={<Books />} />
        <Route path="/addBooks" element={<AddBooks/>}></Route>
        <Route path="/login" element={<LogIn/>}></Route>
        <Route path="/signup" element={<SignuUp/>}></Route>
      </Routes>
    </Router>
    
   
  )
}
