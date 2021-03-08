import './App.css';
import video from './images/Scene-cabinbg.mp4';

function App() {
  return (
    <div className="App">
      <div className="video-container">
        <video autoPlay muted >
          <source src={video} type='video/mp4' />
        </video>
      </div>
      <div className="overlay">
        <p>test</p>
      </div>
    </div>
  );
}

export default App;
