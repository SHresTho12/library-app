import "./App.css";
import AppRouter from "./components/AppRouter";
import { UserProvider } from "./Hooks/UserContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Books from "./pages/Books";

function App() {
  return (
    <UserProvider>
      <AppRouter></AppRouter>
    </UserProvider>
  );
}

export default App;
