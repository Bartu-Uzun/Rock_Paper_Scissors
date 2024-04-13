export default function DisplayAIGesture({ src, gesture }) {
  return (
    <div className="display-gesture-column">
      <h4>HOUSE SELECTS</h4>

      <div className="aiGesture-container">
        <div className="aiGesture-layer1">
          <button className="circular-button gesture-display">
            <img src={src} alt={gesture} className="svg-button" />
          </button>
        </div>

        <div className="aiGesture-layer2">
          <button className="circular-button-placeholder gesture-display"></button>
        </div>
      </div>
    </div>
  );
}
