import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';

function ActiveMissions() {
  const missions = useSelector((store) => store.missions.missions);
  const reservedMissions = missions.filter((mission) => mission.reserved);
  return (
    <div className=" Rocket-table mx-5 px-4">
      <h2 className="titleTable">My Missions</h2>
      {reservedMissions.length ? (
        <Table bordered>
          <tbody>
            {reservedMissions.map((mission) => (
              <tr key={mission.id}>
                <td>{mission.mission_name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No Active Missions</p>
      )}
    </div>
  );
}

export default ActiveMissions;
