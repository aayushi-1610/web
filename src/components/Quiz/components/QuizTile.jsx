import React from "react";
import "./QuizTile.css";

function QuizTile(props) {
  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      {/* <div className="quiz-tile-title">
        {props.id + 1}. {props.title}
      </div>
      <div className="quiz-score-box">
        <div>Total Score: {props.points}</div>
        {props.data[props.id] != null ? (
          <div>{`Your Score: ${props.data[props.id]}`}</div>
        ) : (
          <div>Unattempted</div>
        )}
      </div>
      <button
        style={
          props.data[props.id] != null
            ? { backgroundColor: "rgb(246, 246, 142)" }
            : {}
        }
        className="quiz-start-button"
        onClick={props.onClick}
      >
        {props.data[props.id] != null ? "Reattempt" : "Attempt"}
      </button> */}
      <div class="col-md-4 col-sm-6 col-xs-12" style={{ width: 300 }}>
        <div class="card">
          <div class="cover item-a">
            <h1 className="quiztile-title">{props.title}</h1>
            <div class="card-back">
              <a onClick={handleClick}>
                {props.data[props.id] != null ? (
                  <div>{`Your Score: ${props.data[props.id]}`}</div>
                ) : (
                  <div>Unattempted</div>
                )}
              </a>
              <a onClick={props.onClick}>
                {props.data[props.id] != null ? "Reattempt" : "Attempt"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizTile;
