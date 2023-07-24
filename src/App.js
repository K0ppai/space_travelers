import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Missions from './components/missions/missions';
import Rockets from './pages/Rockets';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/missions"
          element={<Missions />}
        />
        <Route path="/" element={<Rockets />} />
        <Route path="/rockets" element={<Rockets />} />
      </Routes>
    </div>
  );
}

export default App;
