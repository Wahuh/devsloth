import React, {useState} from 'react';
import Input from '../../../common/components/Input';
import styles from './CreateListForm.module.scss';

const CreateListForm = () => {
  const [title, setTitle] = useState('');

  const handleChange = ({currentTarget}) => {
    const {value} = currentTarget;
    setTitle(value);
  };

  const handleSubmit = () => {};

  return (
    <Input
      className={styles.CreateListInput}
      onEnter={handleSubmit}
      placeholder="+ add list"
      onChange={handleChange}
      value={title}
    />
  );
};

export default CreateListForm;
