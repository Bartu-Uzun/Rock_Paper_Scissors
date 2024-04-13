export const gestures = {
  ROCK: 'ROCK',
  PAPER: 'PAPER',
  SCISSORS: 'SCISSORS',
};

export const outcomes = {
  WIN: 'YOU WIN',
  LOSE: 'YOU LOSE',
  DRAW: 'DRAW',
};

export const matchups = [
  { gesture: gestures.ROCK, beats: gestures.SCISSORS },
  { gesture: gestures.SCISSORS, beats: gestures.PAPER },
  { gesture: gestures.PAPER, beats: gestures.ROCK },
];

export const numbers = {
  SCORE_DELAY: 2500,
  DELTA_SCORE: 1,
  LEARNING_RATE: 0.2,
};

export const strings = {
  LOCAL_SCORE: 'LOCAL_SCORE',
  LOCAL_MARKOV_MATRIX: 'LOCAL_MATRIX',
  LOCAL_LAST_USER_MOVE: 'LOCAL_LAST_MOVE',
};
