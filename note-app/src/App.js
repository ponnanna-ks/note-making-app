import logo from './logo.svg';
import './App.css';
import Messages from './screens/Messages';
import { useState } from 'react';
import GroupsSide from './screens/GroupsSide';

function App() {
  const [openAddScreen, setOpenAddScreen] = useState(false)

  return (
    <div className='App'>
      <div className='groups'>
          <GroupsSide/>
        </div>
      <div className='Messages'><Messages/></div>
    </div>
  );
}

export default App;
