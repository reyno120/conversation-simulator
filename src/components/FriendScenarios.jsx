import '../css/scenarios.css';
import video from '../video/friend-eyegaze.webm';
import { useState, useEffect } from 'react';

function FriendScenarios(props) {
    const [depression, setDepression] = useState(false);


    useEffect(() => {

    }, [depression]);

    return (
        <div className={`scenarios-page ${props.animation}`} style={{display: props.display}}>
            <h1>Choose which scenario you would like to talk out</h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 951.5 47.5"><defs><style></style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path stroke={false ? '#A4A4A4' : '#ffffff'} fill="none" strokeMiterlimit="10" className="cls-1" d="M0,.5C596.36,1.71,950.93,4.43,951,9.22c.11,7.29-823.06,14.24-823,24.41,0,4.6,168.43,9.11,566,13.37"/></g></g></svg>
            
            <div className="scenarios">
                <div className={depression ? "scenario1 faded" : "scenario1"} onMouseEnter={() => setDepression(true)} onMouseLeave={() => setDepression(false)} onClick={() => props.selectScenario('friend-depression')}>
                    <h2>Depression</h2>
                    <p>Warning signs: Loss of interest, sleep changes, mood changes, trouble concentrating</p>
                </div>

                {/* <div className="scenario2">
                    <h2>Anxiety</h2>
                    <p>Warning signs: Nervousness, panic, sweating, trembling</p>
                </div>

                <div className="scenario3">
                    <h2>Substance Abuse</h2>
                    <p>Warning signs: Neglecting responsibilities, risk taking, bloodshot eyes, changes in appetite</p>
                </div> */}

            </div>

            <video autoPlay loop muted className={`student-video-eyegaze ${props.videoAnimation}`}>
                <source src={video} type='video/webm' />
            </video>

        </div>
    );
}

export default FriendScenarios;