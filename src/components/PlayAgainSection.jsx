export default function PlayAgainSection({ outcome, onClick }) {
  return (
    <div className="play-again-column">
      <h2>{outcome}</h2>
      <button className="play-again-button" onClick={() => onClick()}>
        Play Again
      </button>
    </div>
  );
}
