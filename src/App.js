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
  const [displayStudentScenarios, setDisplayStudentScenarios] = useState('none');
  const [translateRole, setTranslateRole] = useState('');
  const [scenario, setScenario] = useState(false);

  function selectRole(role) {
    setRole(role);
    setTranslateHome("slide-up-page");

    switch(role) {
      case 'faculty':
        setTranslateRole('');
        setDisplayFacultyScenarios('');

        setDisplayFriendScenarios('none');
        setDisplayStudentScenarios('none');
        break;

      case 'friend':
        setTranslateRole('');
        setDisplayFriendScenarios('');

        setDisplayFacultyScenarios('none');
        setDisplayStudentScenarios('none')
        break;

      case 'student':
        setTranslateRole('');
        setDisplayStudentScenarios('');

        setDisplayFacultyScenarios('none');
        setDisplayFriendScenarios('none');
        break;

      default:
        setRole('');
        setTranslateHome("slide-down-page");
        setTranslateRole("slide-down-page");
        // setDisplayFacultyScenarios('none');
        // setDisplayFriendScenarios('none');
        // setDisplayStudentScenarios('none');
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
        <FacultyScenarios display={displayFacultyScenarios} selectRole={selectRole} selectScenario={selectScenario} animation={'slide-up-page'} videoAnimation={'video-animation'}/>
        <FriendScenarios display={displayFriendScenarios} selectRole={selectRole} selectScenario={selectScenario} animation={translateRole} />
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