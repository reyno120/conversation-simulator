import '../css/loading.css';

function LoadingScreen(props) {
    return (
        <div className={`loading-screen ${props.animation} ${props.fade}`}>
            <div className="load-icon"></div>
        </div>
    );
}

export default LoadingScreen;