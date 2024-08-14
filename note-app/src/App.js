import React, { useState, useEffect } from 'react';
import './App.css';
import Messages from './screens/Messages';
import GroupsSide from './screens/GroupsSide';

function App() {
  const [view, setView] = useState('groups');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleGroupClick = () => {
    if (isMobile) {
      setView('messages');
    }
  };

  return (
    <div className={`App ${view === 'messages' && isMobile ? 'message-view' : ''}`}>
      <div className='Groups'><GroupsSide onGroupClick={handleGroupClick} /></div>
      <div className='Messages'><Messages setView={setView}/></div>
    </div>
  );
}

export default App;
