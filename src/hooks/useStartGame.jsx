import { useState } from 'react';
import {
  turnIsRecorded,
  calculateWinner,
  calculateGameOver,
} from '../utils/turn';
import { winningStates } from '../utils/consts';

export const useStartGame = () => {
  // + react
  const [xState, setXState] = useState([]);
  const [oState, setOState] = useState([]);
  const [xTurn, setXTurn] = useState(true);

  const [resultGameText, setResultGameText] = useState('');

  if (!resultGameText && (xState.length || oState.length)) {
    const winner = calculateWinner({ xState, oState, winningStates });
    console.log(xState, oState, winningStates, winner);
    if (winner) {
      setResultGameText(winner === 'x' ? 'X wins!' : 'O wins!');
    } else if (calculateGameOver([...xState, ...oState])) {
      setResultGameText('Game over!');
    }
  }

  const turn = ({ id }) => {
    if (!id && id !== 0) return;
    if (turnIsRecorded([...xState, ...oState], id)) return;
    if (resultGameText) return;


    xTurn ? setXState([...xState, id]) : setOState([...oState, id]);


    setXTurn(!xTurn);
  };

  const restartGame = () => {
    setXState([]);
    setOState([]);
    setXTurn(true);
    setResultGameText('');
  };

  return {
    turn,
    xState,
    oState,
    resultGameText,
    restartGame,
  };
};
