import '../css/homepage.css';
import { useState, useEffect, useRef } from 'react';
import video from '../video/scene1.webm';
import video1 from '../video/scene2.webm';
import video2 from '../video/scene3.webm';

function Homepage(props) {
  const [faculty, setFaculty] = useState(false);
  const [friend, setFriend] = useState(false);
  const [student, setStudent] = useState(false);
  const facultyVid = useRef(null);
  const friendVid = useRef(null);
  const studentVid = useRef(null);

  useEffect(() => {
    
  }, [faculty, friend, student]);


  function setSelector(role, state) {

    switch(role) {
      case 'faculty':
        if(state) {
          facultyVid.current.currentTime = 0;
          facultyVid.current.play();
        }
        else {
          facultyVid.current.pause();
        }

        setFaculty(state);
        break;

      case 'friend':
        if(state) {
          friendVid.current.currentTime = 0;
          friendVid.current.play();
        }
        else {
          friendVid.current.pause();
        }

        setFriend(state);
        break;

      case 'student':
        if(state) {
          studentVid.current.currentTime = 0;
          studentVid.current.play();
        }
        else {
          studentVid.current.pause();
        }

        setStudent(state);
        break;

      default:
        break;
    }
  }


    return (
      <div className={`homepage ${props.translate}`} style={{display: props.display}}>
          <div className={faculty || friend || student ? "faded" : ""}>
            <h1>Choose which role you're interested in!</h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 951.5 47.5"><defs><style></style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path stroke={faculty || friend || student ? '#A4A4A4' : '#ffffff'} fill="none" strokeMiterlimit="10" className="cls-1" d="M0,.5C596.36,1.71,950.93,4.43,951,9.22c.11,7.29-823.06,14.24-823,24.41,0,4.6,168.43,9.11,566,13.37"/></g></g></svg>
          </div>

          <div className="roles">

              <div className={friend || student ? "role-faculty faded" : "role-faculty"} onMouseEnter={() => setSelector('faculty', true)} onMouseLeave={() => setSelector('faculty', false)} onClick={() => props.selectRole('faculty')}>
                <h2>Faculty</h2>
                <p>member who notices a student is struggling</p>
              </div>

              <div className={faculty || student ? "role-friend faded" : "role-friend"} onMouseEnter={() => setSelector('friend', true)} onMouseLeave={() => setSelector('friend', false)} onClick={() => props.selectRole('friend')}> 
                <h2>Friend</h2>
                <p>of someone who is struggling</p>
              </div>

              <div className={faculty || friend ? "role-student faded" : "role-student"} onMouseEnter={() => setSelector('student', true)} onMouseLeave={() => setSelector('student', false)} onClick={() => props.selectRole('student')}>
                <h2>Student</h2>
                <p>who is struggling with their mental health</p>
              </div>

          </div>

          <video autoPlay loop muted ref={facultyVid} className={faculty ? "faculty-video" : "faculty-video no-display"}>
            <source src={video1} type='video/webm' />
          </video>

          <video autoPlay loop muted ref={friendVid} className={friend ? "friend-video" : "friend-video no-display"}>
            <source src={video} type='video/webm' />
          </video>

          <video autoPlay loop muted ref={studentVid} className={student ? "student-video" : "student-video no-display"}>
            <source src={video2} type='video/webm' />
          </video>

      </div>
    );
}


export default Homepage;