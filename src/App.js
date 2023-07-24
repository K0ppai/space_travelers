import './App.css';
import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import Missions from './components/missions/missions';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/missions"
          element={<Missions />}
        />
      </Routes>
    </div>
  );
}

export default App;
