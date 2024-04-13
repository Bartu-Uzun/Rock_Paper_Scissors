export default function CircularButton({ src, onClick, type }) {
  return (
    <button className="circular-button" onClick={() => onClick(type)}>
      <img src={src} alt="rock" className="svg-button" />
    </button>
  );
}
