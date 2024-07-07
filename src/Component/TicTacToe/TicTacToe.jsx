import React, { useState } from 'react';
import './TicTac.css';
import circle_icon from '../Assets/Assets/circle.png';
import cross_icon from '../Assets/Assets/cross.png';

export const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);

  const toggle = (e, num) => {
    if (lock || data[num] !== "") {
      return;
    }

    const newData = [...data];
    newData[num] = count % 2 === 0 ? "x" : "o";
    setData(newData);

    e.target.innerHTML = `<img src='${count % 2 === 0 ? cross_icon : circle_icon}' alt='${newData[num]}' />`;
    setCount(count + 1);

    checkWin(newData);
  };

  const checkWin = (data) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let condition of winConditions) {
      const [a, b, c] = condition;
      if (data[a] && data[a] === data[b] && data[a] === data[c]) {
        won(data[a]);
        return;
      }
    }
  };

  const won = (winner) => {
    setLock(true);
    alert(`${winner} wins!`);
  };

  const resetGame = () => {
    setData(["", "", "", "", "", "", "", "", ""]);
    setCount(0);
    setLock(false);
    document.querySelectorAll('.boxes').forEach(box => (box.innerHTML = ""));
  };

  return (
    <div className='container'>
      <h1 className="title">Tic Tac Toe Game In <span>React</span></h1>
      <div className="board">
        <div className="row1">
          <div className="boxes" onClick={(e) => toggle(e, 0)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 1)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 2)}></div>
        </div>
        <div className="row2">
          <div className="boxes" onClick={(e) => toggle(e, 3)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 4)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 5)}></div>
        </div>
        <div className="row3">
          <div className="boxes" onClick={(e) => toggle(e, 6)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 7)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 8)}></div>
        </div>
      </div>
      <button className='reset' onClick={resetGame}>Reset</button>
    </div>
  );
};
