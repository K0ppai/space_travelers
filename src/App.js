import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import Missions from './components/missions/missions';
import Rockets from './pages/Rockets';
import { fetchRockets } from './redux/Rockets/rocket';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div>
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
