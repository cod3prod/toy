import { useState, useEffect } from 'react'; 

function Square({value, onSquareClick}){
  return(
    <div className='square' onClick={onSquareClick}>{value}</div>
  )
}

function Board({xIsNext, squares, onPlay, currentMove}){
  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = `Winner : Player ${winner}`;
  }
  else if(currentMove===9) {
    status = 'Draw!'
  }
  else{
    status = `Next Player : ${xIsNext?'X':'O'}`;
  }

  function handleClick(i){
    if(squares[i] || winner){
      return;
    }
    const nextSquares = squares.slice()
    nextSquares[i] = xIsNext ? 'X' : 'O';
  
    onPlay(nextSquares);
  }
  const allSquares = squares.map((square, idx) => {
    return (
      <Square key={idx} value={square} onSquareClick={()=>{handleClick(idx)}} />
    )
  })
  

  return(
    <>
      <div className='board'>
        <div className='status'>{status}</div>
        {allSquares}
      </div>
    </>
  )
}

function calculateWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for(let i = 0 ; i < lines.length; i++){
    const [a, b, c] = lines[i];
    if(squares[a]&&squares[a]===squares[b]&&squares[a]===squares[c]){
      return squares[a]
    }
  }
  
  return null;
}

export default function Game(){
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [backward, setBackward] = useState(false);
  const [toggleText, setToggleText] = useState('▼');

  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0 ? true : false;

  const moves = history.map((squares, move) => {
    let description;

    if(move===0){
      description = 'GAME START!';  
    }
    else{
      description = `Go to move #${move}  (${parseInt(currentMove/3)}, ${currentMove%3})`
    }

    return (
      <div className="log-description" key={move} onClick={()=>{jumpTo(move)}}>
        {description}
      </div>
    )
  })

  function handlePlay(nextSquares){
    const nextHistory = [...history, nextSquares];
    const nextMove = currentMove+1;
    setHistory(nextHistory);
    setCurrentMove(nextMove);
  }


  function jumpTo(nextMove){
    const nextHistory = history.slice(0, nextMove+1);
    setCurrentMove(nextMove);
    setHistory(nextHistory);
  }

  function toggle() {
    setBackward(!backward);
    const currentToggleText = toggleText;
    currentToggleText === '▼' ? setToggleText('▲') : setToggleText('▼');
  }
  
  useEffect(() => {
    const adjustFontSize = () => {
      const divs = document.querySelectorAll('.square');
      divs.forEach((div) => {
        const width = div.clientWidth;
        const fontSize = width * 0.7; 
        div.style.fontSize = `${fontSize}px`;
      });
    };

    adjustFontSize(); 
    window.addEventListener('resize', () => {
      adjustFontSize();
    }); 

    return () => {
      window.removeEventListener('resize', adjustFontSize); // 컴포넌트 언마운트 시 이벤트 리스너 제거
    };
  }, [currentSquares]); 


  return(
      <div className='container'>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} currentMove={currentMove}/>
        <div className='game-history'>
          <div id="toggle"onClick={()=>{toggle()}}>{toggleText}</div>
          <div className="log-title">
              {
                currentMove===0 ? 
                'Are you ready?' :
                `You are at move #${currentMove}!`
              }
          </div>
          {backward?moves.reverse():moves}
        </div>
      </div>
  )
}


