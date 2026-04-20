import React from 'react';
import Timeline from './Timeline';
import pantheonTimeline from './pantheonTimeline';

const App: React.FC = () => {
    return (
        <div style={{ background: 'linear-gradient(to right, #ff7e5f, #feb47b)', minHeight: '100vh' }}>
            <Timeline data={pantheonTimeline} />
        </div>
    );
};

export default App;