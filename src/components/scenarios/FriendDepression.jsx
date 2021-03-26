import { useState, useEffect, useRef } from 'react';
import LoadingScreen from '../LoadingScreen.jsx';
import FriendScenarios from '../FriendScenarios';
import '../../css/simulations.css';
import video from '../../video/test.webm';


function FriendDepression() {
    const [isLoaded, setisLoaded] = useState(false);
    const [step, setStep] = useState(0);
    const [lastOption, setLastOption] = useState(0);
    const [option1, setOption1] = useState(false);
    const [option2, setOption2] = useState(false);
    const [option3, setOption3] = useState(false);
    const friendDepressionVid = useRef(null);


    useEffect(() => {
        friendDepressionVid.current.oncanplaythrough = function() {
            setisLoaded(true);
        };

    }, [isLoaded]);

    function renderVideo(display) {
        return (
            <video autoPlay muted ref={friendDepressionVid} className="friend-depression-video" style={{display: display}}>
                <source src={video} type='video/webm' />
            </video>
        );
    }

    if(!isLoaded) {
        return (
            <div className="loading-friend-depression">
                <FriendScenarios display={''} animation={''} videoAnimation={''} />
                <LoadingScreen fade={''} animation={'slide-up-in'} />

                {renderVideo('none')}

            </div>
        );
    }
    
    return (
        <div style={{width: '100%', height: '100vh', overflow: 'hidden'}}>
            <LoadingScreen fade={'fade-out'} animation={''} />
            <div className="simulation">

                {renderVideo()}
                {renderDialogue()}

            </div>
        </div>
    );

    function setOption(option, state) {
        switch(option) {
            case 1:
                setOption1(state);
                break;
    
            case 2:
                setOption2(state);
                break;
    
            case 3:
                setOption3(state);
                break;
    
            default:
                break;
        }
      }

    function renderDialogue() {
        switch(step) {
            case 0:
                return step0();

            case 1:
                return step1();

            default:
                break;
        }
    }

    function step0() {
        return (
            <div className="dialogue">
                <h1>
                    You and John are having a conversation at his house. John mentions that he just went 
                    through a breakup and that his classes are difficult. What is your response to his 
                    initial statement?
                </h1>

                <div className="dialogue-options">
                    <p className={option2 || option3 ? 'gray-out' : 'white-background'} onMouseEnter={() => setOption(1, true)} onMouseLeave={() => setOption(1, false)} onClick={() => {setStep(1); setLastOption(1); setOption(1, false);}}>
                        "There's plenty of fish in the sea."
                    </p>
                    <p className={option1 || option3 ? 'gray-out' : 'white-background'} onMouseEnter={() => setOption(2, true)} onMouseLeave={() => setOption(2, false)} onClick={() => {setStep(1); setLastOption(2); setOption(2, false);}}>
                        "I'm sorry to hear that."
                    </p>
                    <p className={option1 || option2 ? 'gray-out' : 'white-background'} onMouseEnter={() => setOption(3, true)} onMouseLeave={() => setOption(3, false)} onClick={() => {setStep(1); setLastOption(3); setOption(3, false);}}>
                        "Breakups are tough."
                    </p>
                </div>
            </div>
        );
    }

    function step1() {
        return (
            <div className="dialogue">
                <h1 className="fade-in">
                    [ John looks sad after you say this. ] "I know breakups are tough, I just need to get over myself"
                </h1>

                <div className="last-dialogue-option">
                    {lastOption === 1 ? (
                        <p>"There's plenty of fish in the sea."</p>
                    ) : lastOption === 2 ? (
                        <p>"I'm sorry to hear that."</p>
                    ) : (
                        <p>"Breakups are tough."</p>
                    )}
                </div>

                <div className="dialogue-options fade-in-longer">
                    <p className={option2 || option3 ? 'gray-out' : 'white-background'} onMouseEnter={() => setOption(1, true)} onMouseLeave={() => setOption(1, false)} onClick={() => {setStep(1); setLastOption(1);}}>
                        "Yeah, you should just move on"
                    </p>
                    <p className={option1 || option3 ? 'gray-out' : 'white-background'} onMouseEnter={() => setOption(2, true)} onMouseLeave={() => setOption(2, false)} onClick={() => {setStep(2); setLastOption(2);}}>
                        "It's okay to feel sad about it. Breakups are hard and will take time to heal."
                    </p>
                    <p className={option1 || option2 ? 'gray-out' : 'white-background'} onMouseEnter={() => setOption(3, true)} onMouseLeave={() => setOption(3, false)} onClick={() => {setStep(3); setLastOption(3);}}>
                        "It's okay to be sad, but eventually, you're going to have to move on."
                    </p>
                </div>
            </div>
        );
    }
}

export default FriendDepression;