import './css/App.css';
import './css/reset.css';
import About from './components/About.jsx';
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
  const [displayHome, setDisplayHome] = useState('none');
  const [displayAbout, setDisplayAbout] = useState('');
  const [translateRole, setTranslateRole] = useState('');
  const [translateAbout, setTranslateAbout] = useState('');
  const [scenario, setScenario] = useState(false);

  function selectRole(role) {
    setRole(role);
    setTranslateHome("slide-up-page");
    setDisplayAbout('none');

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
        setDisplayStudentScenarios('none');
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
        break;
    }
  }

  function selectScenario(scenario) {
    setScenario(scenario);
  }

  function selectContinue() {
    setDisplayHome('');
    setTranslateAbout('slide-up-page');
  }

  useEffect(() => {
    
  }, [role, scenario]);


  function renderHome() {
    return (
      <div className="App">
        <About translate={translateAbout} selectContinue={selectContinue} display={displayAbout} />
        <Homepage translate={translateHome} display={displayHome} selectRole={selectRole} />
        <FacultyScenarios display={displayFacultyScenarios} selectRole={selectRole} selectScenario={selectScenario} animation={'slide-up-page'} videoAnimation={'video-animation'}/>
        <FriendScenarios display={displayFriendScenarios} selectRole={selectRole} selectScenario={selectScenario} animation={translateRole} />
      </div>
    );
  }

  function renderScenario() {
    switch(scenario) {
      case 'friend-depression':
        return (
          <FriendDepression setScenario={setScenario} setTranslateHome={setTranslateHome} setDisplayFriendScenarios={setDisplayFriendScenarios} />
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