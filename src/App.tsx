import "./App.css";
import LandingPage from "./pages/landingPage/LandingPage";
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div className="app-cointainer">
      <LandingPage/>
      {/* <Routes>
      <Route path="/Home" element={<LandingPage/>} />
      </Routes> */}
     
    </div>
  )
}

export default App