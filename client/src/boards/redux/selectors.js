export const selectBoardsByOwnerId = (state, owner_id) => {
  return Object.keys(state.boards.byId).reduce((acc, board_id) => {
    const board = state.boards.byId[board_id];
    if (board.owner_id === owner_id) {
      acc.push(board);
    }
    return acc;
  }, []);
};

export const selectBoard = (state, id) => {
  return state.boards.byId[id] || null;
};
