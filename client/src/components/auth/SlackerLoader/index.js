import React from "react";
import Typography from "../../reuse/Typography";
import styles from "./SlackerLoader.scss";

const SlackerLoader = () => (
    <section className={styles.SlackerLoader}>
        <Typography margin="lg" color="secondary" type="title">Slacker.io</Typography>
        <Typography margin="sm" color="primary" type="body">Task management and chat for <i>slackers</i></Typography>
    </section>
);

export default SlackerLoader;