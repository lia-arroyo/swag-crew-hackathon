import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Map from "./pages/Map";
import Creation from "./pages/Creation";
import Closeup from "./pages/Closeup";
import DressingRoom from "./pages/DressingRoom";
import './App.css';
import Landmark from "./pages/Landmark";

function App() {
  return (
    <Router>
    <div className="App">
      <div className="content">
        <Routes>
          <Route path="/" element={<Creation />} />
          <Route path="/map" element={<Map />} />
          <Route path="/closeup" element={<Closeup />} />
          <Route path="/dressing-room" element={<DressingRoom />} />
          <Route path="/landmark" element={<Landmark />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
