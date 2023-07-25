import ActiveRockets from '../components/ActiveRockets';
import ActiveMissions from '../components/missions/ActiveMissions';

function Profile() {
  return (
    <div className="myProfileContainer">
      <ActiveMissions />
      <ActiveRockets />
    </div>
  );
}

export default Profile;
