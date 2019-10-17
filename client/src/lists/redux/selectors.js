/* eslint-disable */
export const selectListsByBoardId = (state, board_id) => {
  const listIds = Object.keys(state.lists.byId);
  const lists = listIds.reduce((acc, listId) => {
    const list = state.lists.byId[listId];
    if (list.board_id === +board_id) {
      acc.push(list);
    }
    return acc;
  }, []);
  return lists;
};
/* eslint-enable */
