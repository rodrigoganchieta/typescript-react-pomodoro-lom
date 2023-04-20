import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';
import { Footer } from './components/footer';

function App(): JSX.Element {
  return (
    <div className="container">
      <PomodoroTimer
        pomodoroTime={1500}
        shortRestTime={300}
        longRestTime={900}
        cycles={4}
      />
      <Footer />
    </div>
  );
}

export default App;
