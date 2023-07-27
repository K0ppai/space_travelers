import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Missions from './components/missions/missions';
import Profile from './pages/Profile';
import Rockets from './pages/Rockets';
import { fetchMissions } from './redux/missions/missionsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/missions" element={<Missions />} />
        <Route path="/" element={<Rockets />} />
        <Route path="/Rockets" element={<Rockets />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
