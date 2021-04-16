import { useState, useEffect, useRef } from 'react';
import LoadingScreen from '../LoadingScreen.jsx';
import FacultyScenarios from '../FacultyScenarios';
import ProgressBar from '../ProgressBar.jsx';
import '../../css/simulations.css';
import video from '../../video/scenario2.webm';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';


function FriendDepression(props) {
    const [isLoaded, setisLoaded] = useState(false);
    const [step, setStep] = useState(0);
    const [lastOption, setLastOption] = useState(0);
    const characterVideo = useRef(null);
    const [open, setOpen] = useState({
        one1: false, one2: false,
        two1: false, two2: false,
        three1: false, three2: false, 
        four1: false, four2: false, 
        five: false, 
    });


    useEffect(() => {
        characterVideo.current.oncanplaythrough = function() {
            setisLoaded(true);
        };

    }, [isLoaded]);


    function renderVideo(display) {
        return (
            <video autoPlay ref={characterVideo} className="friend-depression-video fade-in" style={{display: display}}>
                <source src={video} type='video/webm' />
            </video>
        );
    }

    function setVideoTime(startTime, endTime) {
        characterVideo.current.currentTime = startTime;

        setTimeout(function(){
            characterVideo.current.play();

            const interval = setInterval(() => {
                if(characterVideo.current !== null) {  //check in case component unmounted
                    if(characterVideo.current.currentTime > endTime) {
                        characterVideo.current.pause();
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
                <FacultyScenarios display={''} animation={''} videoAnimation={''} /> {/* change to whichever scenario was before */}
                <LoadingScreen fade={''} animation={'slide-up-in'} />

                {renderVideo('none')}

            </div>
        );
    }
    
    return (
        <div style={{width: '100%', height: '100vh', overflow: 'hidden'}}>
            <LoadingScreen fade={'fade-out'} animation={''} />

            <div className={'simulation background-faculty-student'} onClick={() => characterVideo.current.pause()}>
                <p className="attribution"><a target="_blank" rel="noopener noreferrer" href="http://www.freepik.com">Image designed by pikisuperstar / Freepik</a></p>
                {step > 1 ? renderVideo() : renderVideo('none')}
                {renderDialogue()}

            </div>

            {step < 6 ? (
                <ProgressBar color="#71421C" width={step / 5 * 100} />
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

            default:
                break;
        }
    }






    /****************** Steps **********************/
    // evens are main, odds are alternate

    function step0() {
        setVideoTime(0, 0);

        return (
            <div className="dialogue brown-white-background" key={step}>
                <h1>
                    A student in your afternoon lecture hasn't been showing up to class for the last two weeks.
                    She missed the last two assignments, which she normally turns in. When you last saw her she seemed disengaged.
                </h1>

                <div className="dialogue-options">
                    <p onClick={() => {setStep(1); setLastOption(1);}}>
                        [ Click to continue ]
                    </p>
                </div>
            </div>
        );
    }

    function step1() {
        setVideoTime(0, 0);

        return (
            <div className="dialogue brown-white-background" key={step}>
                <h1 className="fade-in">
                    Now that you've noticed her absence, what do you want to do?
                </h1>

                <div className="last-dialogue-option">
                        <p>[ Click to continue ]</p>
                </div>

                <div className="dialogue-options fade-in-longer" key={step}>
                    <p onClick={() => {setOpen(state => ({...state, one2: true})); setLastOption(1);}}>
                        [ Wait and see if she shows back up ]
                    </p>
                    <p onClick={() => {setOpen(state => ({...state, one1: true})); setLastOption(2);}}>
                        [ Have you, or one of the TA's send her an email to speak after class ]
                    </p>
                    <p onClick={() => {setOpen(state => ({...state, one1: true})); setLastOption(3);}}>
                        [ Speak to her next time in class ]
                    </p>
                </div>
                <Dialog open={open.one1} disableBackdropClick onClose={() => {setOpen(state => ({...state, one1: false}));}}>    
                    <DialogContent className="popup" style={{backgroundColor: '#A67C52'}}>
                        <p>
                            Speaking with a student in person is a good choice, but you aren't expected to raise the issue
                            with them if you don't want to. Filing a Student of Concern report is the recommended course of action.
                        </p>
                        <div className="click-to-close" onClick={() => {setStep(2); setOpen(state => ({...state, one1: false}));}}>
                            <p>[ Click to continue ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
                <Dialog open={open.one2} disableBackdropClick onClose={() => {setOpen(state => ({...state, one2: false}));}}>
                    <DialogContent className="popup" style={{backgroundColor: '#A67C52'}}>
                        <div className="click-to-close" onClick={() => {setOpen(state => ({...state, one2: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }


    function step2() {
        if(!open.two1 && !open.two2) setVideoTime(1, 3);

        return (
            <div className="dialogue brown-white-background" key={step}>
                <h1 className="fade-in">
                    "You wanted to speak with me?"
                </h1>

                <div className="last-dialogue-option">
                    {lastOption === 2 ? (
                        <p>[ Have you, or one of the TA's send her an email to speak after class ]</p>
                    ) : (
                        <p>[ Send a Student of Concern Report ]</p>
                    )}
                </div>

                <div className="dialogue-options fade-in-longer">
                    <p onClick={() => {setOpen(state => ({...state, two1: true})); setLastOption(1);}}>
                        "Yes, I was wondering whether or not something was going on? You missed class and assignments for the last week, usually that means there is something distracting from your studies."
                    </p>
                    <p onClick={() => {setOpen(state => ({...state, two1: true})); setLastOption(2);}}>
                        "Yes, I was worried about you. I didn't see you in class this week, and you missed the assignments. If there's anything going on, I can try to point you towards someone who can help you."
                    </p>
                    <p onClick={() => {setOpen(state => ({...state, two2: true})); setLastOption(3);}}>
                        "Yes, I was concerned with your attendance. That is worth 10% of your grade, so ensure you're in class for the future."
                    </p>
                </div>
                <Dialog open={open.two1} disableBackdropClick onClose={() => {setStep(3); setOpen(state => ({...state, two1: false}));}}>    
                    <DialogContent className="popup" style={{backgroundColor: '#A67C52'}}>
                        <p>Direct confrontation of the issue is the best course of action. The only way to understand her problem is to ask about it.</p>
                        <div className="click-to-close" onClick={() => {setStep(3); setOpen(state => ({...state, two1: false}));}}>
                            <p>[ Click to continue ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
                <Dialog open={open.two2} disableBackdropClick>
                    <DialogContent className="popup" style={{backgroundColor: '#A67C52'}}>
                        <div className="click-to-close" onClick={() => {setOpen(state => ({...state, two2: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }

    function step3() {
        if(!open.three1 && !open.three2) setVideoTime(6, 14);    // only plays video when dialog is not open

        return (
            <div className="dialogue brown-white-background" key={step}>
                <h1 className="fade-in">
                    "Yes, some personal things have taken my time up. I have been sleeping through classes and missing my alarms."
                </h1>

                <div className="last-dialogue-option">
                    {lastOption === 1 ? (
                        <p>"Yes, I was wondering whether or not something was going on? You missed class and assignments for the last week, usually that means there is something distracting from your studies."</p>
                    ) : (
                        <p>"Yes, I was worried about you. I didn't see you in class this week, and you missed the assignments. If there's anything going on, I can try to point you towards someone who can help you."</p>
                    )}
                </div>

                <div className="dialogue-options fade-in-longer">
                    <p onClick={() => {setOpen(state => ({...state, three1: true})); setLastOption(1);}}>
                        "If it's become a problem, I think you should speak to someone about it. Are you aware of the resources on campus?"
                    </p>
                    <p onClick={() => {setOpen(state => ({...state, three2: true})); setLastOption(2);}}>
                        "You should be able to manage your sleep, don't stay out late"
                    </p>
                    <p onClick={() => {setOpen(state => ({...state, three2: true})); setLastOption(3);}}>
                        "I'm sorry to hear that, have you tried caffeine?"
                    </p>
                </div>
                <Dialog open={open.three1} disableBackdropClick>    
                    <DialogContent className="popup" style={{backgroundColor: '#A67C52'}}>
                        <p>Sleep, Hygiene, and Self Care are all typically affected by stress. Mental illness warning signs typically present themselves as changes in behavior. A detailed list can be found here:</p>
                        <p><a href="https://www.purdue.edu/advocacy/faculty/incident.html" target="_blank" rel="noopener noreferrer">Student of Concern Reporting Link</a></p>
                        <div className="click-to-close" onClick={() => {setStep(4); setOpen(state => ({...state, three1: false}));}}>
                            <p>[ Click to continue ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
                <Dialog open={open.three2} disableBackdropClick onClose={() => {setOpen(state => ({...state, three2: false}));}}>
                    <DialogContent className="popup" style={{backgroundColor: '#A67C52'}}>
                        <div className="click-to-close" onClick={() => {setOpen(state => ({...state, three2: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }

    function step4() {
        if(!open.four1 && !open.four2) setVideoTime(17, 21);    // only plays video when dialog is not open

        return (
            <div className="dialogue brown-white-background" key={step}>
                <h1 className="fade-in">
                    "I've heard of CAPS, but I'm not sure I need all that."
                </h1>

                
                <div className="last-dialogue-option">
                    <p>"If it's become a problem, I think you should speak to someone about it. Are you aware of the resources on campus?"</p>
                </div>


                <div className="dialogue-options fade-in-longer">
                    <p onClick={() => {setOpen(state => ({...state, four2: true})); setLastOption(1);}}>
                        "Well that's good, if you do need help reach out to them."
                    </p>
                    <p onClick={() => {setOpen(state => ({...state, four1: true})); setLastOption(2);}}>
                        "There are other options out there for you. I'll file something with ODOS and they will reach out to you."
                    </p>
                    <p onClick={() => {setOpen(state => ({...state, four2: true})); setLastOption(3);}}>
                        "If you contact ODOS they can help you sort this out."
                    </p>
                </div>

                <Dialog open={open.four1} disableBackdropClick>    
                    <DialogContent className="popup" style={{backgroundColor: '#A67C52'}}>
                        <p>Filing a student of concern report is easy, and the form can be found online here:</p>
                        <p><a href="https://www.purdue.edu/advocacy/faculty/incident.html" target="_blank" rel="noopener noreferrer">Student of Concern Reporting Link</a></p>
                        <div className="click-to-close" onClick={() => {setStep(5); setOpen(state => ({...state, four1: false}));}}>
                            <p>[ Click to continue ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
                <Dialog open={open.four2} disableBackdropClick onClose={() => {setOpen(state => ({...state, four2: false}));}}>
                    <DialogContent className="popup" style={{backgroundColor: '#A67C52'}}>
                        <div className="click-to-close" onClick={() => {setOpen(state => ({...state, four2: false}));}}>
                            <p>[ Click to retry ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }

    function step5() {
        if(!open.five) setVideoTime(24, 30);    // only plays video when dialog is not open

        return (
            <div className="dialogue brown-white-background" key={step}>
                <h1 className="fade-in">
                    "Okay, I think I would like to speak to someone about what resources are out there."
                </h1>


                <div className="last-dialogue-option">
                    <p>"There are other options out there for you. I'll file something with ODOS and they will reach out to you."</p>
                </div>


                <div className="dialogue-options fade-in-longer">
                    <p onClick={() => {setOpen(state => ({...state, five: true})); setLastOption(1);}}>
                        [ Click to continue ]
                    </p>
                </div>
                <Dialog open={open.five} disableBackdropClick>    
                    <DialogContent className="popup" style={{backgroundColor: '#A67C52'}}>
                        <p>
                            Have you had a conversation like this? Caring for student's mental health isn't a job requirement, but being aware of the resources
                            available empowers you to help them. You can find professional training for the ODOS Student of Concern Reporting System offered in <em>Purdue Today</em>.
                            You can also contact <a href="mailto:syeagley@purdue.edu">Steven Yeagley</a> to attend a training session typically offered 2-3 times a semester,
                            or to schedule one for your department.
                        </p>
                        <div className="click-to-close" onClick={() => {setStep(6); setOpen(state => ({...state, five: false}));}}>
                            <p>[ Click to finish ]</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }

    function step6() {
        return (
            <div className="App homepage finish" key={step}>
                <h1>You did great! In case you missed them:</h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 951.5 47.5"><defs><style></style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path stroke='#ffffff' fill="none" strokeMiterlimit="10" className="cls-1" d="M0,.5C596.36,1.71,950.93,4.43,951,9.22c.11,7.29-823.06,14.24-823,24.41,0,4.6,168.43,9.11,566,13.37"/></g></g></svg>
                
                <div className="research-resources">
                    <div className="resources">
                        <h2>Resources</h2>
                        <ul>
                            <li><a href="https://www.purdue.edu/advocacy/faculty/incident.html" target="_blank" rel="noopener noreferrer">Student of Concern Reporting Link</a></li>
                        </ul>
                    </div>
                </div>

                <p className="finish-button" onClick={() => {
                    props.setTranslateHome('slide-down-page');
                    props.setDisplayFacultyScenarios('none');
                    props.setScenario(false);
                    }}>
                    [ Click to return home ]
                </p>
            </div>
        );
    }
}


export default FriendDepression;