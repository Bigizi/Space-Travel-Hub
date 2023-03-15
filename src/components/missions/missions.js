import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions, joinMission, selectMissions } from '../../redux/Missions/missionsSlice';
import './missions.css';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const handleClick = (id) => {
    dispatch(joinMission(id));
  };
  const missions = useSelector(selectMissions);

  return (
    <section className="missions-section">
      <h2 className="missions-title">Missions</h2>
      <table className="table-container">
        <thread className="mission-th">
          <tr className="mission-tr">
            <th className="column-title">Missions</th>
            <th className="column-title">Description</th>
            <th className="column-title">Status</th>
            <th className="column-title">Action</th>
          </tr>
        </thread>
        <tbody className="table-body">
          {missions.map((mission) => (
            <tr key={mission.mission_id} className="missions">
              <td className="mission-name">{mission.mission_name}</td>
              <td className="mission-description">{mission.description}</td>
              <td>
                <p className="mission-status">NOT A MEMBER</p>
                <p className="mission-joined">
                  joined
                  {mission.joined}
                </p>
              </td>
              <td className="mission-join">
                <button
                  onClick={() => {
                    handleClick(mission.mission_id);
                  }}
                  type="button"
                  className="join-btn"
                >
                  Join Mission
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
