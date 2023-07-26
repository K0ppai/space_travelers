import { useSelector, useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missionsSlice';
import styles from './missions.module.css';

function Missions() {
  const missions = useSelector((state) => state.missions.missions);
  console.log(missions);
  const dispatch = useDispatch();
  return (
    <table className={styles.tableContainer}>
      <thead>
        <tr className={styles.headerGridContainer}>
          <th className={styles.bold}>Missions</th>
          <th className={styles.bold}>Description</th>
          <th className={styles.bold}>Status</th>
          <th className={styles.bold}> </th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.mission_id} className={styles.gridContainer}>
            <td className={styles.bold}>
              <span>{mission.mission_name}</span>
            </td>
            <td>
              <span>{mission.description}</span>
            </td>
            <td className={styles.missionStatus}>
              <span
                className={`${styles.gridItems} ${styles.member} ${
                  mission.reserved ? styles.active : ''
                }`}
              >
                {mission.reserved ? 'Active Member' : 'Not a Member'}
              </span>
            </td>
            <td type="button" className={styles.missionStatus}>
              {mission.reserved ? (
                <button
                  type="button"
                  onClick={() => dispatch(leaveMission(mission.mission_id))}
                  className={styles.leaveBtn}
                >
                  Leave Mission
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => dispatch(joinMission(mission.mission_id))}
                  className={styles.joinBtn}
                  data-testid={mission.mission_id}
                >
                  Join Mission
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Missions;
