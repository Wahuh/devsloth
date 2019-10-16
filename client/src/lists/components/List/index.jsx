import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../../../common/components/Typography';
import styles from './List.module.scss';

const List = ({list}) => {
  const {title} = list;
  return (
    <li className={styles.List}>
      <Typography fontSize={18} fontWeight={600} color="secondary">
        {title}
      </Typography>
      <ul />
    </li>
  );
};

List.propTypes = {
  list: PropTypes.objectOf({title: PropTypes.string}).isRequired,
};

export default List;
