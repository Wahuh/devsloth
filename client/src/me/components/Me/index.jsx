import React from 'react';
import {Route} from 'react-router-dom';
import Board from '../../../boards/components/Board';
import BoardsList from '../../../boards/components/BoardsList';

const Me = ({match}) => {
  console.log(match);
  return (
    <div>
      <Route exact path={`${match.path}/boards`} component={BoardsList} />
      <Route path={`${match.path}/boards/:board_id`} component={Board} />
    </div>
  );
};

export default Me;
