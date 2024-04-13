export default function SelectedGesture({ src, gesture, children }) {
  return (
    <div className="display-gesture-column">
      {children}
      <button className="circular-button gesture-display">
        <img src={src} alt={gesture} className="svg-button" />
      </button>
    </div>
  );
}
