import { mapGestureToImage } from '../domain/Utils';
import DisplayAIGesture from './DisplayAIGesture';
import PlayAgainSection from './PlayAgainSection';
import SelectedGesture from './SelectedGesture';

export default function ResultSection({
  userGesture,
  aiGesture,
  outcome,
  onClick,
}) {
  let userSrc = mapGestureToImage(userGesture);
  let aiSrc = mapGestureToImage(aiGesture);
  return (
    <div className="result-section">
      <div className="button-row">
        <SelectedGesture src={userSrc} gesture={userGesture}>
          <h4>YOU'VE SELECTED</h4>
        </SelectedGesture>

        <DisplayAIGesture src={aiSrc} gesture={aiGesture} />
      </div>
      <div>
        <div>
          <PlayAgainSection outcome={outcome} onClick={onClick} />
        </div>
      </div>
    </div>
  );
}
