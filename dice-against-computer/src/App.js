import React from 'react';
import { useState, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix, faArrowsSpin } from "@fortawesome/free-solid-svg-icons";

function Dice({ diceFace, player, score }) {
  return (
    <div className='dice-container'>
      <div className='dice-title'>{player}</div>
      <div className='dice'>
        <FontAwesomeIcon icon={diceFace} style={{ fontSize: '140px', color: player === 'USER' ? '#74C0fC' : '#f05151' }} />
      </div>
      <div className='total-score'>{`score : ${score}`}</div>
    </div>

  );
}

function GameLog({ history }) {
  const log = history.map((el, idx) => {
    return (
      <li key={idx}>{`#${idx + 1} ${el}`}</li>
    );
  });
  return (
    <ul>{log}</ul>
  )
}

function End({ status }) {
  const gameEndRef = useRef();

  if (status) {
    gameEndRef.current.className = 'game-end-modal active';
  }

  function closeModal() {
    gameEndRef.current.className = 'game-end-modal';
  }

  return (
    <div ref={gameEndRef} className='game-end-modal'>
      <div className='game-end-content'>
        <span onClick={closeModal} class="close">&times;</span>
        <p>{status}</p>
      </div>
    </div>
  );
}

function ResetButton({onReset}) {
  return (
    <div onClick={onReset} className='reset-button'>
      <FontAwesomeIcon icon={faArrowsSpin} />
    </div>
  );
}


export default function App() {
  const [userScore, setUserScore] = useState(0);
  const [comScore, setComScore] = useState(0);
  const [userDice, setUserDice] = useState(0);
  const [comDice, setComDice] = useState(0);
  const [winner, setWinner] = useState(null);
  const [history, setHistory] = useState([]);
  const logRef = useRef();

  const diceFaces = [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix];

  function rollDice() {
    if (winner) {
      return;
    }

    const nextUserDice = Math.floor(Math.random() * 6);
    const nextComDice = Math.floor(Math.random() * 6);

    let nextUserScore = userScore;
    let nextComScore = comScore;
    let nextHistory = history.slice();


    if (nextUserDice > nextComDice) {
      nextUserScore++;
      nextHistory.push('User scores 1 point.');
      setHistory(nextHistory);
    }
    else if (nextUserDice < nextComDice) {
      nextComScore++;
      nextHistory.push('Computer scores 1 point.');
      setHistory(nextHistory);
    }
    else {
      nextHistory.push('The user and the computer have the same roll.');
      setHistory(nextHistory);
    }

    if (nextUserScore === 10 || nextComScore === 10) {
      setWinner(nextUserScore === 10 ?
        'USER WIN!' : 'COM WIN'
      );
    }

    scroll();
    setUserDice(nextUserDice);
    setComDice(nextComDice);
    setUserScore(nextUserScore);
    setComScore(nextComScore);
  }

  function scroll() {
    logRef.current.scrollTop = logRef.current.scrollHeight;
  }

  function reset() {
    setUserScore(0);
    setComScore(0);
    setUserDice(0);
    setComDice(0);
    setWinner(null);
    setHistory([]);
  }

  return (
    <div className='game'>
      <div className='game-title'>Dice against Computer</div>
      <div className='dice-container-set'>
        <Dice diceFace={diceFaces[userDice]} player={'USER'} score={userScore} />
        <Dice diceFace={diceFaces[comDice]} player={'COM'} score={comScore} />
      </div>
      <div className='dice-button' onClick={rollDice}>Roll the dice</div>
      <div ref={logRef} className='game-log'>
        <GameLog history={history} />
        
      </div>

      <End status={winner} />
      <ResetButton onReset={reset}/>
    </div>
  );
}


