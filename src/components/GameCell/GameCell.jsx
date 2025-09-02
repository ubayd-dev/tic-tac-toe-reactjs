import React, { useContext } from 'react'
import { CellStyle } from './GameCell.styled'
import { GameContext } from '../../contexts/GameContexts'
import RoundOverModal from '../Modal/RoundOverModal/RoundOverModal'
import { checkForWinner } from '../../utils/GameUtils'
import { ReactComponent as IconX } from '../../assets/svgs/icon-x.svg'
import { ReactComponent as XIconOutline } from '../../assets/svgs/icon-x-outline.svg'
import { ReactComponent as IconO } from '../../assets/svgs/icon-o.svg'
import { ReactComponent as OIconOutline } from '../../assets/svgs/icon-o-outline.svg'
import { ModalContext } from '../../contexts/ModalContext'

function GameCell({ cellItem, index }) {
  const { updateBoard, game , roundComplete} = useContext(GameContext)
  const { handleModal } = useContext(ModalContext)
  
  const cellClickHandler = () => {
    updateBoard(index)

    const result = checkForWinner(game.board)
    
    if (result) {
      roundComplete(result)
         handleModal(<RoundOverModal/>)
   }

     };
  
    if (cellItem === "x") {
      return (
        <CellStyle>
          <IconX  className='markedItem x-icon'/>
        </CellStyle>
       
      )
    } else if (cellItem === "o") {
      return (
            <CellStyle>
          <IconO className='markedItem o-icon'/>
        </CellStyle>
      )
    }
    return (
      <CellStyle onClick={cellClickHandler} >
        {game.turn === "x" ?
          <XIconOutline className = "outlineIcon"/> :
          <OIconOutline className = "outlineIcon"/>}
      </CellStyle>
    );
 
}

  export default GameCell;
