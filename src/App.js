import './App.css';
import Navbar from './components/Navbar';
import Missions from './components/missions/missions';
import { Route,Routes } from 'react-router';

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
