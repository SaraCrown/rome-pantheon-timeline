import React from 'react';
import Timeline from './components/Timeline';
import { pantheonTimeline } from './data/pantheonTimeline';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <Timeline items={pantheonTimeline} />
    </div>
  );
}

export default App;
