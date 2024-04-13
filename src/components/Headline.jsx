import src1 from '../images/logo.svg';

export default function Headline({ score }) {
  return (
    <div className="headline-section">
      <div className="headline-container">
        <Logo />
        <Scoreboard score={score} />
      </div>
    </div>
  );
}

function Scoreboard({ score }) {
  return (
    <div className="headline-scoreboard">
      <h5 className="score">SCORE</h5>
      <h1 className="score">{score}</h1>
    </div>
  );
}

function Logo() {
  return (
    <div className="logo-container">
      <img src={src1} alt="rock paper scissors" />
    </div>
  );
}
