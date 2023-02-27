import {Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Exchanges from "./pages/Exchanges";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/exchanges" element={<Exchanges/>}/>
      </Routes>
    </div>
  );
}

export default App;
