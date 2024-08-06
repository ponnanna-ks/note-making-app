import logo from './logo.svg';
import './App.css';
import Groups from './screens/Groups';
import Messages from './screens/Messages';

function App() {
  return (
    <div className='App'>
      <div className='Groups'><Groups/></div>
      <div className='Messages'><Messages/></div>
    </div>
  );
}

export default App;
