import CircularButton from './CircularButton';
import srcRock from '../images/icon-rock.svg';
import srcPaper from '../images/icon-paper.svg';
import srcScissors from '../images/icon-scissors.svg';
import { gestures } from '../domain/ConstantHandler';

export default function GameSection({ onClick }) {
  return (
    <div className="game-section">
      <div className="button-column">
        <div className="button-row">
          <CircularButton
            src={srcRock}
            onClick={onClick}
            type={gestures.ROCK}
          />
          <CircularButton
            src={srcPaper}
            onClick={onClick}
            type={gestures.PAPER}
          />
        </div>
        <div className="button-row">
          <CircularButton
            src={srcScissors}
            onClick={onClick}
            type={gestures.SCISSORS}
          />
        </div>
      </div>
    </div>
  );
}
