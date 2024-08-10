import { useState, useEffect, useRef } from 'react';

function Square({ value, onSquareClick }) {
  const squareRef = useRef();

  useEffect(() => {
    const adjustFontSize = () => {
      const width = squareRef.current.clientWidth;
      squareRef.current.style.fontSize = `${width * 0.7}px`; 
    };

    adjustFontSize(); 
    window.addEventListener('resize', adjustFontSize); 

  }, []); 


  return (
    <div ref={squareRef} className='square' onClick={onSquareClick}>
      {value}
    </div>
  );
}

function Board({ squares, matchedCount, onPlay }) {
  const allSquares = squares.map((square, idx) => (
    <Square key={idx} value={square} onSquareClick={() => { onPlay(idx); }} />
  ));

  return (
    <div className='board'>
      <div className='status'>
        {
          matchedCount<=6 ? `Pairs left: ${8-matchedCount}`
          : matchedCount === 7 ? 'Last One!!!!' : 'You cleared it!'
        }
      </div>
      {allSquares}
    </div>
  );
}

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const roll = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[roll];
    arr[roll] = temp;
  }
  return arr;
}

export default function Game() {
  const [squares, setSquares] = useState(Array(16).fill(null));
  const [cards, setCards] = useState(['👀', '😜', '💋', '🎂', '🤷‍♂️', '🤢', '🌹', '✔', '👀', '😜', '💋', '🎂', '🤷‍♂️', '🤢', '🌹', '✔']);
  const [currentCard, setCurrentCard] = useState([]);
  const [canClick, setCanClick] = useState(true);
  const [countClick, setCountClick] = useState(0);
  const [matchedCount, setMatchedCount] = useState(0);
  const [history, setHistory] = useState([]);
  const [gameActive, setGameActive] = useState(false);

  useEffect(() => {
    if(!gameActive){
      const shuffledCards = shuffle(cards);
      setCards(shuffledCards);
      setSquares(Array(16).fill(null));
      setHistory([]);
      setCountClick(0);
      setMatchedCount(0);
    }
  }, [gameActive]);

  function handlePlay(i) {
    if (!gameActive){
      setGameActive(true);
    }
  

    if (squares[i] || !canClick) {
      return;
    }

    setCountClick(countClick + 1);

    const nextSquares = squares.slice();
    const nextCard = currentCard.slice();

    if (currentCard.length === 0) {
      nextSquares[i] = cards[i];
      nextCard.push(cards[i], i); // value and index
      setSquares(nextSquares);
      setCurrentCard(nextCard);
    }
    else {
      if (currentCard[0] === cards[i]) {
        nextSquares[i] = cards[i];
        setSquares(nextSquares);
        setMatchedCount(matchedCount+1);
        setHistory([...history, cards[i]]);
        setCurrentCard([]);
      }
      else {
        nextSquares[i] = cards[i];
        setSquares(nextSquares);
        setCanClick(false);
        setTimeout(() => {
          nextSquares[currentCard[1]] = null;
          nextSquares[i] = null;
          setSquares(nextSquares);
          setCurrentCard([]);
          setCanClick(true);
        }, 300);
      }
    }
  }

  const logDescription = history.map((data, index) => {
    return (
      <div class='log-description'>
        {`You matched the pair of ${data}.`}
      </div>
    )
  })

  function gameReset() {
    setGameActive(false);
  }

  return (
    <div className='container'>
      <Board squares={squares} matchedCount={matchedCount} onPlay={handlePlay} />
      <div className='game-history'>
        <div id="reset" onClick={gameReset}>reset</div>
        <div className="log-title">
          {`You have clicked ${countClick} times.`}
        </div>
        {logDescription}
      </div>
    </div>
  );
}
