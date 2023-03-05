import { Grid } from './components/Grid'
import { Cell } from './components/Cell'
import { useStartGame } from './hooks/useStartGame';
import { hasAttrib } from 'domutils';


export function App() {
  const { turn, xState, oState } = useStartGame();

  function handleClick(index) {
    turn({ id: index });
  }

  const compare = (index) => {
    return xState.includes(index) ? 'x' : oState.includes(index) ? 'o' : false;
  };

  return (
  <>
      <h1>tic-tac-toe</h1>
      <Grid>
        {Array.from(Array(9)).map((_, index) => <Cell
          key={index}
          value={compare(index)}
          onClick={() => handleClick(index)}
        ></Cell>)}
      </Grid>
    </>
  )
  }