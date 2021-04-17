import { useState, useEffect, useRef } from 'react';
import LoadingScreen from '../LoadingScreen.jsx';
import StudentScenarios from '../StudentScenarios';
import ProgressBar from '../ProgressBar.jsx';
import '../../css/simulations.css';
import video from '../../video/scenario3.webm';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';


function FriendDepression(props) {
    const [isLoaded, setisLoaded] = useState(false);
    const [step, setStep] = useState(0);
    const [lastStep, setLastStep] = useState(0);
    const [lastOption, setLastOption] = useState(0);
    const friendDepressionVid = useRef(null);
    const [open, setOpen] = useState({
        one1: false, one2: false,
        two: false,
        three: false, 
        four: false,
        five: false, 
        six: false,
        seven: false,
        nine: false,
        ten: false,
        eleven: false,
        twelve: false,
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
                <StudentScenarios display={''} animation={''} videoAnimation={''} />
                <LoadingScreen fade={''} animation={'slide-up-in'} />

                {renderVideo('none')}

            </div>
        );
    }
    
    return (
        <div style={{width: '100%', height: '100vh', overflow: 'hidden'}}>
            <LoadingScreen fade={'fade-out'} animation={''} />

            <div className='simulation background-student-depression' onClick={() => friendDepressionVid.current.pause()}>
                <p className="attribution"><a target="_blank" rel="noopener noreferrer" href="http://www.freepik.com">Image designed by vectorpocket / Freepik</a></p>
                {step > 0 ? renderVideo() : renderVideo('none')}
                {renderDialogue()}

            </div>

            {step < 13 ? (
                <ProgressBar color="#B35A32" width={step / 12 * 100} />
            ) : (<div style={{height: '0'}}></div>)}

        </div>
    );


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

            default:
                break;
        }
    }






    /****************** Steps **********************/
    // evens are main, odds are alternate

    function step0() {
        setVideoTime(0, 0);

        return (
            <div className="dialogue lightbrown-white-background" key={step}>
                <h1>
                    You are a student who is currently suffering from depression. Your classes are really hard this semester and one of your
                    family members, someone who you are very close with, has been in and out of the hospital the past few months. You have 
                    been really stressed and unmotivated. You've missed a lot of assignments in your classes and find yourself accidently 
                    sleeping through alarms and classes. You've decided to reach out to your advisor; they've always offered to be a resource
                    for you and you're not sure where else to go.
                </h1>

                <div className="dialogue-options">
                    <p onClick={() => {setStep(1);}}>
                        [ Click to continue ]
                    </p>
                </div>
            </div>
        );
    }

    function step1() {
        setVideoTime(2, 6);

        return (
            <div className="dialogue lightbrown-white-background" key={step}>
                <h1 className="fade-in">
                    "So what did you want to talk about in this meeting?"
                </h1>

                <div className="last-dialogue-option">
                    <p>[ Click to continue ]</p>
                </div>

                <div className="dialogue-options fade-in-longer" key={step}>
                    <p onClick={() => {setStep(3); setLastStep(1); setLastOption(1);}}>
                        "I've had a really hard time with school lately. There is a lot going on and it's 
                        just getting to be too much to handle right now."
                    </p>
                    <p onClick={() => {setOpen(state => ({...state, one2: true})); setLastOption(2);}}>
                        "Oh, nothing much really. Classes are hard but I'm getting by!"
                    </p>
                    <p onClick={() => {setOpen(state => ({...state, one1: true})); setLastOption(3);}}>
                        "I've had a lot going on personally. I think I might have missed a few assignments
                        but I think I can manage the stress."
                    </p>
                </div>
                <Dialog open={open.one1} disableBackdropClick>    
                    <DialogContent className="popup" style={{backgroundColor: '#EEBB84'}}>
                        <p>While it is good that you told them you are struggling, you don't have to pretend like you are managing it if you can't. They are here to help!</p>
                        <div className="click-to-close" onClick={() => {setStep(2); setOpen(state => ({...state, one1: false}));}}>
                            <p>[ Click to continue ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
                <Dialog open={open.one2} disableBackdropClick onClose={() => {setOpen(state => ({...state, one2: false}));}}>
                    <DialogContent className="popup" style={{backgroundColor: '#EEBB84'}}>
                        <p>Don't just brush off the things you're going through! If you don't tell them what's going on then they won't know to help you.</p>
                        <div className="click-to-close" onClick={() => {setOpen(state => ({...state, one2: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }


    function step2() {
        if(!open.two) setVideoTime(9, 15);

        return (
            <div className="dialogue lightbrown-white-background" key={step}>
                <h1 className="fade-in">
                    "Really? You know, it's okay if you are struggling and need help. That's what we are here for!"
                    What is your response?
                </h1>

                <div className="last-dialogue-option">
                    <p>
                        "I've had a lot going on personally. I think I might have missed a few assignments
                        but I think I can manage the stress."
                    </p>
                </div>

                <div className="dialogue-options fade-in-longer">
                    <p onClick={() => {setStep(3); setLastOption(1);}}>
                        "I think I might end up needing help, but I don't want to burden others with my problem."
                    </p>
                    <p onClick={() => {setStep(3); setLastOption(2);}}>
                        "Yeah, actually I think some help would be nice. I've just fallen behind a lot and I don't know
                        if it's going to get any better on my own."
                    </p>
                    <p onClick={() => {setOpen(state => ({...state, two: true})); setLastOption(3);}}>
                        "Nope! I really am doing well. I'll get through it on my own."
                    </p>
                </div>
                <Dialog open={open.two} disableBackdropClick>
                    <DialogContent className="popup" style={{backgroundColor: '#EEBB84'}}>
                        <div className="click-to-close" onClick={() => {setOpen(state => ({...state, two: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }

    function step3() {
        if(!open.three) setVideoTime(18, 22);    // only plays video when dialog is not open

        return (
            <div className="dialogue lightbrown-white-background" key={step}>
                <h1 className="fade-in">
                    "Do you want to tell me a little bit about what's going on?"
                </h1>

                {lastStep === 1 ? (
                    <div className="last-dialogue-option">
                        <p>
                            "I've had a really hard time with school lately. There is a lot going on and it's 
                            just getting to be too much to handle right now."
                        </p>
                    </div>
                ) : (
                    <div className="last-dialogue-option">
                        {lastOption === 1 ? (
                            <p>"I think I might end up needing help, but I don't want to burden others with my problem."</p>
                        ) : (
                            <p>
                                "Yeah, actually I think some help would be nice. I've just fallen behind a lot and I don't know
                                if it's going to get any better on my own."
                            </p>
                        )}
                    </div>
                )}

                <div className="dialogue-options fade-in-longer">
                    <p onClick={() => {setStep(4); setLastOption(1);}}>
                        [ Tell about your situation but be vague, leave out who is in the hospital and how much it's been affecting you ]
                    </p>
                    <p onClick={() => {setOpen(state => ({...state, three: true})); setLastOption(2);}}>
                        "I don't want to talk about it."
                    </p>
                    <p onClick={() => {setStep(5); setLastStep(3); setLastOption(3);}}>
                        [ Tell them about what's going on with details ]
                    </p>
                </div>
                <Dialog open={open.three} disableBackdropClick>
                    <DialogContent className="popup" style={{backgroundColor: '#EEBB84'}}>
                        <p>
                            Turning the focus away from John and ignoring his feelings is not the right thing to do in this situation.
                            The focus is on John. Try acknowledging his feelings.
                        </p>
                        <div className="click-to-close" onClick={() => {setOpen(state => ({...state, three: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }

    function step4() {
        if(!open.four) setVideoTime(25, 35);    // only plays video when dialog is not open

        return (
            <div className="dialogue lightbrown-white-background" key={step}>
                <h1 className="fade-in">
                    "I know it can be very tough to concentrate school on when a family member is in and out of the hospital.
                    If you don't mind me asking, how long has this been going on?"
                </h1>

                <div className="last-dialogue-option">
                    <p>[ Tell about your situation but be vague, leave out who is in the hospital and how much it's been affecting you ]</p>
                </div>


                <div className="dialogue-options fade-in-longer">
                    <p onClick={() => {setOpen(state => ({...state, four: true})); setLastOption(1);}}>
                        "Actually, I would prefer not to talk about it."
                    </p>
                    <p onClick={() => {setStep(5); setLastOption(2);}}>
                        "For some time. I'm trying hard to remain strong throughout it. I don't want my family to worry about me too."
                    </p>
                    <p onClick={() => {setStep(5); setLastOption(3);}}>
                        "It has been going on for a few months now. It just really sucks because it is someone I am close to and I am really worried about them."
                    </p>
                </div>

                <Dialog open={open.four} disableBackdropClick>
                    <DialogContent className="popup" style={{backgroundColor: '#EEBB84'}}>
                        <p>
                            While empathizing may be beneficial, focusing on John will help him the most right now. Sometimes the future seems too far off.
                        </p>
                        <div className="click-to-close" onClick={() => {setOpen(state => ({...state, four: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }

    function step5() {
        if(!open.five) setVideoTime(38, 48);    // only plays video when dialog is not open

        return (
            <div className="dialogue lightbrown-white-background" key={step}>
                <h1 className="fade-in">
                    "I am really sorry to hear that you are going through all of that right now. That does sound like it would be very stressful.
                    Have you talked to any of your professors about any of this?"
                </h1>


                {lastStep === 3 ? (
                    <div className="last-dialogue-option">
                        <p>
                            [ Tell them about what's going on with details ]
                        </p>
                    </div>
                ) : (
                    <div className="last-dialogue-option">
                        {lastOption === 2 ? (
                            <p>"For some time. I'm trying hard to remain strong throughout it. I don't want my family to worry about me too."</p>
                        ) : (
                            <p>
                                "It has been going on for a few months now. It just really sucks because it is someone I am close to and I am really worried about them."
                            </p>
                        )}
                    </div>
                )}


                <div className="dialogue-options fade-in-longer">
                    <p onClick={() => {setStep(7); setLastStep(5); setLastOption(1);}}>
                        "Yes, and they have been kind about it so far, but that does not change the fact that I've missed a lot of work."
                    </p>
                    <p onClick={() => {setOpen(state => ({...state, five: true})); setLastOption(2);}}>
                        "No, and I don't think I want to. I don't see what good that would do."
                    </p>
                    <p onClick={() => {setStep(6); setLastOption(3);}}>
                        "No, and I'm not really sure how to."
                    </p>
                </div>
                <Dialog open={open.five} disableBackdropClick>
                    <DialogContent className="popup" style={{backgroundColor: '#EEBB84'}}>
                        <p>
                            Try Again
                        </p>
                        <div className="click-to-close" onClick={() => {setOpen(state => ({...state, five: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }

    function step6() {
        if(!open.six) setVideoTime(51, 63);    // only plays video when dialog is not open

        return (
            <div className="dialogue lightbrown-white-background" key={step}>
                <h1 className="fade-in">
                    "Okay, well that is alright. If you talk to your professors about your current situation, they might be lenient and allow
                    for extensions with the assignments that you have missed."
                </h1>


                <div className="last-dialogue-option">
                    <p>"No, and I'm not really sure how to."</p>
                </div>


                <div className="dialogue-options fade-in-longer">
                    <p onClick={() => {setStep(7); setLastOption(1);}}>
                        "Oh, really? I guess there's no harm in asking! The missing assignments have definitely been stressing me out."
                    </p>
                    <p onClick={() => {setStep(7); setLastOption(2);}}>
                        "Hmm, I don't think my professors would be very lenient. I could probably get by in the class without the missing assignments, but I guess I should just ask."
                    </p>
                    <p onClick={() => {setOpen(state => ({...state, six: true})); setLastOption(3);}}>
                        "I don't think my professors will do anything. It's probably best to just not ask them."
                    </p>
                </div>
                <Dialog open={open.six} disableBackdropClick>
                    <DialogContent className="popup" style={{backgroundColor: '#EEBB84'}}>
                        <div className="click-to-close" onClick={() => {setOpen(state => ({...state, six: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }

    function step7() {
        if(!open.seven) setVideoTime(67, 83);    // only plays video when dialog is not open

        return (
            <div className="dialogue lightbrown-white-background" key={step}>
                <h1 className="fade-in">
                    "Okay, well that's a good start! I understand the work you have missed is causing extra stress. I think it would be beneficial
                    to reach out to the Office of the Dean of Students (ODOS) as well. They can help you work with your professors and request extensions
                    for deadlines."
                </h1>


                {lastStep === 5 ? (
                    <div className="last-dialogue-option">
                        <p>
                            "Yes, and they have been kind about it so far, but that does not change the fact that I've missed a lot of work"
                        </p>
                    </div>
                ) : (
                    <div className="last-dialogue-option">
                        {lastOption === 1 ? (
                            <p>"Oh, really? I guess there's no harm in asking! The missing assignments have definitely been stressing me out."</p>
                        ) : (
                            <p>
                                "Hmm, I don't think my professors would be very lenient. I could probably get by in the class without the missing assignments, but I guess I should just ask."
                            </p>
                        )}
                    </div>
                )}


                <div className="dialogue-options fade-in-longer">
                    <p onClick={() => {setOpen(state => ({...state, seven: true})); setLastOption(1);}}>
                        "I don't want to get more people involved though. My situation probably isn't serious enough."
                    </p>
                    <p onClick={() => {setStep(8); setLastOption(2);}}>
                        "I could probably get by on my own, but that would definitely be a big help."
                    </p>
                    <p onClick={() => {setStep(8); setLastOption(3);}}>
                        "Wow! If they could help out in that way that would be great! Being able to make up that work would greatly improve my grade and help with the stress."
                    </p>
                </div>
                <Dialog open={open.seven} disableBackdropClick>    
                    <DialogContent className="popup" style={{backgroundColor: '#EEBB84'}}>
                        <div className="click-to-close" onClick={() => {setOpen(state => ({...state, seven: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }

    function step8() {
        setVideoTime(92, 102);    // only plays video when dialog is not open

        return (
            <div className="dialogue lightbrown-white-background" key={step}>
                <h1 className="fade-in">
                    "Thank you for sharing. We're all here as a resource to help you succeed. An alternative resource that is available
                    to you is CAPS. Do you know anything about them?"
                </h1>


                <div className="last-dialogue-option">
                    {lastOption === 2 ? (
                        <p>"I could probably get by on my own, but that would definitely be a big help."</p>
                    ) : (
                        <p>
                            "Wow! If they could help out in that way that would be great! Being able to make up that work would greatly improve my grade and help with the stress."
                        </p>
                    )}
                </div>


                <div className="dialogue-options fade-in-longer">
                    <p onClick={() => {setStep(10); setLastStep(8); setLastOption(1);}}>
                        "Yes, I have heard a little bit about them."
                    </p>
                    <p onClick={() => {setStep(9); setLastOption(2);}}>
                        "Hmm, I'm not sure."
                    </p>
                    <p onClick={() => {setStep(9); setLastOption(3);}}>
                        "No, I haven't heard of them."
                    </p>
                </div>
            </div>
        );
    }

    function step9() {  
        if(!open.nine) setVideoTime(111, 126);    // only plays video when dialog is not open

        return (
            <div className="dialogue lightbrown-white-background" key={step}>
                <h1 className="fade-in">
                    "Well, CAPS is a resource here at Purdue that helps students learn strategies for dealing with stress. It might
                    be beneficial to set up a meeting with them. They could be a good resource for you to just talk and get things off your chest."
                </h1>

                <div className="last-dialogue-option">
                    {lastOption === 2 ? (
                        <p>"Hmm, I'm not sure"</p>
                    ) : (
                        <p>
                            "No, I haven't heard of them."
                        </p>
                    )}
                </div>


                <div className="dialogue-options fade-in-longer">
                    <p onClick={() => {setStep(10); setLastOption(1);}}>
                        "That does sound like something that would be helpful for me. I will look into setting up an appointment."
                    </p>
                    <p onClick={() => {setStep(10); setLastOption(2);}}>
                        "I don't want to talk about it anymore than I have to, but it would probably be beneficial to learn how to manage my stress."
                    </p>
                    <p onClick={() => {setOpen(state => ({...state, nine: true})); setLastOption(3);}}>
                        "Sounds like a waste of time."
                    </p>
                </div>

                <Dialog open={open.nine} disableBackdropClick>
                    <DialogContent className="popup" style={{backgroundColor: '#EEBB84'}}>
                        <p>Try Again</p>
                        <div className="click-to-close" onClick={() => {setOpen(state => ({...state, nine: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }

    function step10() {
        if(!open.ten) setVideoTime(129, 142);    // only plays video when dialog is not open

        return (
            <div className="dialogue lightbrown-white-background" key={step}>
                <h1 className="fade-in">
                    "That's great! If you need any help navigating their website or setting up an appointment, I would be happy to help.
                    I think their counseling services or even group sessions could be very beneficial for you."
                </h1>


                {lastStep === 8 ? (
                    <div className="last-dialogue-option">
                        <p>"Yes, I have heard a little bit about them."</p>
                    </div>
                ) : (
                    <div className="last-dialogue-option">
                        {lastOption === 1 ? (
                            <p>
                                "That does sound like something that would be helpful for me. I will look into setting up an appointment."
                            </p>
                        ) : (
                            <p>"I don't want to talk about it anymore than I have to, but it would probably be beneficial to learn how to manage my stress."</p>
                        )}
                    </div>    
                )}


                <div className="dialogue-options fade-in-longer">
                    <p onClick={() => {setStep(12); setLastStep(10); setLastOption(1);}}>
                        "Thank you for offering to help. I think I'll take you up on that if I get overwhelmed or lost."
                    </p>
                    <p onClick={() => {setStep(11); setLastOption(2);}}>
                        "I'll figure it out on my own, I don't really think it's that serious of a problem. I'll be fine."
                    </p>
                    <p onClick={() => {setOpen(state => ({...state, ten: true})); setLastOption(3);}}>
                        "I don't need any help. Counseling or group whatever just isn't going to help me."
                    </p>
                </div>

                <Dialog open={open.ten} disableBackdropClick>
                    <DialogContent className="popup" style={{backgroundColor: '#EEBB84'}}>
                        <p>Try Again</p>
                        <div className="click-to-close" onClick={() => {setOpen(state => ({...state, ten: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }

    function step11() {
        if(!open.eleven) setVideoTime(146, 155);    // only plays video when dialog is not open

        return (
            <div className="dialogue lightbrown-white-background" key={step}>
                <h1 className="fade-in">
                    "I know you might not see it as very serious, but it seems to be impacting you negatively.
                    You can try just one meeting and see if that helps."
                </h1>


                <div className="last-dialogue-option">
                    <p>"I'll figure it out on my own, I don't really think it's that serious of a problem. I'll be fine.</p>
                </div>


                <div className="dialogue-options fade-in-longer">
                    <p onClick={() => {setStep(12); setLastOption(1);}}>
                        "Yeah, you're right. I have been struggling and there's no harm in trying it out. If it helps that would be great! Thank you for helping me with all this."
                    </p>
                    <p onClick={() => {setStep(12); setLastOption(2);}}>
                        "I guess it wouldn't hurt. I appreciate you recommending things you think will help. It just sounds like a lot of work."
                    </p>
                    <p onClick={() => {setOpen(state => ({...state, eleven: true})); setLastOption(3);}}>
                        "I can handle it on my own."
                    </p>
                </div>

                <Dialog open={open.eleven} disableBackdropClick>
                    <DialogContent className="popup" style={{backgroundColor: '#EEBB84'}}>
                        <p>Try Again</p>
                        <div className="click-to-close" onClick={() => {setOpen(state => ({...state, eleven: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }

    function step12() {
        if(!open.twelve) setVideoTime(160, 176);    // only plays video when dialog is not open

        return (
            <div className="dialogue lightbrown-white-background" key={step}>
                <h1 className="fade-in">
                    "Of course! That is what I am here for. If you need any help reaching out to the office of the Dean of Students
                    or CAPS, please let me know. I would be happy to help draft an email or help walk you through the process of 
                    getting in contact with either of them."
                </h1>


                {lastStep === 10 ? (
                    <div className="last-dialogue-option">
                        <p>"Thank you for offering to help. I think I'll take you up on that if I get overwhelmed or lost."</p>
                    </div>
                ) : (
                    <div className="last-dialogue-option">
                        {lastOption === 1 ? (
                            <p>
                                "Yeah, you're right. I have been struggling and there's no harm in trying it out. If it helps that would be great! Thank you for helping me with all this."
                            </p>
                        ) : (
                            <p>"I guess it wouldn't hurt. I appreciate you recommending things you think will help. It just sounds like a lot of work."</p>
                        )}
                    </div>    
                )}


                <div className="dialogue-options fade-in-longer">
                    <p onClick={() => {setStep(13); setLastOption(1);}}>
                        [ Click to finish ]
                    </p>
                </div>
            </div>
        );
    }


    function step13() {
        return (
            <div className="App homepage finish" key={step}>
                <h1>You did great! In case you missed them:</h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 951.5 47.5"><defs><style></style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path stroke='#ffffff' fill="none" strokeMiterlimit="10" className="cls-1" d="M0,.5C596.36,1.71,950.93,4.43,951,9.22c.11,7.29-823.06,14.24-823,24.41,0,4.6,168.43,9.11,566,13.37"/></g></g></svg>
                
                <div className="research-resources">
                    <div className="resources">
                        <h2>Resources</h2>
                        <ul>
                            <li><a href="https://www.purdue.edu/caps/" target="_blank" rel="noopener noreferrer">Counseling and Psychological Services (CAPS)</a></li>
                            <li><a href="https://www.purdue.edu/odos/" target="_blank" rel="noopener noreferrer">Office of the Dean of Students (ODOS)</a></li>
                        </ul>
                    </div>
                </div>

                <p className="finish-button" onClick={() => {
                    props.setTranslateHome('slide-down-page');
                    props.setDisplayStudentScenarios('none');
                    props.setScenario(false);
                    }}>
                    [ Click to return home ]
                </p>
            </div>
        );
    }
}


export default FriendDepression;