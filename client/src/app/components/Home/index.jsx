import React from 'react';
import styles from './Home.module.scss';
import Typography from '../../../common/components/Typography';
import Button from '../../../common/components/Button';
import InternalLink from '../../../common/components/InternalLink';

const Home = () => (
  <div className={styles.Home}>
    <header className={styles.Header}>
      <InternalLink className={styles.LoginLink} to="/login">
        Login
      </InternalLink>
    </header>

    <div className={styles.Copy}>
      <Typography
        textAlign="center"
        as="h2"
        color="primary"
        fontWeight={700}
        fontSize={28}
        mb={8}
      >
        All-in-one task management and chat app.
      </Typography>

      <Typography as="h3" color="secondary" fontSize={18}>
        Create or join groups. Invite friends, family or colleagues. Chat.
        Manage tasks.
      </Typography>
    </div>

    <InternalLink className={styles.SignupLink} to="/signup">
      Get Started
    </InternalLink>
  </div>
);

export default Home;
