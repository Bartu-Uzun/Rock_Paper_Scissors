import { matchups, outcomes, gestures } from './ConstantHandler';

import srcRock from '../images/icon-rock.svg';
import srcPaper from '../images/icon-paper.svg';
import srcScissors from '../images/icon-scissors.svg';

export const getRandomInt = (max) => {
  let x = Math.floor(Math.random() * max);
  return x;
};

export const calculateWinLoss = (userGesture, aiGesture) => {
  for (const matchup of matchups) {
    if (userGesture == matchup.gesture && aiGesture == matchup.beats) {
      return outcomes.WIN;
    } else if (aiGesture == matchup.gesture && userGesture == matchup.beats) {
      return outcomes.LOSE;
    }
  }
  return outcomes.DRAW;
};

export const mapGestureToImage = (gesture) => {
  let src;
  switch (gesture) {
    case gestures.PAPER:
      src = srcPaper;
      break;
    case gestures.ROCK:
      src = srcRock;
      break;
    case gestures.SCISSORS:
      src = srcScissors;
      break;
    default:
      console.log('error!: ' + gesture);
      break;
  }

  return src;
};
