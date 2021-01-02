import "./grid-status.css";

function Grid() {
    return (
        <div className="grid-status">
            <div className="grid-status-cell">
                <div className="curr-status-text">DEL</div>
                <div className="counter-num">916</div>
            </div>
            <div className="grid-status-cell">
                <div className="curr-status-text">INT</div>
                <div className="counter-num">916</div>
            </div>
            <div className="grid-status-cell">
                <div className="curr-status-text">DEL</div>
                <div className="counter-num">232</div>
            </div>
            <div className="grid-status-cell">
                <div className="curr-status-text">OOD</div>
                <div className="counter-num">342</div>
            </div>
            <div className="grid-status-cell">
                <div className="curr-status-text">NFI</div>
                <div className="counter-num">916</div>
            </div>
        </div>
    );
  }
  
  export default Grid;