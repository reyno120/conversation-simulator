import '../css/progressbar.css';

function ProgressBar(props) {
    const fillStyles = {
        width: `${props.width}%`,
        backgroundColor: props.color,
    }

    return (
        <div className="progress-background">
            <div className="progress-fill" style={fillStyles}></div>
        </div>
    );
}

export default ProgressBar;