import { Grid } from './components/Grid'
import { Cell } from './components/Cell'


export function App() {
  const { turn, xState, oState } = useStartGame();
  
  return (
  <>
      <h1>tic-tac-toe</h1>
      <Grid>
      {Array.from(Array(9)).map((item, index) => <Cell key={index}></Cell>)}
      </Grid>
    </>
  )
  }