import { useState, useEffect, useRef } from 'react';
import LoadingScreen from '../LoadingScreen.jsx';
import FriendScenarios from '../FriendScenarios';
import ProgressBar from '../ProgressBar.jsx';
import '../../css/simulations.css';
import video from '../../video/scenario1.webm';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';


function FriendDepression(props) {
    const [isLoaded, setisLoaded] = useState(false);
    const [step, setStep] = useState(0);
    const [lastStep, setLastStep] = useState(0);
    const [lastOption, setLastOption] = useState(0);
    const option1 = useRef(null);
    const option2 = useRef(null);
    const option3 = useRef(null);
    const friendDepressionVid = useRef(null);
    const [open, setOpen] = useState({
        zero: false,
        one1: false, one2: false,
        two1: false, two2: false,
        three1: false, three2: false, 
        four1: false, four2: false, 
        five1: false, five2: false, 
        six: false,
        seven: false, seven2: false,
        eight1: false, eight2: false,
        nine1: false, nine2: false,
        ten1: false, ten2: false,
        eleven1: false, eleven2: false, eleven3: false,
        twelve1: false, twelve2: false, twelve3: false,
        thirteen1: false, thirteen2: false,
        fourteen: false,
        fifteen1: false, fifteen2: false,
    });


    useEffect(() => {
        friendDepressionVid.current.oncanplaythrough = function() {
            setisLoaded(true);
        };

    }, [isLoaded]);


    function renderVideo(display) {
        return (
            <video autoPlay ref={friendDepressionVid} className="friend-depression-video fade-in" style={{display: display}}>
                <source src={video} type='video/webm' />
            </video>
        );
    }

    function setVideoTime(startTime, endTime) {
        friendDepressionVid.current.currentTime = startTime;

        setTimeout(function(){
            friendDepressionVid.current.play();

            const interval = setInterval(() => {
                if(friendDepressionVid.current !== null) {  //check in case component unmounted
                    if(friendDepressionVid.current.currentTime > endTime) {
                        friendDepressionVid.current.pause();
                        clearInterval(interval);
                    }
                }
                else clearInterval(interval);
            }, 500);
        }, 501);
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

            <div className={step > 1 ? 'simulation background-scenario1' : 'simulation'} onClick={() => friendDepressionVid.current.pause()}>
                <p className="attribution" style={step > 1 ? {} : {display: 'none'}}><a target="_blank" rel="noopener noreferrer" href="http://www.freepik.com">Image designed by pikisuperstar / Freepik</a></p>
                {step > 0 ? renderVideo() : renderVideo('none')}
                {renderDialogue()}

            </div>

            {step < 17 ? (
                <ProgressBar color="#399ADA" width={step / 16 * 100} />
            ) : (<div style={{height: '0'}}></div>)}

        </div>
    );

    // fades out options when hovering
    function setOption(option, state) {
        switch(option) {
            case 1:
                if(state) {
                    option2.current.style.backgroundColor = '#DCDCDC';
                    if(option3.current !== null) option3.current.style.backgroundColor = '#DCDCDC';
                }
                else {
                    option2.current.style.backgroundColor = 'white';
                    if(option3.current !== null) option3.current.style.backgroundColor = 'white';
                }
                break;
    
            case 2:
                if(state) {
                    option1.current.style.backgroundColor = '#DCDCDC';
                    if(option3.current !== null) option3.current.style.backgroundColor = '#DCDCDC';
                }
                else {
                    option1.current.style.backgroundColor = 'white';
                    if(option3.current !== null) option3.current.style.backgroundColor = 'white';
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

      // for first couple of steps when option backgrounds are white
      function setOptionAlt(option, state) {
        switch(option) {
            case 1:
                if(state) {
                    option2.current.style.backgroundColor = '#A2A2A2';
                    if(option3.current !== null) option3.current.style.backgroundColor = '#A2A2A2';
                }
                else {
                    option2.current.style.backgroundColor = '#758FB4';
                    if(option3.current !== null) option3.current.style.backgroundColor = '#758FB4';
                }
                break;
    
            case 2:
                if(state) {
                    option1.current.style.backgroundColor = '#A2A2A2';
                    if(option3.current !== null) option3.current.style.backgroundColor = '#A2A2A2';
                }
                else {
                    option1.current.style.backgroundColor = '#758FB4';
                    if(option3.current !== null) option3.current.style.backgroundColor = '#758FB4';
                }
                break;
    
            case 3:
                if(state) {
                    option1.current.style.backgroundColor = '#A2A2A2';
                    option2.current.style.backgroundColor = '#A2A2A2';
                }
                else {
                    option1.current.style.backgroundColor = '#758FB4';
                    option2.current.style.backgroundColor = '#758FB4';
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

            case 13:
                return step13();

            case 14:
                return step14();

            case 15:
                return step15();

            case 16:
                return step16();

            case 17:
                return step17();

            default:
                break;
        }
    }






    /****************** Steps **********************/
    // evens are main, odds are alternate

    function step0() {
        setVideoTime(0, 0);

        return (
            <div className="dialogue blue-background" key={step}>
                <h1>
                    Your friend John might be dealing with depression and you want to talk to them about it.
                    What's the best method to have this conversation?
                </h1>

                <div className="dialogue-options">
                    <p ref={option1} onMouseEnter={() => setOptionAlt(1, true)} onMouseLeave={() => setOptionAlt(1, false)} onClick={() => {setOpen(state => ({...state, zero: true})); setLastOption(1);}}>
                        [ Send him a text ]
                    </p>
                    <p ref={option2} onMouseEnter={() => setOptionAlt(2, true)} onMouseLeave={() => setOptionAlt(2, false)} onClick={() => {setStep(1); setLastOption(2);}}>
                        [ Meet him in person ]
                    </p>
                    <p ref={option3} onMouseEnter={() => setOptionAlt(3, true)} onMouseLeave={() => setOptionAlt(3, false)} onClick={() => {setOpen(state => ({...state, zero: true})); setLastOption(3);}}>
                        [ Facetime him ]
                    </p>
                </div>
                <Dialog open={open.zero} disableBackdropClick onClose={() => {setOpen(state => ({...state, zero: false}));}}>    
                    <DialogContent className="popup">
                        <p>During Covid facetiming may be best, but Face to Face communication promotes "feel good chemicals" like oxytocin.</p>
                        <p><a href="https://www.ahealthiermichigan.org/2015/04/10/importance-face-to-face-communication/" target="_blank" rel="noopener noreferrer">Why You Still Need Face-to-Face Communication</a></p>
                        <div className="click-to-close"  onClick={() => {setOpen(state => ({...state, zero: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }

    function step1() {
        setVideoTime(7.5, 8);

        return (
            <div className="dialogue blue-background" key={step}>
                <h1 className="fade-in">
                    John has agreed to meet with you in person. Where is the most appropriate place to meet?
                </h1>

                <div className="last-dialogue-option">
                    {lastOption === 1 ? (
                        <p style={{backgroundColor: '#758FB4', color: 'white'}}>[ Send him a text ]</p>
                    ) : lastOption === 2 ? (
                        <p style={{backgroundColor: '#758FB4', color: 'white'}}>[ Meet him in person ]</p>
                    ) : (
                        <p style={{backgroundColor: '#758FB4', color: 'white'}}>[ Facetime him ]</p>
                    )}
                </div>

                <div className="dialogue-options fade-in-longer" key={step}>
                    <p ref={option1} onMouseEnter={() => setOptionAlt(1, true)} onMouseLeave={() => setOptionAlt(1, false)} onClick={() => {setStep(2); setLastOption(1);}}>
                        John's house
                    </p>
                    <p ref={option2} onMouseEnter={() => setOptionAlt(2, true)} onMouseLeave={() => setOptionAlt(2, false)} onClick={() => {setOpen(state => ({...state, one2: true})); setLastOption(2);}}>
                        The local Chipotle
                    </p>
                    <p ref={option3} onMouseEnter={() => setOptionAlt(3, true)} onMouseLeave={() => setOptionAlt(3, false)} onClick={() => {setOpen(state => ({...state, one1: true})); setLastOption(3);}}>
                        The local park
                    </p>
                </div>
                <Dialog open={open.one1} disableBackdropClick onClose={() => {setOpen(state => ({...state, one1: false}));}}>    
                    <DialogContent className="popup">
                        <p>While this can be a peaceful environment, some may not feel like they can speak openly in public.</p>
                        <div className="click-to-close" onClick={() => {setOpen(state => ({...state, one1: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
                <Dialog open={open.one2} disableBackdropClick onClose={() => {setOpen(state => ({...state, one2: false}));}}>
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
        if(!open.two1 && !open.two2) setVideoTime(99.5, 107.75);

        return (
            <div className="dialogue blue-white-background" key={step}>
                <h1 className="fade-in">
                    [ You and John are having a conversation at his house. ] 
                    "I’m feeling really stressed out and sad right now. My classes are just really difficult 
                    this semester and to add to all of that, my girlfriend just broke up with me!"
                    What is your response?
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
                    <p ref={option1} onMouseEnter={() => setOption(1, true)} onMouseLeave={() => setOption(1, false)} onClick={() => {setOpen(state => ({...state, two2: true})); setLastOption(1);}}>
                        "There's plenty of fish in the sea."
                    </p>
                    <p ref={option2} onMouseEnter={() => setOption(2, true)} onMouseLeave={() => setOption(2, false)} onClick={() => {setStep(4); setLastOption(2);}}>
                        "Would you like to tell me about it?"
                    </p>
                    <p ref={option3} onMouseEnter={() => setOption(3, true)} onMouseLeave={() => setOption(3, false)} onClick={() => {setOpen(state => ({...state, two1: true})); setLastStep(2); setLastOption(3);}}>
                        "Breakups are tough."
                    </p>
                </div>
                <Dialog open={open.two1} disableBackdropClick onClose={() => {setStep(3); setOpen(state => ({...state, two1: false}));}}>    
                    <DialogContent className="popup">
                        <p>If you're one of John's close friends, try and provide him a chance to talk about how he feels. Even the general stress of life can get you down.</p>
                        <p><a href="https://www.arcadia.edu/life-arcadia/campus-services/wellness-services/counseling-services/resources/how-help-friend" target="_blank" rel="noopener noreferrer">How to Help a Friend Who's Struggling Emotionally</a></p>
                        <div className="click-to-close" onClick={() => {setStep(3); setOpen(state => ({...state, two1: false}));}}>
                            <p>[ Click to continue ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
                <Dialog open={open.two2} disableBackdropClick onClose={() => {setOpen(state => ({...state, two2: false}));}}>
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
        if(!open.three1 && !open.three2) setVideoTime(3, 6.5);    // only plays video when dialog is not open

        return (
            <div className="dialogue blue-white-background" key={step}>
                <h1 className="fade-in">
                    [ John looks sad after you say this. ] "I know breakups are tough, I just need to get over myself"
                </h1>

                <div className="last-dialogue-option">
                    <p>"Breakups are tough."</p>
                </div>

                <div className="dialogue-options fade-in-longer">
                    <p ref={option1} onMouseEnter={() => setOption(1, true)} onMouseLeave={() => setOption(1, false)} onClick={() => {setOpen(state => ({...state, three2: true})); setLastOption(1);}}>
                        "Yeah, you should just move on"
                    </p>
                    <p ref={option2} onMouseEnter={() => setOption(2, true)} onMouseLeave={() => setOption(2, false)} onClick={() => {setStep(4); setLastOption(2);}}>
                        "It's okay to feel sad about it. Breakups are hard and will take time to heal."
                    </p>
                    <p ref={option3} onMouseEnter={() => setOption(3, true)} onMouseLeave={() => setOption(3, false)} onClick={() => {setOpen(state => ({...state, three1: true})); setLastOption(3);}}>
                        "It's okay to be sad, but at least you had a relationship."
                    </p>
                </div>
                <Dialog open={open.three1} disableBackdropClick onClose={() => {setStep(4); setOpen(state => ({...state, three1: false}));}}>    
                    <DialogContent className="popup">
                        <p>Communicate your understanding of his feelings. avoiding the "at least" statements will help to keep focus on John's feelings.</p>
                        <p><a href="https://psychcentral.com/blog/how-to-help-someone-going-through-a-tough-time#1" target="_blank" rel="noopener noreferrer">How to Help Someone Going Through a Tough Time</a></p>
                        <div className="click-to-close" onClick={() => {setStep(4); setOpen(state => ({...state, three1: false}));}}>
                            <p>[ Click to continue ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
                <Dialog open={open.three2} disableBackdropClick onClose={() => {setOpen(state => ({...state, three2: false}));}}>
                    <DialogContent className="popup">
                        <p>
                            Turning the focus away from John and ignoring his feelings is not the right thing to do in this situation.
                            The focus is on John. Try acknowledging his feelings.
                        </p>
                        <div className="click-to-close" onClick={() => {setOpen(state => ({...state, three2: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }

    function step4() {
        if(!open.four1 && !open.four2) setVideoTime(11, 16);    // only plays video when dialog is not open

        return (
            <div className="dialogue blue-white-background" key={step}>
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
                            <p>"It's okay to be sad, but at least you had a relationship."</p>
                        )}
                    </div>
                ) : (
                    <div className="last-dialogue-option">
                        {lastOption === 1 ? (
                            <p>"There's plenty of fish in the sea."</p>
                        ) : (
                            <p>"Would you like to tell me about it?"</p>
                        )}
                    </div>
                )}


                <div className="dialogue-options fade-in-longer">
                    <p ref={option1} onMouseEnter={() => setOption(1, true)} onMouseLeave={() => setOption(1, false)} onClick={() => {setOpen(state => ({...state, four2: true})); setLastOption(1);}}>
                        "I went through the same thing last year. It'll pass."
                    </p>
                    <p ref={option2} onMouseEnter={() => setOption(2, true)} onMouseLeave={() => setOption(2, false)} onClick={() => {setOpen(state => ({...state, four1: true})); setLastStep(4); setLastOption(2);}}>
                        "Don't let the sad stuff get to your head. Focus on what makes you happy."
                    </p>
                    <p ref={option3} onMouseEnter={() => setOption(3, true)} onMouseLeave={() => setOption(3, false)} onClick={() => {setStep(6); setLastOption(3);}}>
                        "It's okay to feel sad and hopeless. I am here for you if you need to talk or need a distraction"
                    </p>
                </div>

                <Dialog open={open.four1} disableBackdropClick onClose={() => {setStep(5); setOpen(state => ({...state, four1: false}));}}>    
                    <DialogContent className="popup">
                        <p>Promoting healthy coping skills such as hobbies is good, but if John is suffering he may not be able to maintain his normal habits.</p>
                        <div className="click-to-close" onClick={() => {setStep(5); setOpen(state => ({...state, four1: false}));}}>
                            <p>[ Click to continue ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
                <Dialog open={open.four2} disableBackdropClick onClose={() => {setOpen(state => ({...state, four2: false}));}}>
                    <DialogContent className="popup">
                        <p>
                            While empathizing may be beneficial, focusing on John will help him the most right now. Sometimes the future seems too far off.
                        </p>
                        <div className="click-to-close" onClick={() => {setOpen(state => ({...state, four2: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }

    function step5() {
        if(!open.five1 && !open.five2) setVideoTime(19.5, 25);    // only plays video when dialog is not open

        return (
            <div className="dialogue blue-white-background" key={step}>
                <h1 className="fade-in">
                    "Nothing really makes me happy anymore. Things that used to interest me just don't get me excited anymore."
                </h1>


                <div className="last-dialogue-option">
                    <p>"Don't let the sad stuff get to your head. Focus on what makes you happy."</p>
                </div>


                <div className="dialogue-options fade-in-longer">
                    <p ref={option1} onMouseEnter={() => setOption(1, true)} onMouseLeave={() => setOption(1, false)} onClick={() => {setOpen(state => ({...state, five1: true})); setLastOption(1);}}>
                        "That sounds like a rough time, why don't you come with me to the gym later?"
                    </p>
                    <p ref={option2} onMouseEnter={() => setOption(2, true)} onMouseLeave={() => setOption(2, false)} onClick={() => {setOpen(state => ({...state, five2: true})); setLastOption(2);}}>
                        "If there's nothing that makes you happy then there really is nothing else you can do"
                    </p>
                    <p ref={option3} onMouseEnter={() => setOption(3, true)} onMouseLeave={() => setOption(3, false)} onClick={() => {setStep(6); setLastOption(3);}}>
                        "What were some of the things that used to make you happy?"
                    </p>
                </div>
                <Dialog open={open.five1} disableBackdropClick onClose={() => {setStep(6); setOpen(state => ({...state, five1: false}));}}>    
                    <DialogContent className="popup">
                        <p>Physical activity and energy are important factors in emotional stability, but you should keep the focus on John.</p>
                        <p><a href="https://www.betterhelp.com/advice/general/why-is-it-that-nothing-makes-me-happy/" target="_blank" rel="noopener noreferrer">Why Is It That Nothing Makes Me Happy</a></p>
                        <div className="click-to-close" onClick={() => {setStep(6); setOpen(state => ({...state, five1: false}));}}>
                            <p>[ Click to continue ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
                <Dialog open={open.five2} disableBackdropClick onClose={() => {setOpen(state => ({...state, five2: false}));}}>
                    <DialogContent className="popup">
                        <p>
                            Try Again
                        </p>
                        <div className="click-to-close" onClick={() => {setOpen(state => ({...state, five2: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }

    function step6() {
        if(!open.six1 && !open.six2) setVideoTime(112, 116);    // only plays video when dialog is not open

        return (
            <div className="dialogue blue-white-background" key={step}>
                <h1 className="fade-in">
                    "I don't know, everything seems so pointless..." There is now a quiet moment in your conversation. It feels like neither one of you has anything to say.
                    What should your next step be?
                </h1>


                {lastStep === 4 ? (
                    <div className="last-dialogue-option">
                        {lastOption === 1 ? (
                            <p>"That sounds like a rough time, why don't you come with me to the gym later?"</p>
                        ) : (
                            <p>"What were some of the things that used to make you happy?"</p>
                        )}
                    </div>
                ) : (
                    <div className="last-dialogue-option">
                        <p>"It's okay to feel sad and hopeless. I am here for you if you need to talk or need a distraction"</p>
                    </div>
                )}


                <div className="dialogue-options fade-in-longer">
                    <p ref={option1} onMouseEnter={() => setOption(1, true)} onMouseLeave={() => setOption(1, false)} onClick={() => {setOpen(state => ({...state, six: true})); setLastOption(1);}}>
                        [ Change the topic ]
                    </p>
                    <p ref={option2} onMouseEnter={() => setOption(2, true)} onMouseLeave={() => setOption(2, false)} onClick={() => {setStep(7); setLastOption(2);}}>
                        "Have you had any thoughts of harming yourself or others?"
                    </p>
                </div>
                <Dialog open={open.six} disableBackdropClick onClose={() => {setOpen(state => ({...state, six: false}));}}>
                    <DialogContent className="popup">
                        <p>
                            John is probably thinking or processing how he feels, try keeping the conversation on him!
                        </p>
                        <div className="click-to-close" onClick={() => {setOpen(state => ({...state, six: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }

    function step7() {
        if(!open.seven1 && !open.seven2) setVideoTime(120, 123.75);    // only plays video when dialog is not open

        return (
            <div className="dialogue blue-white-background" key={step}>
                <h1 className="fade-in">
                    "I mean, who hasn't thought of it?"
                </h1>


                <div className="last-dialogue-option">
                    <p>"Have you had any thoughts of harming yourself or others?"</p>
                </div>


                <div className="dialogue-options fade-in-longer">
                    <p ref={option1} onMouseEnter={() => setOption(1, true)} onMouseLeave={() => setOption(1, false)} onClick={() => {setOpen(state => ({...state, seven1: true})); setLastOption(1);}}>
                        "Man you're right on that, sometimes I get really frustrated too. I always find someone to call up so that I can hang, why don't you call me more often?"
                    </p>
                    <p ref={option2} onMouseEnter={() => setOption(2, true)} onMouseLeave={() => setOption(2, false)} onClick={() => {setOpen(state => ({...state, seven1: true})); setLastOption(2);}}>
                        "Dude that's no good, did you get a concussion or something? Cause that's some crazy thinking. I've never heard you like this before."
                    </p>
                    <p ref={option3} onMouseEnter={() => setOption(3, true)} onMouseLeave={() => setOption(3, false)} onClick={() => {setOpen(state => ({...state, seven2: true})); setLastOption(3);}}>
                        "I understand things are rough, healing takes time. Just know that no matter how opeless you feel you're not alone. Would you like to tell me more about what's been going on?"
                    </p>
                </div>
                <Dialog open={open.seven1} disableBackdropClick onClose={() => {setOpen(state => ({...state, seven1: false}));}}>    
                    <DialogContent className="popup">
                        <p>Try Again</p>
                        <div className="click-to-close" onClick={() => {setOpen(state => ({...state, seven1: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
                <Dialog open={open.seven2} disableBackdropClick>    
                    <DialogContent className="popup">
                        <p>John has just told you that he has had suicidal thoughts recently. There are mental health professionals who are able to help people like John.</p>
                        <div className="click-to-close" onClick={() => {setStep(8); setOpen(state => ({...state, seven2: false}));}}>
                            <p>[ Click to continue ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }

    function step8() {
        if(!open.eight1 && !open.eight2) setVideoTime(33, 38);    // only plays video when dialog is not open

        return (
            <div className="dialogue blue-white-background" key={step}>
                <h1 className="fade-in">
                    "Honestly, I haven't been sleeping well lately and I'm not sure what to do."
                </h1>


                <div className="last-dialogue-option">
                        <p> 
                            "I understand things are rough, healing takes time. 
                            Just know that no matter how opeless you feel you're not alone. 
                            Would you like to tell me more about what's been going on?"
                        </p>
                </div>


                <div className="dialogue-options fade-in-longer">
                    <p ref={option1} onMouseEnter={() => setOption(1, true)} onMouseLeave={() => setOption(1, false)} onClick={() => {setStep(10); setLastOption(1);}}>
                        "Have you talked to a professional yet?"
                    </p>
                    <p ref={option2} onMouseEnter={() => setOption(2, true)} onMouseLeave={() => setOption(2, false)} onClick={() => {setOpen(state => ({...state, eight1: true})); setLastStep(8); setLastOption(2);}}>
                        "Are you taking any sleep aids to help?"
                    </p>
                    <p ref={option3} onMouseEnter={() => setOption(3, true)} onMouseLeave={() => setOption(3, false)} onClick={() => {setOpen(state => ({...state, eight2: true})); setLastOption(3);}}>
                        "This will also pass."
                    </p>
                </div>
                <Dialog open={open.eight1} disableBackdropClick onClose={() => {setStep(9); setOpen(state => ({...state, eight1: false}));}}>    
                    <DialogContent className="popup">
                        <p>This is a wrap-around way of asking if he's seen a professional, or if he is self-medicating. Be more direct!</p>
                        <div className="click-to-close" onClick={() => {setStep(9); setOpen(state => ({...state, eight1: false}));}}>
                            <p>[ Click to continue ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
                <Dialog open={open.eight2} disableBackdropClick onClose={() => {setOpen(state => ({...state, eight2: false}));}}>
                    <DialogContent className="popup">
                        <p>
                            This invalidates how John is feeling and may push him to continue ignoring the issue.
                        </p>
                        <div className="click-to-close" onClick={() => {setOpen(state => ({...state, eight2: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }

    function step9() {  
        if(!open.nine1 && !open.nine2) setVideoTime(40, 49);    // only plays video when dialog is not open

        return (
            <div className="dialogue blue-white-background" key={step}>
                <h1 className="fade-in">
                    "Yes. Last week I couldn't sleep without taking anything. I'm always tired and as a result my work has sucked lately"
                </h1>


                <div className="last-dialogue-option">
                    <p>"Are you taking any sleep aids to help?"</p>
                </div>


                <div className="dialogue-options fade-in-longer">
                    <p ref={option1} onMouseEnter={() => setOption(1, true)} onMouseLeave={() => setOption(1, false)} onClick={() => {setStep(10); setLastOption(1);}}>
                        "Sleeping medicine will help you sleep, but it's not treating the underlying issue. Talking to
                        a professional might be more useful."
                    </p>
                    <p ref={option2} onMouseEnter={() => setOption(2, true)} onMouseLeave={() => setOption(2, false)} onClick={() => {setOpen(state => ({...state, nine1: true})); setLastOption(2);}}>
                        "You just need to give it more time, eventually the stress and heartbreak will go away"
                    </p>
                    <p ref={option3} onMouseEnter={() => setOption(3, true)} onMouseLeave={() => setOption(3, false)} onClick={() => {setOpen(state => ({...state, nine2: true})); setLastOption(3);}}>
                        "Have you heard of <em>SleepNow</em>? I hear it works amazingly!"
                    </p>
                </div>

                <Dialog open={open.nine1} disableBackdropClick onClose={() => {setStep(10); setOpen(state => ({...state, nine1: false}));}}>    
                    <DialogContent className="popup">
                        <p>
                            It can be helpful to help him understand that it might take a while for him to get better,
                            but it's always best to prompt your friends to seek professional help when necessary.
                        </p>
                        <div className="click-to-close" onClick={() => {setStep(10); setOpen(state => ({...state, nine1: false}));}}>
                            <p>[ Click to continue ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
                <Dialog open={open.nine2} disableBackdropClick onClose={() => {setOpen(state => ({...state, nine2: false}));}}>
                    <DialogContent className="popup">
                        <p>Try Again</p>
                        <div className="click-to-close" onClick={() => {setOpen(state => ({...state, nine2: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }

    function step10() {
        if(!open.ten1 && !open.ten2) setVideoTime(50, 54.60);    // only plays video when dialog is not open

        return (
            <div className="dialogue blue-white-background" key={step}>
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
                        ) : (
                            <p>"You just need to give it more time, eventually the stress and heartbreak will go away"</p>
                        )}
                    </div>                    
                ) : (
                    <div className="last-dialogue-option">
                        <p>"Have you talked to a professional yet?"</p>
                    </div>
                )}


                <div className="dialogue-options fade-in-longer">
                    <p ref={option1} onMouseEnter={() => setOption(1, true)} onMouseLeave={() => setOption(1, false)} onClick={() => {setOpen(state => ({...state, ten1: true})); setLastOption(1);}}>
                        He is unaware of the resources available to him.
                    </p>
                    <p ref={option2} onMouseEnter={() => setOption(2, true)} onMouseLeave={() => setOption(2, false)} onClick={() => {setStep(11); setLastOption(2);}}>
                        He may think that talking to a professional means that his situation is dire.
                    </p>
                    <p ref={option3} onMouseEnter={() => setOption(3, true)} onMouseLeave={() => setOption(3, false)} onClick={() => {setOpen(state => ({...state, ten2: true})); setLastOption(3);}}>
                        He does not want to confront his feelings.
                    </p>
                </div>

                <Dialog open={open.ten1} disableBackdropClick onClose={() => {setStep(11); setOpen(state => ({...state, ten1: false}));}}>    
                    <DialogContent className="popup">
                        <p>
                            John is aware that resources do exist, but does not have experience using them.
                        </p>
                        <div className="click-to-close" onClick={() => {setStep(11); setOpen(state => ({...state, ten1: false}));}}>
                            <p>[ Click to continue ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
                <Dialog open={open.ten2} disableBackdropClick onClose={() => {setOpen(state => ({...state, ten2: false}));}}>
                    <DialogContent className="popup">
                        <p>Try Again</p>
                        <div className="click-to-close" onClick={() => {setOpen(state => ({...state, ten2: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }

    function step11() {
        if(!open.eleven1 && !open.eleven2) setVideoTime(58, 65);    // only plays video when dialog is not open

        return (
            <div className="dialogue blue-white-background" key={step}>
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
                    <p ref={option1} onMouseEnter={() => setOption(1, true)} onMouseLeave={() => setOption(1, false)} onClick={() => {setOpen(state => ({...state, eleven3: true})); setLastOption(1);}}>
                        The stigma surrounding mental health can cause many people to not be aware of the resources available to them.
                    </p>
                    <p ref={option2} onMouseEnter={() => setOption(2, true)} onMouseLeave={() => setOption(2, false)} onClick={() => {setOpen(state => ({...state, eleven2: true})); setLastOption(2);}}>
                        John does not care about his mental health.
                    </p>
                    <p ref={option3} onMouseEnter={() => setOption(3, true)} onMouseLeave={() => setOption(3, false)} onClick={() => {setOpen(state => ({...state, eleven1: true})); setLastOption(3);}}>
                        John feels hopeless, like he can never recover.
                    </p>
                </div>

                <Dialog open={open.eleven3} disableBackdropClick onClose={() => {setStep(12); setOpen(state => ({...state, eleven3: false}));}}>
                    <DialogContent className="popup">
                        <p>
                            <span style={{fontWeight: 'bold', textDecoration: 'underline'}}>Myth:</span> Personality weakness or character flaws cause mental health problems, and if you
                            try hard enough you can snap out of it.
                            <br /><br />
                            <span style={{fontWeight: 'bold', textDecoration: 'underline'}}>Fact:</span> In reality, mental health has nothing to do with being lazy or weak
                            and can be caused by:
                        </p>
                        <ul>
                            <li>Biological factors, such as genes, physical illness, injury, or brain chemistry.</li>
                            <li>Life experiences, such as trauma or history of abuse.</li>
                            <li>Family history of mental health problems.</li>
                        </ul>
                        <div className="click-to-close" onClick={() => {setStep(12); setOpen(state => ({...state, eleven3: false}));}}>
                            <p>[ Click to continue ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
                <Dialog open={open.eleven1} disableBackdropClick onClose={() => {setStep(12); setOpen(state => ({...state, eleven1: false}));}}>    
                    <DialogContent className="popup">
                        <p>
                            Studies show that people with mental health problems get better and many recover completely. Recovery
                            refers to the process in which people are able to live, work, learn, and participate fully in their communities.
                            There are more treatments, services, and community support systems than ever before, and they work!
                        </p>
                        <p><a href="https://www.mentalhealth.gov/basics/mental-health-myths-facts" target="_blank" rel="noopener noreferrer">Mental Health Myths and Facts</a></p>
                        <div className="click-to-close" onClick={() => {setStep(12); setOpen(state => ({...state, eleven1: false}));}}>
                            <p>[ Click to continue ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
                <Dialog open={open.eleven2} disableBackdropClick onClose={() => {setOpen(state => ({...state, eleven2: false}));}}>
                    <DialogContent className="popup">
                        <p>Try Again</p>
                        <div className="click-to-close" onClick={() => {setOpen(state => ({...state, eleven2: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }

    function step12() {
        if(!open.twelve1 && !open.twelve2) setVideoTime(66, 73);    // only plays video when dialog is not open

        return (
            <div className="dialogue blue-white-background" key={step}>
                <h1 className="fade-in">
                    [ You and John discuss some of the myths surrounding mental health. ]
                    "Oh, I guess it doesn't seem so bad. Maybe I should seek help, but I have no idea where to start!"
                </h1>


                <div className="last-dialogue-option">
                    {lastOption === 1 ? (
                        <p>The stigma surrounding mental health can cause many people to not be aware of the resources available to them.</p>
                    ) : (
                        <p>John feels hopeless, like he can never recover.</p>
                    )}
                </div>


                <div className="dialogue-options fade-in-longer">
                    <p ref={option1} onMouseEnter={() => setOption(1, true)} onMouseLeave={() => setOption(1, false)} onClick={() => {setOpen(state => ({...state, twelve3: true})); setLastOption(1);}}>
                        [ Give him a list of on-campus resources that he can use. ]
                    </p>
                    <p ref={option2} onMouseEnter={() => setOption(2, true)} onMouseLeave={() => setOption(2, false)} onClick={() => {setOpen(state => ({...state, twelve2: true})); setLastOption(2);}}>
                        [ Invite John to a party that you are going to later today. ]
                    </p>
                    <p ref={option3} onMouseEnter={() => setOption(3, true)} onMouseLeave={() => setOption(3, false)} onClick={() => {setOpen(state => ({...state, twelve1: true})); setLastOption(3);}}>
                        [ Offer to listen to his problems and give advice. ]
                    </p>
                </div>

                <Dialog open={open.twelve3} disableBackdropClick onClose={() => {setStep(13); setOpen(state => ({...state, twelve1: false}));}}>    
                    <DialogContent className="popup">
                        <p>
                            Here is a list of on campus resources John could use. Click on them to get more information!
                        </p>
                        <ul>
                            <li><a href="https://www.purdue.edu/caps/" target="_blank" rel="noopener noreferrer">Counseling and Psychological Services (CAPS)</a></li>
                            <li><a href="https://www.purdue.edu/odos/" target="_blank" rel="noopener noreferrer">Office of the Dean of Students (ODOS)</a></li>
                            <li><a href="https://www.purdue.edu/odos/care/" target="_blank" rel="noopener noreferrer">Center for Advocacy, Response, and Education (CARE)</a></li>
                            <li>Faculty and Advisors</li>
                            <li><a href="https://www.purdue.edu/recwell/fitness-wellness/wellness/mindfulness.php" target="_blank" rel="noopener noreferrer">CoRec Mindfulness Room</a></li>
                        </ul>
                        <div className="click-to-close" onClick={() => {setStep(13); setOpen(state => ({...state, twelve1: false}));}}>
                            <p>[ Click to continue ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
                <Dialog open={open.twelve1} disableBackdropClick onClose={() => {setOpen(state => ({...state, twelve1: false}));}}>    
                    <DialogContent className="popup">
                        <p>
                            John needs to speak to a professional. You can support him, but encouraging treatment will help him the most.
                        </p>
                        <p><a href="https://www.arcadia.edu/life-arcadia/campus-services/wellness-services/counseling-services/resources/how-help-friend" target="_blank" rel="noopener noreferrer">How to Help a Friend Who's Struggling Emotionally</a></p>
                        <div className="click-to-close" onClick={() => {setOpen(state => ({...state, twelve1: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
                <Dialog open={open.twelve2} disableBackdropClick onClose={() => {setOpen(state => ({...state, twelve2: false}));}}>
                    <DialogContent className="popup">
                        <p>
                            This promotes unhealthy coping via substance use, and could put John in danger.
                        </p>
                        <p><a href="https://www.mayoclinic.org/diseases-conditions/depression/in-depth/depression/art-20045943" target="_blank" rel="noopener noreferrer">Depression: Supporting a family member or friend</a></p>
                        <div className="click-to-close" onClick={() => {setOpen(state => ({...state, twelve2: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }

    function step13() {
        setVideoTime(7.5, 8);

        return (
            <div className="dialogue blue-white-background" key={step}>
                <h1 className="fade-in">
                    Based on what John has told you, which of those resources do you think would best benefit him?
                </h1>


                <div className="last-dialogue-option">
                    <p>[ Give him a list of on-campus resources that he can use. ]</p>
                </div>


                <div className="dialogue-options fade-in-longer">
                    <p ref={option1} onMouseEnter={() => setOption(1, true)} onMouseLeave={() => setOption(1, false)} onClick={() => {setStep(15); setLastOption(1);}}>
                        Counseling and Psychological Services (CAPS)
                    </p>
                    <p ref={option2} onMouseEnter={() => setOption(2, true)} onMouseLeave={() => setOption(2, false)} onClick={() => {setOpen(state => ({...state, thirteen2: true})); setLastOption(2);}}>
                        His advisor
                    </p>
                    <p ref={option3} onMouseEnter={() => setOption(3, true)} onMouseLeave={() => setOption(3, false)} onClick={() => {setOpen(state => ({...state, thirteen1: true})); setLastOption(3);}}>
                        CoRec Mindfulness Room
                    </p>
                </div>

                <Dialog open={open.thirteen1} disableBackdropClick onClose={() => {setStep(14); setOpen(state => ({...state, thirteen1: false}));}}>    
                    <DialogContent className="popup">
                        <p>
                            This is a good tool to use for momentary peace, but this will not promote him to seek treatment.
                        </p>
                        <div className="click-to-close" onClick={() => {setStep(14); setOpen(state => ({...state, thirteen1: false}));}}>
                            <p>[ Click to continue ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
                <Dialog open={open.thirteen2} disableBackdropClick onClose={() => {setOpen(state => ({...state, thirteen2: false}));}}>
                    <DialogContent className="popup">
                        <p>
                            While talking to your advisor can be helpful, John will most likely be pointed towards CAPS or ODOS.
                        </p>
                        <div className="click-to-close" onClick={() => {setOpen(state => ({...state, thirteen2: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }

    function step14() {
        if(!open.fourteen1 && !open.fourteen2) setVideoTime(76, 86);    // only plays video when dialog is not open

        return (
            <div className="dialogue blue-white-background" key={step}>
                <h1 className="fade-in">
                    "I'm not familiar with the&nbsp; 
                    <a href="https://www.purdue.edu/recwell/fitness-wellness/wellness/mindfulness.php" target="_blank" rel="noopener noreferrer">CoRec Mindfulness Room</a>
                    , but is sounds like it would be a short-term solution, like going for a walk. Is there a more useful resource you can recommend?"
                </h1>


                <div className="last-dialogue-option">
                    <p>CoRec Mindfulness Room</p>
                </div>


                <div className="dialogue-options fade-in-longer">
                    <p ref={option1} onMouseEnter={() => setOption(1, true)} onMouseLeave={() => setOption(1, false)} onClick={() => {setStep(15); setLastOption(1);}}>
                        Counseling and Psychological Services (CAPS)
                    </p>
                    <p ref={option2} onMouseEnter={() => setOption(2, true)} onMouseLeave={() => setOption(2, false)} onClick={() => {setOpen(state => ({...state, fourteen: true})); setLastOption(2);}}>
                        His advisor
                    </p>
                </div>

                <Dialog open={open.fourteen} disableBackdropClick onClose={() => {setOpen(state => ({...state, fourteen: false}));}}>    
                    <DialogContent className="popup">
                        <p>
                            John's advisor will likely point him to CAPS. It's best to use a more direct resource.
                        </p>
                        <div className="click-to-close" onClick={() => {setOpen(state => ({...state, fourteen: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }

    function step15() {
        if(!open.fifteen1 && !open.fifteen2) setVideoTime(88, 93);    // only plays video when dialog is not open

        return (
            <div className="dialogue blue-white-background" key={step}>
                <h1 className="fade-in">
                    "I'm not familiar with&nbsp; 
                    <a href="https://www.purdue.edu/caps/" target="_blank" rel="noopener noreferrer">CAPS</a>
                    . I've heard of it, but don't really know much about it."
                </h1>


                <div className="last-dialogue-option">
                    <p>Counseling and Psychological Services (CAPS)</p>
                </div>


                <div className="dialogue-options fade-in-longer">
                    <p ref={option1} onMouseEnter={() => setOption(1, true)} onMouseLeave={() => setOption(1, false)} onClick={() => {setStep(16); setLastOption(1);}}>
                        "CAPS provides psychological services for students at Purdue. You can do private or group sessions!"
                    </p>
                    <p ref={option2} onMouseEnter={() => setOption(2, true)} onMouseLeave={() => setOption(2, false)} onClick={() => {setOpen(state => ({...state, fifteen2: true})); setLastOption(2);}}>
                        "CAPS provides nutrition counseling for students who want to learn how to meal prep on a budget.""
                    </p>
                    <p ref={option3} onMouseEnter={() => setOption(3, true)} onMouseLeave={() => setOption(3, false)} onClick={() => {setOpen(state => ({...state, fifteen1: true})); setLastOption(3);}}>
                        "I'm not really sure what CAPS does either!"
                    </p>
                </div>

                <Dialog open={open.fifteen1} disableBackdropClick onClose={() => {setOpen(state => ({...state, fifteen1: false}));}}>    
                    <DialogContent className="popup">
                        <p>
                            CAPS provides psychological services for students at Purdue. <br />
                            <a href="https://www.purdue.edu/caps/" target="_blank" rel="noopener noreferrer">Click here</a> 
                            &nbsp;to learn more!
                        </p>
                        <div className="click-to-close" onClick={() => {setOpen(state => ({...state, fifteen1: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
                <Dialog open={open.fifteen2} disableBackdropClick onClose={() => {setOpen(state => ({...state, fifteen2: false}));}}>    
                    <DialogContent className="popup">
                        <p>
                            Incorrect! CAPS provides psychological services for students at Purdue. <br />
                            <a href="https://www.purdue.edu/caps/" target="_blank" rel="noopener noreferrer">Click here</a> 
                            &nbsp;to learn more!
                        </p>
                        <div className="click-to-close" onClick={() => {setOpen(state => ({...state, fifteen2: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }

    function step16() {
        setVideoTime(127, 133);

        return (
            <div className="dialogue blue-white-background" key={step}>
                <h1 className="fade-in">
                    "I will definitely be reaching out to them soon. Thanks so much for your help!
                </h1>


                <div className="last-dialogue-option">
                    <p>"CAPS provides psychological services for students at Purdue. You can do private or group sessions!"</p>
                </div>

                <div className="dialogue-options fade-in-longer">
                    <p ref={option1} onClick={() => {setStep(17);}}>
                        [ Click to finish ]
                    </p>
                </div>

            </div>
        );
    }

    function step17() {
        return (
            <div className="App homepage finish" key={step}>
                <h1>You did great! In case you missed them:</h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 951.5 47.5"><defs><style></style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path stroke='#ffffff' fill="none" strokeMiterlimit="10" className="cls-1" d="M0,.5C596.36,1.71,950.93,4.43,951,9.22c.11,7.29-823.06,14.24-823,24.41,0,4.6,168.43,9.11,566,13.37"/></g></g></svg>
                
                <div className="research-resources">
                    <div className="research">
                        <h2>Research</h2>
                        <ul>
                            <li><a href="https://www.ahealthiermichigan.org/2015/04/10/importance-face-to-face-communication/" target="_blank" rel="noopener noreferrer">Why You Still Need Face-to-Face Communication</a></li>
                            <li><a href="https://www.arcadia.edu/life-arcadia/campus-services/wellness-services/counseling-services/resources/how-help-friend" target="_blank" rel="noopener noreferrer">How to Help a Friend Who's Struggling Emotionally</a></li>
                            <li><a href="https://psychcentral.com/blog/how-to-help-someone-going-through-a-tough-time#1" target="_blank" rel="noopener noreferrer">How to Help Someone Going Through a Tough Time</a></li>
                            <li><a href="https://www.betterhelp.com/advice/general/why-is-it-that-nothing-makes-me-happy/" target="_blank" rel="noopener noreferrer">Why Is It That Nothing Makes Me Happy</a></li>
                            <li><a href="https://www.mayoclinic.org/diseases-conditions/depression/in-depth/depression/art-20045943" target="_blank" rel="noopener noreferrer">Depression: Supporting a family member or friend</a></li>
                            <li><a href="https://www.mentalhealth.gov/basics/mental-health-myths-facts" target="_blank" rel="noopener noreferrer">Mental Health Myths and Facts</a></li>
                        </ul>
                    </div>
                    <div className="resources">
                        <h2>Resources</h2>
                        <ul>
                            <li><a href="https://www.purdue.edu/caps/" target="_blank" rel="noopener noreferrer">Counseling and Psychological Services (CAPS)</a></li>
                            <li><a href="https://www.purdue.edu/odos/" target="_blank" rel="noopener noreferrer">Office of the Dean of Students (ODOS)</a></li>
                            <li><a href="https://www.purdue.edu/odos/care/" target="_blank" rel="noopener noreferrer">Center for Advocacy, Response, and Education (CARE)</a></li>
                            <li><a href="https://www.purdue.edu/recwell/fitness-wellness/wellness/mindfulness.php" target="_blank" rel="noopener noreferrer">CoRec Mindfulness Room</a></li>
                        </ul>
                    </div>
                </div>

                <p className="finish-button" onClick={() => {
                    props.setTranslateHome('slide-down-page');
                    props.setDisplayFriendScenarios('none');
                    props.setScenario(false);
                    }}>
                    [ Click to return home ]
                </p>
            </div>
        );
    }
}


export default FriendDepression;