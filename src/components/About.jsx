import '../css/About.css';

function About(props) {

    return (
        <div className={`about ${props.translate}`} style={{display: props.display}}>
            <h1>Psych Simulator</h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 951.5 47.5"><defs><style></style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path stroke='#ffffff' fill="none" strokeMiterlimit="10" className="cls-1" d="M0,.5C596.36,1.71,950.93,4.43,951,9.22c.11,7.29-823.06,14.24-823,24.41,0,4.6,168.43,9.11,566,13.37"/></g></g></svg>

            <h2>
                The goal of this tool is to familiarize you with having conversations around complex mental health problems 
                you might face during college. These examples are based on real life scenarios studied and developed by real 
                mental health professionals such as the QPR Institute. The core elements are: 
            </h2>
            <ul>
                <li>Increasing awareness of mental health resources in a collegiate environment </li>
                <li>Providing you with insights and access to research statistics </li>
                <li>Encouraging healthy and supportive conversation techniques commonly taught in professional training seminars</li>
            </ul>

            <p className="continue-button" onClick={() => props.selectContinue()}>[ Click to continue ]</p>

            <p className="disclaimer">
                <span>Disclaimer:</span> This is not intended to provide medical advice, or be a diagnostic tool for mental health disorders. 
                None of these people or conversations are based on any real experience, but have a basis in scientific research. 
                Many of the conversational elements were modeled after the QRP Sucicide Intervention course under 
                Fair Use guidelines, and is not intended to replace any QRP training program. This is fully intended to be a 
                comfortable emulation of mental health focused conversations in order to promote healthy conversation and knowledge
                of available resources, a purely educational tool. 
            </p>
        </div>
    );
}

export default About;