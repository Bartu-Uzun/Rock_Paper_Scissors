import { gestures, numbers, strings } from './/ConstantHandler';
import { getRandomInt } from './/Utils';

/*
 *    R    P    S
 * R 1/3  1/3  1/3
 * P 1/3  1/3  1/3
 * S 1/3  1/3  1/3
 */

// const transitionMatrixObject = {
//   [gestures.ROCK]: {
//     [gestures.ROCK]: 1 / 3,
//     [gestures.PAPER]: 1 / 3,
//     [gestures.SCISSORS]: 1 / 3,
//   },
//   [gestures.PAPER]: {
//     [gestures.ROCK]: 1 / 3,
//     [gestures.PAPER]: 1 / 3,
//     [gestures.SCISSORS]: 1 / 3,
//   },
//   [gestures.SCISSORS]: {
//     [gestures.ROCK]: 1 / 3,
//     [gestures.PAPER]: 1 / 3,
//     [gestures.SCISSORS]: 1 / 3,
//   },
// };

let lastUserMove = JSON.parse(
  localStorage.getItem(strings.LOCAL_LAST_USER_MOVE)
);

const localMatrix = localStorage.getItem(strings.LOCAL_MARKOV_MATRIX);

const transitionMatrixObject =
  localMatrix != null
    ? JSON.parse(localMatrix)
    : {
        [gestures.ROCK]: {
          [gestures.ROCK]: 1 / 3,
          [gestures.PAPER]: 1 / 3,
          [gestures.SCISSORS]: 1 / 3,
        },
        [gestures.PAPER]: {
          [gestures.ROCK]: 1 / 3,
          [gestures.PAPER]: 1 / 3,
          [gestures.SCISSORS]: 1 / 3,
        },
        [gestures.SCISSORS]: {
          [gestures.ROCK]: 1 / 3,
          [gestures.PAPER]: 1 / 3,
          [gestures.SCISSORS]: 1 / 3,
        },
      };

const getAIGesture = (actualUserMove) => {
  // predict user move
  let predictedUserMove = predictUserMove();
  // counter predicted move
  let aiMove = counterUserMove(predictedUserMove);
  // update transition using actual user move
  updateTransitionMatrixObject(actualUserMove);

  lastUserMove = actualUserMove;
  setLocalValues();

  console.log(transitionMatrixObject);
  return aiMove;
};

export default getAIGesture;

const updateTransitionMatrixObject = (actualMove) => {
  if (lastUserMove == null) return;

  let moveProbabilities = transitionMatrixObject[lastUserMove];

  let decreaseRate = 1 - numbers.LEARNING_RATE;

  for (let move in moveProbabilities) {
    if (moveProbabilities.hasOwnProperty(move)) {
      moveProbabilities[move] *= decreaseRate;
    }
  }

  moveProbabilities[actualMove] += numbers.LEARNING_RATE;
};

const counterUserMove = (predictedMove) => {
  let counterMove;
  switch (predictedMove) {
    case gestures.PAPER:
      counterMove = gestures.SCISSORS;
      break;
    case gestures.ROCK:
      counterMove = gestures.PAPER;
      break;
    case gestures.SCISSORS:
      counterMove = gestures.ROCK;
      break;
    default:
      console.log('error!: ' + predictedMove);
      break;
  }

  return counterMove;
};

const predictUserMove = () => {
  if (lastUserMove == null) {
    return predictRandom();
  } else {
    return predictUsingTransitionMatrix();
  }
};

const predictUsingTransitionMatrix = () => {
  let moveProbabilities = transitionMatrixObject[lastUserMove];

  let goalValue = Math.random();

  /* all movement probabilities will sum up to 1
   * goal is creating subintervals in [0, 1]
   */
  let additiveSum = 0;

  for (let move in moveProbabilities) {
    if (moveProbabilities.hasOwnProperty(move)) {
      additiveSum += moveProbabilities[move];
      if (goalValue <= additiveSum) {
        return move;
      }
    }
  }

  /* this should never be called, unless there's a bug */
  return predictRandom();
};

const predictRandom = () => {
  let index = getRandomInt(Object.keys(gestures).length);
  let i = 0;
  for (let gesture in gestures) {
    if (i == index) {
      return gesture;
    }
    i++;
  }
};

function setLocalValues() {
  localStorage.setItem(
    strings.LOCAL_LAST_USER_MOVE,
    JSON.stringify(lastUserMove)
  );
  localStorage.setItem(
    strings.LOCAL_MARKOV_MATRIX,
    JSON.stringify(transitionMatrixObject)
  );
}
