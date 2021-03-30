import { useState, useEffect, useRef } from 'react';
import LoadingScreen from '../LoadingScreen.jsx';
import FriendScenarios from '../FriendScenarios';
import '../../css/simulations.css';
import video from '../../video/test.webm';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';


function FriendDepression() {
    const [isLoaded, setisLoaded] = useState(false);
    const [step, setStep] = useState(0);
    const [lastStep, setLastStep] = useState(0);
    const [lastOption, setLastOption] = useState(0);
    const option1 = useRef(null);
    const option2 = useRef(null);
    const option3 = useRef(null);
    const friendDepressionVid = useRef(null);
    const [open, setOpen] = useState({
        zero1: false, zero2: false,
        one1: false, one2: false,
        two1: false, two2: false,
        three1: false, three2: false, 
        four1: false, four2: false, 
        five1: false, five2: false, 
        six1: false, six2: false,
        seven1: false, seven2: false,
        eight1: false, eight2: false,
        nine1: false, nine2: false,
        ten1: false, ten2: false,
    });


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

    // fades out options when hovering
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

            case 7:
                return step7();
            
            case 8:
                return step8();

            case 9:
                return step9();

            case 10:
                return step10();

            case 11:
                return step11();

            case 12:
                return step12();

            default:
                break;
        }
    }






    /****************** Steps **********************/
    // evens are main, odds are alternate

    function step0() {
        return (
            <div className="dialogue" key={step}>
                <h1>
                    Your friend, John, might be dealing with depression and you want to talk to them about it.
                    What's the best method to have this conversation?
                </h1>

                <div className="dialogue-options">
                    <p className='white-background' ref={option1} onMouseEnter={() => setOption(1, true)} onMouseLeave={() => setOption(1, false)} onClick={() => {setOpen(state => ({...state, zero2: true})); setLastOption(1);}}>
                        [ Send him a text ]
                    </p>
                    <p className='white-background' ref={option2} onMouseEnter={() => setOption(2, true)} onMouseLeave={() => setOption(2, false)} onClick={() => {setStep(1); setLastOption(2);}}>
                        [ Meet him in person ]
                    </p>
                    <p className='white-background' ref={option3} onMouseEnter={() => setOption(3, true)} onMouseLeave={() => setOption(3, false)} onClick={() => {setOpen(state => ({...state, zero1: true})); setLastOption(3);}}>
                        [ Facetime him ]
                    </p>
                </div>
                <Dialog open={open.zero1} onClose={() => {setStep(1); setOpen(state => ({...state, zero1: false}));}}>    
                    <DialogContent className="popup">
                        <p>While during COVID this is the preferred solution, face to face communication promotes openness.</p>
                        <div className="click-to-close"  onClick={() => {setStep(1); setOpen(state => ({...state, zero1: false}));}}>
                            <p>[ Click to continue ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
                <Dialog open={open.zero2} onClose={() => {setOpen(state => ({...state, zero2: false}));}}>
                    <DialogContent className="popup">
                        <p>A topic this sensitive should be discussed face to face.</p>
                        <div className="click-to-close"  onClick={() => {setOpen(state => ({...state, zero2: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
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
                    <p className='white-background' ref={option2} onMouseEnter={() => setOption(2, true)} onMouseLeave={() => setOption(2, false)} onClick={() => {setOpen(state => ({...state, one2: true})); setLastOption(2);}}>
                        The local Chipotle
                    </p>
                    <p className='white-background' ref={option3} onMouseEnter={() => setOption(3, true)} onMouseLeave={() => setOption(3, false)} onClick={() => {setOpen(state => ({...state, one1: true})); setLastOption(3);}}>
                        The local park
                    </p>
                </div>
                <Dialog open={open.one1} onClose={() => {setStep(2); setOpen(state => ({...state, one1: false}));}}>    
                    <DialogContent className="popup">
                        <p>While this can be a peaceful environment, some may not feel like they can speak openly in public.</p>
                        <div className="click-to-close" onClick={() => {setStep(2); setOpen(state => ({...state, one1: false}));}}>
                            <p>[ Click to continue ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
                <Dialog open={open.one2} onClose={() => {setOpen(state => ({...state, one2: false}));}}>
                    <DialogContent className="popup">
                        <p>Research shows that a calm and controlled environment is beneficial to open communication.</p>
                        <div className="click-to-close" onClick={() => {setOpen(state => ({...state, one2: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
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
                    <p className='white-background' ref={option1} onMouseEnter={() => setOption(1, true)} onMouseLeave={() => setOption(1, false)} onClick={() => {setOpen(state => ({...state, two2: true})); setLastOption(1);}}>
                        "There's plenty of fish in the sea."
                    </p>
                    <p className='white-background' ref={option2} onMouseEnter={() => setOption(2, true)} onMouseLeave={() => setOption(2, false)} onClick={() => {setStep(4); setLastOption(2);}}>
                        "I'm sorry to hear that."
                    </p>
                    <p className='white-background' ref={option3} onMouseEnter={() => setOption(3, true)} onMouseLeave={() => setOption(3, false)} onClick={() => {setOpen(state => ({...state, two1: true})); setLastStep(2); setLastOption(3);}}>
                        "Breakups are tough."
                    </p>
                </div>
                <Dialog open={open.two1} onClose={() => {setStep(3); setOpen(state => ({...state, two1: false}));}}>    
                    <DialogContent className="popup">
                        <p>Acknowledging the difficulty of the situation is good, but turning the focus towards John will help him open up further.</p>
                        <div className="click-to-close" onClick={() => {setStep(3); setOpen(state => ({...state, two1: false}));}}>
                            <p>[ Click to continue ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
                <Dialog open={open.two2} onClose={() => {setOpen(state => ({...state, two2: false}));}}>
                    <DialogContent className="popup">
                        <p>
                            Turning the focus away from John and ignoring his feelings is not the right thing to do in this situation.
                            The focus is on John. Try acknowledging his feelings.
                        </p>
                        <div className="click-to-close" onClick={() => {setOpen(state => ({...state, two2: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
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
                    <p>"Breakups are tough."</p>
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
                    "I just feel so sad and hopeless, like this feeling will never pass"
                </h1>

                {lastStep === 2 ? (
                    <div className="last-dialogue-option">
                        {lastOption === 1 ? (
                            <p>"Yeah, you should just move on"</p>
                        ) : lastOption === 2 ? (
                            <p>"It's okay to feel sad about it. Breakups are hard and will take time to heal."</p>
                        ) : (
                            <p>"It's okay to be sad, but eventually, you're going to have to move on."</p>
                        )}
                    </div>
                ) : (
                    <div className="last-dialogue-option">
                        {lastOption === 1 ? (
                            <p>"There's plenty of fish in the sea."</p>
                        ) : (
                            <p>"I'm sorry to hear that."</p>
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
                        {lastOption === 1 ? (
                            <p>[ Recommend some fun activities ]</p>
                        ) : lastOption === 2 ? (
                            <p>"If there's nothing that makes you happy then there really is nothing else you can do"</p>
                        ) : (
                            <p>"What were some of the things that used to make you happy?"</p>
                        )}
                    </div>
                ) : (
                    <div className="last-dialogue-option">
                        {lastOption === 1 ? (
                            <p>"I went through the same thing last year. It'll pass."</p>
                        ) : (
                            <p>"It's okay to feel sad and hopeless. I am here for you if you need to talk or need a distraction"</p>
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
                    [ You ask John for more details about his situation ]. "Honestly, I haven't been sleeping
                    well lately and I'm not sure what to do."
                </h1>


                {lastStep === 6 ? (
                    <div className="last-dialogue-option">
                        {lastOption === 1 ? (
                            <p>The stess of school and his breakup are too much.</p>
                        ) : lastOption === 2 ? (
                            <p>He's just always sad.</p>
                        ) : (
                            <p>He does not want to be happy.</p>
                        )}
                    </div>
                ) : (
                    <div className="last-dialogue-option">
                        {lastOption === 1 ? (
                            <p>[ Change the topic ]</p>
                        ) : (
                            <p>[ Prompt John for more details about his situation ]</p>
                        )}
                    </div>
                )}


                <div className="dialogue-options fade-in-longer">
                    <p className='white-background' ref={option1} onMouseEnter={() => setOption(1, true)} onMouseLeave={() => setOption(1, false)} onClick={() => {setStep(10); setLastOption(1);}}>
                        "Have you talked to a professional yet?"
                    </p>
                    <p className='white-background' ref={option2} onMouseEnter={() => setOption(2, true)} onMouseLeave={() => setOption(2, false)} onClick={() => {setStep(9); setLastStep(8); setLastOption(2);}}>
                        "Are you taking any sleep aids to help?"
                    </p>
                    <p className='white-background' ref={option3} onMouseEnter={() => setOption(3, true)} onMouseLeave={() => setOption(3, false)} onClick={() => {setStep(10); setLastOption(3);}}>
                        "This will also pass."
                    </p>
                </div>
            </div>
        );
    }

    function step9() {  
        return (
            <div className="dialogue" key={step}>
                <h1 className="fade-in">
                    "My work has sucked lately, I think my sleep schedule is messed up. This last week I couldn't 
                    sleep without medicine"
                </h1>


                <div className="last-dialogue-option">
                    <p>"Are you taking any sleep aids to help?"</p>
                </div>


                <div className="dialogue-options fade-in-longer">
                    <p className='white-background' ref={option1} onMouseEnter={() => setOption(1, true)} onMouseLeave={() => setOption(1, false)} onClick={() => {setStep(10); setLastOption(1);}}>
                        "Sleeping medicine will help you sleep, but it's not treating the underlying issue. Talking to
                        a professional might be more useful."
                    </p>
                    <p className='white-background' ref={option2} onMouseEnter={() => setOption(2, true)} onMouseLeave={() => setOption(2, false)} onClick={() => {setStep(10); setLastOption(2);}}>
                        "You just need to give it more time, eventually the stress and heartbreak will go away"
                    </p>
                    <p className='white-background' ref={option3} onMouseEnter={() => setOption(3, true)} onMouseLeave={() => setOption(3, false)} onClick={() => {setStep(10); setLastOption(3);}}>
                        "Have you heard of<em>SleepNow</em>? I hear it works amazingly!"
                    </p>
                </div>
            </div>
        );
    }

    function step10() {
        return (
            <div className="dialogue" key={step}>
                <h1 className="fade-in">
                    "I'm not sick! I'm just heartbroken and stressed out!" [ What does John's reaction prompt you to think about? ]
                </h1>


                {lastStep === 8 ? (
                    <div className="last-dialogue-option">
                        {lastOption === 1 ? (
                            <p>
                                "Sleeping medicine will help you sleep, but it's not treating the underlying issue. Talking to
                                a professional might be more useful."
                            </p>
                        ) : lastOption === 2 ? (
                            <p>"You just need to give it more time, eventually the stress and heartbreak will go away"</p>
                        ) : (
                            <p>"Have you heard of<em>SleepNow</em>? I hear it works amazingly!"</p>
                        )}
                    </div>
                ) : (
                    <div className="last-dialogue-option">
                        {lastOption === 1 ? (
                            <p>"Have you talked to a professional yet?"</p>
                        ) : (
                            <p>"This will also pass."</p>
                        )}
                    </div>
                )}


                <div className="dialogue-options fade-in-longer">
                    <p className='white-background' ref={option1} onMouseEnter={() => setOption(1, true)} onMouseLeave={() => setOption(1, false)} onClick={() => {setStep(11); setLastOption(1);}}>
                        He is unaware of the resources available to him.
                    </p>
                    <p className='white-background' ref={option2} onMouseEnter={() => setOption(2, true)} onMouseLeave={() => setOption(2, false)} onClick={() => {setStep(11); setLastOption(2);}}>
                        He may think that talking to a professional means that his situation is dire.
                    </p>
                    <p className='white-background' ref={option3} onMouseEnter={() => setOption(3, true)} onMouseLeave={() => setOption(3, false)} onClick={() => {setStep(11); setLastOption(3);}}>
                        He does not want to confront his feelings.
                    </p>
                </div>
            </div>
        );
    }

    function step11() {
        return (
            <div className="dialogue" key={step}>
                <h1 className="fade-in">
                    "I've never seen a professional for something like this before, neither has anyone I know. Why would I?"
                    [ Why do you think John is hesitant about seeing a professional? ]
                </h1>


                <div className="last-dialogue-option">
                    {lastOption === 1 ? (
                        <p>He is unaware of the resources available to him.</p>
                    ) : lastOption === 2 ? (
                        <p>He may think that talking to a professional means that his situation is dire.</p>
                    ) : (
                        <p>He does not want to confront his feelings.</p>
                    )}
                </div>


                <div className="dialogue-options fade-in-longer">
                    <p className='white-background' ref={option1} onMouseEnter={() => setOption(1, true)} onMouseLeave={() => setOption(1, false)} onClick={() => {setStep(12); setLastOption(1);}}>
                        This stigma surrounding mental health can cause many people to not be aware of the resources available to them.
                    </p>
                    <p className='white-background' ref={option2} onMouseEnter={() => setOption(2, true)} onMouseLeave={() => setOption(2, false)} onClick={() => {setStep(12); setLastOption(2);}}>
                        John does not care about his mental health.
                    </p>
                    <p className='white-background' ref={option3} onMouseEnter={() => setOption(3, true)} onMouseLeave={() => setOption(3, false)} onClick={() => {setStep(12); setLastOption(3);}}>
                        Mental health resources are not available to John.
                    </p>
                </div>
            </div>
        );
    }

    function step12() {
        return (
            <div className="dialogue" key={step}>
                <h1 className="fade-in">
                    [ You and John discuss some of the mental health stigma  ]
                </h1>


                <div className="last-dialogue-option">
                    {lastOption === 1 ? (
                        <p>He is unaware of the resources available to him.</p>
                    ) : lastOption === 2 ? (
                        <p>He may think that talking to a professional means that his situation is dire.</p>
                    ) : (
                        <p>He does not want to confront his feelings.</p>
                    )}
                </div>


                <div className="dialogue-options fade-in-longer">
                    <p className='white-background' ref={option1} onMouseEnter={() => setOption(1, true)} onMouseLeave={() => setOption(1, false)} onClick={() => {setStep(12); setLastOption(1);}}>
                        This stigma surrounding mental health can cause many people to not be aware of the resources available to them.
                    </p>
                    <p className='white-background' ref={option2} onMouseEnter={() => setOption(2, true)} onMouseLeave={() => setOption(2, false)} onClick={() => {setStep(12); setLastOption(2);}}>
                        John does not care about his mental health.
                    </p>
                    <p className='white-background' ref={option3} onMouseEnter={() => setOption(3, true)} onMouseLeave={() => setOption(3, false)} onClick={() => {setStep(12); setLastOption(3);}}>
                        Mental health resources are not available to John.
                    </p>
                </div>
            </div>
        );
    }
}


export default FriendDepression;