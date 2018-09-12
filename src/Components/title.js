import React from "react";

const Title = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4"> Clicky Game App</h1>
        <p className="lead">
          Test Your Memory. Only click one Image once then you score.
        </p>
        <p className="lead">
          Click twice, you lose and the game will restart. Beat the Top Scorer.
          Let's Play!!!
        </p>
      </div>
    </div>
  );
};

export default Title;
