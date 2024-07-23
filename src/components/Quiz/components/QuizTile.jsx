import React from "react";
import "./QuizTile.css";

function QuizTile(props) {
    return (
        <div className="quiztile-container">
            <div className="quiz-tile-title">{props.id + 1}. {props.title}</div>
            <div className="quiz-score-box">
                <div>Total Score: {props.points}</div>
                {props.data[props.id] != null ? <div>{`Your Score: ${props.data[props.id]}`}</div> : <div>Unattempted</div>}
            </div>
            <button style={props.data[props.id] != null ? { backgroundColor: "rgb(246, 246, 142)" } : {}} className="quiz-start-button" onClick={props.onClick}>{props.data[props.id] != null ? "Reattempt" : "Attempt"}</button>
        </div>
    );
}

export default QuizTile;