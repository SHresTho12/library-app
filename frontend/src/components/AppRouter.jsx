import React from "react";
import { useUser } from "../Hooks/UserContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Homepage from "../pages/Homepage";
import Books from "../pages/Books";
import Profile from "../pages/Profile";
import AddBooks from "../pages/AddBooks";
import LogIn from "../pages/Auth/LogIn";
import SignuUp from "../pages/Auth/SignUp";
import Users from "../pages/Users";
import Borrow from "../pages/Borrow";
import Return from "../pages/Return";
export default function AppRouter() {
  const { user } = useUser();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/books" element={<Books />} />
        <Route path="/addBooks" element={<AddBooks />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signup" element={<SignuUp />}></Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/usersList" element={<Users />} />
        <Route path="/borrow" element={<Borrow />} />
        <Route path="/return" element={<Return />} />
      </Routes>
    </Router>
  );
}
