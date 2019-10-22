import React from 'react';
import {Link} from 'react-router-dom';
import styles from './BoardItem.module.scss';
import Typography from '../../../common/components/Typography';

const BoardItem = ({board}) => {
  const {title, id, owner_type} = board;

  const path = owner_type === 'user' ? '/@me' : '/groups';

  return (
    <li>
      <Link className={styles.BoardItem} to={`${path}/boards/${id}`}>
        <Typography color="primary">{title}</Typography>
      </Link>
    </li>
  );
};

export default BoardItem;
