import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from './components/Navbar/navigation';
import Profile from './components/profile/Profile';
import Missions from './components/missions/missions';
import Rockets from './components/rockets/Rocket';
import { fetchDragons, selectAllDragons } from './redux/Dragons/dragonSlice';
import { fetchMissions, selectMissions } from './redux/Missions/missionsSlice';
import { fetchRockets, selectAllRockets } from './redux/Rockets/rocketSlice';
import Dragon from './components/dragons/Dragon';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<RocketsWithCheck />} />
          <Route path="missions" element={<MissionsWithCheck />} />
          <Route path="profile" element={<Profile />} />
          <Route path="rockets" element={<RocketsWithCheck />} />
          <Route path="dragons" element={<DragonWithCheck />} />
        </Routes>
      </Router>
    </div>
  );
}

function MissionsWithCheck() {
  const missions = useSelector(selectMissions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!missions.length) {
      dispatch(fetchMissions());
    }
  }, [missions, dispatch]);

  return (
    <>
      <Missions />
    </>
  );
}

function RocketsWithCheck() {
  const rockets = useSelector(selectAllRockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!rockets.length) {
      dispatch(fetchRockets());
    }
  }, [rockets, dispatch]);

  return (
    <>
      <Rockets />
    </>
  );
}

function DragonWithCheck() {
  const dragons = useSelector(selectAllDragons);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dragons.length) {
      dispatch(fetchDragons());
    }
  }, [dragons, dispatch]);

  return (
    <>
      <Dragon />
    </>
  );
}

export default App;
