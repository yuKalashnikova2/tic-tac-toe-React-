import { Grid } from './components/Grid'
import { Cell } from './components/Cell'
import { useStartGame } from './hooks/useStartGame';
import { Result } from './components/Result'


export function App() {
  const { turn, xState, oState, resultGameText, restartGame } = useStartGame();

  function handleClick(index) {
    turn({ id: index });
  }

  const compare = (index) => {
    return xState.includes(index) ? 'x' : oState.includes(index) ? 'o' : false;
  };

  return (
  <>
      <h1>❌ Tic-Tac-Toe ⭕</h1>
      {!!resultGameText ? (
          <Result>
            <p>{resultGameText}</p>
            <button onClick={restartGame}>Reset game</button>
          </Result>
        ) : null}
        <Grid>
          {Array.from(Array(9)).map((_, index) => (
            <Cell
              key={index}
              value={compare(index)}
              onClick={() => handleClick(index)}
            ></Cell>
          ))}
        </Grid>
    </>
  )
  }