import React, {useState} from 'react';
import TextInput from '../../../common/components/TextInput';
import CreateAccountButton from '../CreateAccountButton';
import Typography from '../../../common/components/Typography';
import InternalLink from '../../../common/components/InternalLink';
import styles from './SignUpForm.module.scss';

const SignUpForm = () => {
  const [{email, username, password}, setState] = useState({
    email: '',
    username: '',
    password: '',
  });

  const handleChange = e => {
    const {name, value} = e.currentTarget;
    setState(prevState => ({...prevState, [name]: value}));
  };

  return (
    <form className={styles.SignUpForm}>
      <Typography as="h1" mb={48} color="primary" fontSize={36}>
        Slothy.io
      </Typography>

      <TextInput
        onChange={handleChange}
        value={email}
        name="email"
        type="email"
        label="Email Address"
      />
      <TextInput
        onChange={handleChange}
        value={username}
        name="username"
        label="Username"
      />
      <TextInput
        onChange={handleChange}
        value={password}
        type="password"
        name="password"
        label="Password"
      />

      <CreateAccountButton />
      <span className={styles.LoginLink}>
        <Typography color="tertiary">Already have an account?</Typography>
        <InternalLink to="/login">Log in</InternalLink>
      </span>
    </form>
  );
};

export default SignUpForm;
