import { useState } from './react'
import { winningStates } from '../utils/consts'

export const useStartGame = () => {
    const [turn, setTurn] = useState(true)
    const [xState, setXState] = useState([])
    const [oState, setOState] = useState([])
}