import { useState, useEffect, useRef } from 'react';
import './App.css';
import Headline from './components/Headline';
import RulesButton from './components/RulesButton';
import Dialog from './components/Dialog';
import GameSection from './components/GameSection';
import ResultSection from './components/ResultSection';

import srcRules from './images/image-rules.svg';

import { numbers, outcomes, strings } from './domain/ConstantHandler';
import { calculateWinLoss } from './domain/Utils';
import getAIGesture from './domain/MarkovAI';

function App() {
  return <MainScreen />;
}

function MainScreen() {
  const [aiGesture, SetAIGesture] = useState('');
  const [userGesture, SetUserGesture] = useState('');
  const [outcome, SetOutcome] = useState(outcomes.DRAW);
  const [gameOngoing, SetGameOngoing] = useState(true);
  const [score, SetScore] = useState(() => {
    const localScore = localStorage.getItem(strings.LOCAL_SCORE);

    if (localScore == null) return 0;

    return JSON.parse(localScore);
  });

  const dialogRef = useRef(null);

  useEffect(() => {
    localStorage.setItem(strings.LOCAL_SCORE, JSON.stringify(score));
  }, [score]);

  useEffect(() => {
    handleWinLoss(userGesture, aiGesture);
  }, [userGesture, aiGesture]);

  const handleSelectGesture = (gesture) => {
    handleUserGesture(gesture);
    handleAIGesture(gesture);
    handleGameOngoing();
  };

  const handlePlayAgain = () => {
    handleGameOngoing();
  };

  const handleGameOngoing = () => {
    SetGameOngoing((currentGameOngoing) => {
      return !currentGameOngoing;
    });
  };

  const handleUserGesture = (gesture) => {
    SetUserGesture(gesture);
  };

  /* userGesture is only given to update the markov matrix for the next round!
   * ai's not cheating :)
   */
  const handleAIGesture = (userGesture) => {
    SetAIGesture(getAIGesture(userGesture));
  };

  const handleWinLoss = () => {
    let newOutcome = calculateWinLoss(userGesture, aiGesture);
    SetOutcome(newOutcome);

    if (newOutcome == outcomes.WIN) {
      handleScore(numbers.DELTA_SCORE);
    } else if (newOutcome == outcomes.LOSE && score > 0) {
      handleScore(-numbers.DELTA_SCORE);
    }
  };

  const handleScore = (deltaScore) => {
    setTimeout(() => {
      SetScore((currentScore) => {
        return currentScore + deltaScore;
      });
    }, numbers.SCORE_DELAY);
  };

  const handleRulesDialog = () => {
    if (!dialogRef.current) return;

    dialogRef.current.hasAttribute('open')
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  };

  return (
    <div className="main-section">
      <Headline score={score} />
      <Dialog toggleDialog={handleRulesDialog} ref={dialogRef}>
        <img src={srcRules} alt="rules" />
      </Dialog>

      {gameOngoing ? (
        <GameSection onClick={handleSelectGesture} />
      ) : (
        <ResultSection
          userGesture={userGesture}
          aiGesture={aiGesture}
          outcome={outcome}
          onClick={handlePlayAgain}
        />
      )}

      <RulesButton onClick={handleRulesDialog} />
    </div>
  );
}

export default App;
