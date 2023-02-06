import './styles/App.css';
import RewardsProfile from './components/RewardsProfile';
import RewardsTabs from './components/RewardsTabs';

const App = () => {
  return (
    <div className="rewards-main-container">
        <h1>Rewards Dashboard</h1>
       <RewardsProfile />
       <RewardsTabs />
    </div>
  );
}

export default App;
