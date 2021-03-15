import '../css/homepage.css';
import underline from '../images/icons/underline.svg';

function Homepage() {
    return (
      <div className="homepage">
          <h1>Choose which role you're interested in!</h1>
          <img src={underline} alt="underline" />

          <div className="roles">

              <div className="role">
                <h2>Faculty</h2>
                <p>yadda yadda yadda</p>
              </div>

              <div className="role">
                <h2>Friend</h2>
                <p>yadda yadda yadda</p>
              </div>

              <div className="role">
                <h2>Student</h2>
                <p>yadda yadda yadda</p>
              </div>

          </div>
      </div>
    );
}


export default Homepage;