import '../css/homepage.css';
import { useState, useEffect } from 'react';
import scene from '../video/scene1.webm';

function Homepage() {
  const [faculty, setFaculty] = useState(false);
  const [friend, setFriend] = useState(false);
  const [student, setStudent] = useState(false);

  useEffect(() => {
    
  }, [faculty, friend, student]);


  function setSelector(role, state) {
    switch(role) {
      case 'faculty':
        setFaculty(state);
        break;

      case 'friend':
        setFriend(state);
        break;

      case 'student':
        setStudent(state);
        break;

      default:
        break;
    }
  }

    return (
      <div className="homepage">
          <div className={faculty || friend || student ? "faded" : ""}>
            <h1>Choose which role you're interested in!</h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 951.5 47.5"><defs><style></style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path stroke={faculty || friend || student ? '#A4A4A4' : '#ffffff'} fill="none" strokeMiterlimit="10" class="cls-1" d="M0,.5C596.36,1.71,950.93,4.43,951,9.22c.11,7.29-823.06,14.24-823,24.41,0,4.6,168.43,9.11,566,13.37"/></g></g></svg>
          </div>

          <div className="roles">

              <div className={friend || student ? "role-faculty faded" : ".role-faculty"} onMouseEnter={() => setSelector('faculty', true)} onMouseLeave={() => setSelector('faculty', false)}>
                <h2>Faculty</h2>
                <p>member who notices a student is struggling</p>
              </div>

              <div className={faculty || student ? "role-friend faded" : ".role-friend"} onMouseEnter={() => setSelector('friend', true)} onMouseLeave={() => setSelector('friend', false)}>
                <h2>Friend</h2>
                <p>of someone who is struggling</p>
              </div>

              <div className={faculty || friend ? "role-student faded" : ".role-student"} onMouseEnter={() => setSelector('student', true)} onMouseLeave={() => setSelector('student', false)}>
                <h2>Student</h2>
                <p>who is struggling with their mental health</p>
              </div>

          </div>

          <video autoPlay loop muted className={friend ? "" : "no-display"}>
            <source src={scene} type='video/webm' />
          </video>
          
      </div>
    );
}


export default Homepage;