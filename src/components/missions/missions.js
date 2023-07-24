import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../../redux/missions/missionsSlice';
import styles from './missions.module.css';

function Missions() {
  const missions = useSelector((state) => state.missions.missions);
  console.log(missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <>
      <div className={styles.headerGridContainer}>
        <h2 className={styles.gridItems}>Missions</h2>
        <h2 className={styles.gridItems}>Description</h2>
        <h2 className={styles.gridItems}>Status</h2>
        <h2 className={styles.gridItems}> </h2>
      </div>
      <div>
        <ul>
          {missions.map((mission) => (
            <li key={mission.mission_id} className={styles.gridContainer}>
              <span className={styles.gridItems}>{mission.mission_name}</span>
              <span className={styles.gridItems}>{mission.description}</span>
              <span className={styles.gridItems}>Not a Member</span>
              <button className={styles.gridItems} type="button">
                Join Mission
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Missions;
