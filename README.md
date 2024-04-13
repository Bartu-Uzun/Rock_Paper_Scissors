# Rock Paper Scissors Game

Classic game developed using Reactjs and Vite.

## Setup

In your project folder, run the following commands:

- npm install
- npm run dev

## How To Play:

- At each round, you can choose one of the three gestures.
- After your selection, the AI selection will be revealed, and you will learn if you've won or not. Your score value will be updated based on the result.
- If you forget which gesture beats which, you can use the rules button at any time!

## AI Behavior:

- It is a simple Markovian model that exhibits a simple reinforcement learning.
- Model has a transition matrix that considers the last state only.
- Transition matrix will be updated at each round according to the actual user gesture.
- It is a stochastic model meaning it will not select the most probable state for sure. All states can be selected based on their probabilities.

## Data Persistence

- Score and transition matrix is stored using localStorage, meaning the score and AI behavior will not be lost even when the user closes the browser and re-enters.
