import './css/App.css';
import './css/reset.css';
// import video from './images/Scene-cabinbg.mp4';
import Homepage from './components/Homepage.jsx';
import FacultyScenarios from './components/FacultyScenarios.jsx';
import FriendScenarios from './components/FriendScenarios.jsx';
import FriendDepression from './components/scenarios/FriendDepression.jsx';
import { useState, useEffect } from 'react';

function App() {
  const [translateHome, setTranslateHome] = useState('');
  const [role, setRole] = useState('');
  const [displayFacultyScenarios, setDisplayFacultyScenarios] = useState('none');
  const [displayFriendScenarios, setDisplayFriendScenarios] = useState('none');
  const [scenario, setScenario] = useState(false);

  function selectRole(role) {
    setRole(role);
    setTranslateHome("slide-up-page");

    switch(role) {
      case 'faculty':
        setDisplayFacultyScenarios('');
        break;

      case 'friend':
        setDisplayFriendScenarios('');
        break;

      default:
        break;
    }
  }

  function selectScenario(scenario) {
    setScenario(scenario);
  }

  useEffect(() => {
    
  }, [role, scenario]);


  function renderHome() {
    return (
      <div className="App">
        <Homepage translate={translateHome} selectRole={selectRole} />
        <FacultyScenarios display={displayFacultyScenarios} />
        <FriendScenarios display={displayFriendScenarios} selectScenario={selectScenario} />
      </div>
    );
  }

  function renderScenario() {
    switch(scenario) {
      case 'friend-depression':
        return (
          <FriendDepression />
        );

      default:
        break;
    }
  }

  
  if(scenario) {
    return renderScenario();
  }
  else {
    return renderHome();
  }
}

export default App;



    // <div className="App">
    //   <div className="video-container">
    //     <video autoPlay muted >
    //       <source src={video} type='video/mp4' />
    //     </video>
    //   </div>
    //   <div className="overlay">
    //     <p>test</p>
    //   </div>
    // </div>