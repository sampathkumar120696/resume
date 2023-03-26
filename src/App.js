
import './App.css';
import Profile from './components/Profile';
import Details from './components/Details';
import Skils from './components/Skils';
import Language from './components/Language';


function App() {
  return (
    <div>
      <div className='portion1'>
        <div ><Profile/></div>
        <div><Details/></div>
        <div><Skils/></div>
        <div><Language/></div>
      </div>
      </div>
    
  );
}

export default App;
