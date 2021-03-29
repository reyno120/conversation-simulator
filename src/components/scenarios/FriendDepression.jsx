import { useState, useEffect, useRef } from 'react';
import LoadingScreen from '../LoadingScreen.jsx';
import FriendScenarios from '../FriendScenarios';
import '../../css/simulations.css';
import video from '../../video/test.webm';


function FriendDepression() {
    const [isLoaded, setisLoaded] = useState(false);
    const [step, setStep] = useState(0);
    const [lastStep, setLastStep] = useState(0);
    const [lastOption, setLastOption] = useState(0);
    // const [option1, setOption1] = useState(false);
    // const [option2, setOption2] = useState(false);
    // const [option3, setOption3] = useState(false);
    // const parentDiv = useRef(null);
    const option1 = useRef(null);
    const option2 = useRef(null);
    const option3 = useRef(null);
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

    function setVideoTime(startTime, endTime) {
        friendDepressionVid.current.currentTime = startTime;
        friendDepressionVid.current.play();
        
        setInterval(function() {
            if(friendDepressionVid.current.currentTime > endTime) friendDepressionVid.current.pause();
        }, 1000);
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
            <div className='simulation' onClick={() => friendDepressionVid.current.pause()}>

                {step > 0 ? renderVideo() : renderVideo('none')}
                {renderDialogue()}

            </div>
        </div>
    );

    function setOption(option, state) {
        switch(option) {
            case 1:
                if(state) {
                    option2.current.style.backgroundColor = '#DCDCDC';
                    option3.current.style.backgroundColor = '#DCDCDC';
                }
                else {
                    option2.current.style.backgroundColor = 'white';
                    option3.current.style.backgroundColor = 'white';
                }
                break;
    
            case 2:
                if(state) {
                    option1.current.style.backgroundColor = '#DCDCDC';
                    option3.current.style.backgroundColor = '#DCDCDC';
                }
                else {
                    option1.current.style.backgroundColor = 'white';
                    option3.current.style.backgroundColor = 'white';
                }
                break;
    
            case 3:
                if(state) {
                    option1.current.style.backgroundColor = '#DCDCDC';
                    option2.current.style.backgroundColor = '#DCDCDC';
                }
                else {
                    option1.current.style.backgroundColor = 'white';
                    option2.current.style.backgroundColor = 'white';
                }
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

            case 2:
                return step2();

            case 3:
                return step3();

            case 4:
                return step4();

            case 5:
                return step5();

            case 6:
                return step6();

            default:
                break;
        }
    }






    /****************** Steps **********************/

    function step0() {
        return (
            <div className="dialogue" key={step}>
                <h1>
                    Your friend, John, might be dealing with depression and you want to talk to them about it.
                    What's the best method to have this conversation?
                </h1>

                <div className="dialogue-options">
                    <p className='white-background' ref={option1} onMouseEnter={() => setOption(1, true)} onMouseLeave={() => setOption(1, false)} onClick={() => {setStep(1); setLastOption(1); setOption(1, false);}}>
                        [ Send him a text ]
                    </p>
                    <p className='white-background' ref={option2} onMouseEnter={() => setOption(2, true)} onMouseLeave={() => setOption(2, false)} onClick={() => {setStep(1); setLastOption(2); setOption(2, false);}}>
                        [ Meet him in person ]
                    </p>
                    <p className='white-background' ref={option3} onMouseEnter={() => setOption(3, true)} onMouseLeave={() => setOption(3, false)} onClick={() => {setStep(1); setLastOption(3); setOption(3, false);}}>
                        [ Facetime him ]
                    </p>
                </div>
            </div>
        );
    }

    function step1() {
        return (
            <div className="dialogue" key={step}>
                <h1 className="fade-in">
                    John has agreed to meet with you in person. Where is the most appropriate place to meet?
                </h1>

                <div className="last-dialogue-option">
                    {lastOption === 1 ? (
                        <p>[ Send him a text ]</p>
                    ) : lastOption === 2 ? (
                        <p>[ Meet him in person ]</p>
                    ) : (
                        <p>[ Facetime him ]</p>
                    )}
                </div>

                <div className="dialogue-options fade-in-longer" key={step}>
                    <p className='white-background' ref={option1} onMouseEnter={() => setOption(1, true)} onMouseLeave={() => setOption(1, false)} onClick={() => {setStep(2); setLastOption(1);}}>
                        John's house
                    </p>
                    <p className='white-background' ref={option2} onMouseEnter={() => setOption(2, true)} onMouseLeave={() => setOption(2, false)} onClick={() => {setStep(2); setLastOption(2);}}>
                        The local Chipotle
                    </p>
                    <p className='white-background' ref={option3} onMouseEnter={() => setOption(3, true)} onMouseLeave={() => setOption(3, false)} onClick={() => {setStep(2); setLastOption(3);}}>
                        The local park
                    </p>
                </div>
            </div>
        );
    }


    function step2() {
        setVideoTime(100, 120);
        // if(parentDiv.current !== null) {
        //     console.log(parentDiv.current);
        //     parentDiv.current.style.backgroundImage = 'none';
        // }

        return (
            <div className="dialogue" key={step}>
                <h1 className="fade-in">
                    You and John are having a conversation at his house. John mentions that he just went 
                    through a breakup and that his classes are difficult. What is your response to his 
                    initial statement?
                </h1>

                <div className="last-dialogue-option">
                    {lastOption === 1 ? (
                        <p>John's house</p>
                    ) : lastOption === 2 ? (
                        <p>The local Chipotle</p>
                    ) : (
                        <p>The local park</p>
                    )}
                </div>

                <div className="dialogue-options fade-in-longer">
                    <p className='white-background' ref={option1} onMouseEnter={() => setOption(1, true)} onMouseLeave={() => setOption(1, false)} onClick={() => {setStep(4); setLastOption(1); setOption(1, false);}}>
                        "There's plenty of fish in the sea."
                    </p>
                    <p className='white-background' ref={option2} onMouseEnter={() => setOption(2, true)} onMouseLeave={() => setOption(2, false)} onClick={() => {setStep(4); setLastOption(2); setOption(2, false);}}>
                        "I'm sorry to hear that."
                    </p>
                    <p className='white-background' ref={option3} onMouseEnter={() => setOption(3, true)} onMouseLeave={() => setOption(3, false)} onClick={() => {setStep(3); setLastStep(2); setLastOption(3); setOption(3, false);}}>
                        "Breakups are tough."
                    </p>
                </div>
            </div>
        );
    }

    function step3() {
        setVideoTime(80, 100);

        return (
            <div className="dialogue" key={step}>
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
                    <p className='white-background' ref={option1} onMouseEnter={() => setOption(1, true)} onMouseLeave={() => setOption(1, false)} onClick={() => {setStep(4); setLastOption(1);}}>
                        "Yeah, you should just move on"
                    </p>
                    <p className='white-background' ref={option2} onMouseEnter={() => setOption(2, true)} onMouseLeave={() => setOption(2, false)} onClick={() => {setStep(4); setLastOption(2);}}>
                        "It's okay to feel sad about it. Breakups are hard and will take time to heal."
                    </p>
                    <p className='white-background' ref={option3} onMouseEnter={() => setOption(3, true)} onMouseLeave={() => setOption(3, false)} onClick={() => {setStep(4); setLastOption(3);}}>
                        "It's okay to be sad, but eventually, you're going to have to move on."
                    </p>
                </div>
            </div>
        );
    }

    function step4() {
        return (
            <div className="dialogue" key={step}>
                <h1 className="fade-in">
                    " I just feel so sad and hopeless, like this feeling will never pass"
                </h1>

                {lastStep === 2 ? (
                    <div className="last-dialogue-option">
                        <p>"Breakups are tough."</p>
                    </div>
                ) : (
                    <div className="last-dialogue-option">
                        {lastOption === 1 ? (
                            <p>"Yeah, you should just move on"</p>
                        ) : lastOption === 2 ? (
                            <p>"It's okay to feel sad about it. Breakups are hard and will take time to heal."</p>
                        ) : (
                            <p>"It's okay to be sad, but eventually, you're going to have to move on."</p>
                        )}
                    </div>
                )}


                <div className="dialogue-options fade-in-longer">
                    <p className='white-background' ref={option1} onMouseEnter={() => setOption(1, true)} onMouseLeave={() => setOption(1, false)} onClick={() => {setStep(6); setLastOption(1);}}>
                        "I went through the same thing last year. It'll pass."
                    </p>
                    <p className='white-background' ref={option2} onMouseEnter={() => setOption(2, true)} onMouseLeave={() => setOption(2, false)} onClick={() => {setStep(5); setLastStep(4); setLastOption(2);}}>
                        "Don't let the sad stuff get to your head. Focus on what makes you happy."
                    </p>
                    <p className='white-background' ref={option3} onMouseEnter={() => setOption(3, true)} onMouseLeave={() => setOption(3, false)} onClick={() => {setStep(6); setLastOption(3);}}>
                        "It's okay to feel sad and hopeless. I am here for you if you need to talk or need a distraction"
                    </p>
                </div>
            </div>
        );
    }

    function step5() {
        return (
            <div className="dialogue" key={step}>
                <h1 className="fade-in">
                    "Nothing really makes me happy anymore. Things that used to interest me just don't get me excited anymore."
                </h1>


                <div className="last-dialogue-option">
                    <p>"Don't let the sad stuff get to your head. Focus on what makes you happy."</p>
                </div>


                <div className="dialogue-options fade-in-longer">
                    <p className='white-background' ref={option1} onMouseEnter={() => setOption(1, true)} onMouseLeave={() => setOption(1, false)} onClick={() => {setStep(6); setLastOption(1);}}>
                        [ Recommend some fun activities ]
                    </p>
                    <p className='white-background' ref={option2} onMouseEnter={() => setOption(2, true)} onMouseLeave={() => setOption(2, false)} onClick={() => {setStep(6); setLastOption(2);}}>
                        "If there's nothing that makes you happy then there really is nothing else you can do"
                    </p>
                    <p className='white-background' ref={option3} onMouseEnter={() => setOption(3, true)} onMouseLeave={() => setOption(3, false)} onClick={() => {setStep(6); setLastOption(3);}}>
                        "What were some of the things that used to make you happy?"
                    </p>
                </div>
            </div>
        );
    }

    function step6() {
        return (
            <div className="dialogue" key={step}>
                <h1 className="fade-in">
                    ....................................
                </h1>


                {lastStep === 4 ? (
                    <div className="last-dialogue-option">
                        <p>"Don't let the sad stuff get to your head. Focus on what makes you happy."</p>
                    </div>
                ) : (
                    <div className="last-dialogue-option">
                        {lastOption === 1 ? (
                            <p>[ Recommend some fun activities ]</p>
                        ) : lastOption === 2 ? (
                            <p>"If there's nothing that makes you happy then there really is nothing else you can do"</p>
                        ) : (
                            <p>"What were some of the things that used to make you happy?"</p>
                        )}
                    </div>
                )}


                <div className="dialogue-options fade-in-longer">
                    <p className='white-background' ref={option1} onMouseEnter={() => setOption(1, true)} onMouseLeave={() => setOption(1, false)} onClick={() => {setStep(8); setLastOption(1);}}>
                        [ Change the topic ]
                    </p>
                    <p className='white-background' ref={option2} onMouseEnter={() => setOption(2, true)} onMouseLeave={() => setOption(2, false)} onClick={() => {setStep(8); setLastOption(2);}}>
                        [ Prompt John for more details about his situation ]
                    </p>
                    <p className='white-background' ref={option3} onMouseEnter={() => setOption(3, true)} onMouseLeave={() => setOption(3, false)} onClick={() => {setStep(7); setLastStep(6); setLastOption(3);}}>
                        [ Show him a funny meme ]
                    </p>
                </div>
            </div>
        );
    }

    function step7() {
        return (
            <div className="dialogue" key={step}>
                <h1 className="fade-in">
                    [ John laughts at the meme ] The smile doesn't last long and he is obviously still sad. Why do you think John might still be sad?
                </h1>


                <div className="last-dialogue-option">
                    <p>[ Show him a funny meme ]</p>
                </div>


                <div className="dialogue-options fade-in-longer">
                    <p className='white-background' ref={option1} onMouseEnter={() => setOption(1, true)} onMouseLeave={() => setOption(1, false)} onClick={() => {setStep(8); setLastOption(1);}}>
                        The stess of school and his breakup are too much.
                    </p>
                    <p className='white-background' ref={option2} onMouseEnter={() => setOption(2, true)} onMouseLeave={() => setOption(2, false)} onClick={() => {setStep(8); setLastOption(2);}}>
                        He's just always sad.
                    </p>
                    <p className='white-background' ref={option3} onMouseEnter={() => setOption(3, true)} onMouseLeave={() => setOption(3, false)} onClick={() => {setStep(8); setLastOption(3);}}>
                        He does not want to be happy.
                    </p>
                </div>
            </div>
        );
    }

    function step8() {
        return (
            <div className="dialogue" key={step}>
                <h1 className="fade-in">
                    "I haven't been sleeping well lately either and don't know what to do about it"
                </h1>


                {lastStep === 6 ? (
                    <div className="last-dialogue-option">
                        {lastOption === 1 ? (
                            <p>[ Change the topic ]</p>
                        ) : (
                            <p>[ Prompt John for more details about his situation ]</p>
                        )}
                    </div>
                ) : (
                    <div className="last-dialogue-option">
                        {lastOption === 1 ? (
                            <p>The stess of school and his breakup are too much.</p>
                        ) : lastOption === 2 ? (
                            <p>He's just always sad.</p>
                        ) : (
                            <p>He does not want to be happy.</p>
                        )}
                    </div>
                )}


                <div className="dialogue-options fade-in-longer">
                    <p className='white-background' ref={option1} onMouseEnter={() => setOption(1, true)} onMouseLeave={() => setOption(1, false)} onClick={() => {setStep(8); setLastOption(1);}}>
                        "Have you talked to a professional yet?"
                    </p>
                    <p className='white-background' ref={option2} onMouseEnter={() => setOption(2, true)} onMouseLeave={() => setOption(2, false)} onClick={() => {setStep(8); setLastOption(2);}}>
                        "Are you taking any sleep aids to help?"
                    </p>
                    <p className='white-background' ref={option3} onMouseEnter={() => setOption(3, true)} onMouseLeave={() => setOption(3, false)} onClick={() => {setStep(8); setLastOption(3);}}>
                        "This will also pass."
                    </p>
                </div>
            </div>
        );
    }
}


export default FriendDepression;