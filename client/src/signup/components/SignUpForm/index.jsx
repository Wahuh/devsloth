import React, {useState} from 'react';
import {string, object, reach} from 'yup';
import TextInput from '../../../common/components/TextInput';
import CreateAccountButton from '../CreateAccountButton';
import Typography from '../../../common/components/Typography';
import InternalLink from '../../../common/components/InternalLink';
import styles from './SignUpForm.module.scss';

const schema = object().shape({
  email: string()
    .email('Please enter a valid email')
    .required('Email address is required'),
  username: string()
    .max(30)
    .required('Hey, you need a cool name for yourself!'),
  password: string()
    .min(5, 'must be greater than 5 chars')
    .max(50)
    .required('Password is required'),
});

const SignUpForm = () => {
  const [{user, error, isFormValid}, setState] = useState({
    user: {
      email: '',
      username: '',
      password: '',
    },
    error: {
      email: '',
      username: '',
      password: '',
    },
    isFormValid: false,
  });

  const handleChange = async e => {
    const {name, value} = e.currentTarget;
    try {
      await reach(schema, name).validate(value);
      schema
        .validate({...user, [name]: value})
        .then(() => {
          setState({
            user: {...user, [name]: value},
            error: {...error, [name]: ''},
            isFormValid: true,
          });
        })
        .catch(() => {
          setState({
            user: {...user, [name]: value},
            error: {...error, [name]: ''},
            isFormValid: false,
          });
        });
    } catch (err) {
      setState({
        user: {...user, [name]: value},
        error: {...error, [name]: err.message},
        isFormValid: false,
      });
    }
  };
  return (
    <form className={styles.SignUpForm}>
      <Typography as="h1" mb={48} color="primary" fontSize={36}>
        Slothy.io
      </Typography>

      <TextInput
        onChange={handleChange}
        value={user.email}
        error={error.email}
        name="email"
        type="email"
        label="Email Address"
      />
      <TextInput
        onChange={handleChange}
        value={user.username}
        error={error.username}
        name="username"
        label="Username"
      />
      <TextInput
        onChange={handleChange}
        value={user.password}
        error={error.password}
        type="password"
        name="password"
        label="Password"
      />

      <CreateAccountButton isFormValid={isFormValid} />
      <span className={styles.LoginLink}>
        <Typography color="tertiary">Already have an account?</Typography>
        <InternalLink to="/login">Log in</InternalLink>
      </span>
    </form>
  );
};

export default SignUpForm;
