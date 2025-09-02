const checkForSequence = (option1, option2, option3) => {
  if (option1 === null || option2 === null || option3 === null) {
    return false;
  }
  return option1 === option2 && option2 === option3;
};
export const checkForWinner = (board) => {
  // 0 1 2
  // 3 4 5
  // 6 7 8

  //rows
  for (let i = 0; i < 9; i = i + 3) {
    if (checkForSequence(board[i], board[i + 1], board[i + 2])) {
      console.log("row winner");
      return true;
    }
  }
  //columns
  for (let i = 0; i < 3; i = i + 1) {
    if (checkForSequence(board[i], board[i + 3], board[i + 6])) {
      console.log("column winner");
      return true;
    }
  }

  // diagnol 1

  if (checkForSequence(board[0], board[4], board[8])) {
    console.log("diagnol a Winner");
    return true;
  }

  // diagnol 2
  if (checkForSequence(board[2], board[4], board[6])) {
    console.log("diagnol a Winner");
    return true;
  }

  // check if game has drawn
  if (!board.includes(null)) {
    return"draw"
  }
  return false
};
