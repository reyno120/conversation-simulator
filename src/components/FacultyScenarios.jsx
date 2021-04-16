import '../css/scenarios.css';
import video from '../video/faculty-eyegaze.webm';
import { useState, useEffect } from 'react';

function FacultyScenarios(props) {
    const [student, setStudent] = useState(false);

    useEffect(() => {

    }, [student]);

    return (
        <div className={`scenarios-page slide-up-page ${props.animation}`} style={{display: props.display}}>
            <h1>Choose which scenario you would like to play out</h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 951.5 47.5"><defs><style></style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path stroke={false ? '#A4A4A4' : '#ffffff'} fill="none" strokeMiterlimit="10" className="cls-1" d="M0,.5C596.36,1.71,950.93,4.43,951,9.22c.11,7.29-823.06,14.24-823,24.41,0,4.6,168.43,9.11,566,13.37"/></g></g></svg>

            <div className="scenarios">
                <div className={false ? "scenario1 faded" : "scenario1"} onMouseEnter={() => setStudent(true)} onMouseLeave={() => setStudent(false)} onClick={() => props.selectScenario('faculty-student')}>
                    <h2>Student</h2>
                    <p>Estimated time to complete: <span style={{textDecoration: 'underline'}}>4 min</span></p>
                </div>

                {/* <div className="scenario2 faded">
                    <h2></h2>
                    <p>Estimated time to complete: <span style={{textDecoration: 'underline'}}> 6 min</span></p>
                    <h3 className="coming-soon">Coming soon!</h3>
                </div> */}

                {/* <div className="scenario3">
                    <h2>Substance Abuse</h2>
                    <p>Warning signs: Neglecting responsibilities, risk taking, bloodshot eyes, changes in appetite</p>
                </div> */}

            </div>

            <div className="back-arrow" onClick={() => props.selectRole()}>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Layer 2" id="Layer_2"><path fill="white" d="M10.1,23a1,1,0,0,0,0-1.41L5.5,17H29.05a1,1,0,0,0,0-2H5.53l4.57-4.57A1,1,0,0,0,8.68,9L2.32,15.37a.9.9,0,0,0,0,1.27L8.68,23A1,1,0,0,0,10.1,23Z"/></g></svg>
            </div>

            <video autoPlay loop muted className={`student-video-eyegaze video-animation`}>
                <source src={video} type='video/webm' />
            </video>

        </div>
    );
}

export default FacultyScenarios;