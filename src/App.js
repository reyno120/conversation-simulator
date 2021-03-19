import './css/App.css';
import './css/reset.css';
// import video from './images/Scene-cabinbg.mp4';
import Homepage from './components/Homepage.jsx';

function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;



    // <div className="App">
    //   <div className="video-container">
    //     <video autoPlay muted >
    //       <source src={video} type='video/mp4' />
    //     </video>
    //   </div>
    //   <div className="overlay">
    //     <p>test</p>
    //   </div>
    // </div>