import React from "react";
import "./Leaderboard.css";

const Leaderboard = (props) => {
  return (
    <div className="leaderboard-container">
      <h1 className="leaderboard-heading">Leaderboard</h1>
      <div className="leaderboard-header">
        <div className="leaderboard-heading-name">Name</div>
        <div className="leaderboard-heading-rank">Rank</div>
        <div className="leaderboard-heading-score">Score</div>
      </div>
      <div className="leaderboard-values">
        {props.data &&
          props.data.map((item, index) => {
            return (
              <>
                <div
                  className="leaderboard-username"
                  style={props.username === item[0] ? { color: "green" } : {}}
                >
                  {item[0]}
                </div>
                <div className="leaderboard-rank">{index + 1}</div>
                <div className="leaderboard-score">{item[1]}</div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Leaderboard;
