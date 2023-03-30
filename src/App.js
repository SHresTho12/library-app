import "./App.css";
import AppRouter from "./components/AppRouter";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Books from "./pages/Books";

function App() {
  return <AppRouter></AppRouter>;
}

export default App;
