import {Routes, Route } from "react-router-dom";
import Sidebar from "./Comonents/Sidebar";
import Dashboard from "./pages/Dashboard";
import Exchanges from "./pages/Exchanges";
import "./Style/_styles.scss"

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/exchanges" element={<Exchanges/>}/>
      </Routes>
    </div>
  );
}

export default App;
