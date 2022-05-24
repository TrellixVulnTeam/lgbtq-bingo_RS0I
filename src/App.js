import './App.css';

import WeekOne from './Components/WeekOne';
import WeekTwo from './Components/WeekTwo';
import WeekThree from './Components/WeekThree';
import WeekFour from './Components/WeekFour';
import WeekFive from './Components/WeekFive';

const App = () => {
  return (
    <div className="container">
      <header className="title">
      🏳️‍🌈 PRIDE BINGO 🏳️‍🌈
      </header>
      <main className='month'>
        <WeekOne />
        <WeekTwo />
        <WeekThree />
        <WeekFour />
        <WeekFive />
      </main>
    </div>
  );
}

export default App;
