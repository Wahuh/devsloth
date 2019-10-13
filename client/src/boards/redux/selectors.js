export const getBoards = (state, id) => {
  return Object.keys(state.boards.byId).reduce((acc, board_id) => {
    const board = state.boards.byId[board_id];
    if (board.owner_id === id) {
      acc.push(board);
    }
    return acc;
  }, []);
};

export const getBoard = (state, id) => {
  console.log(state.boards, id);
  return state.boards.byId[id];
};

export const getChannelBoards = () => {};
