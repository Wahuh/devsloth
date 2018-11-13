import { connect } from "react-redux";

import React from "react";
import Column from "../../reuse/Column";
import Spinner from "../../reuse/Spinner";
import Typography from "../../reuse/Typography";
import styles from "./SlackerLoader.scss";

const SlackerLoader = ({ isLoading }) => (
    <Column alignItems="center" className={styles.SlackerLoader}>
        <Typography type="title">Slacker.io</Typography>
        <Typography>Task management and chat for <i>slackers</i></Typography>
        <Spinner spin={isLoading} />
    </Column>
);

const mapStateToProps = state => ({
    isLoading: state.ui.showRegistrationLoading
});

export default connect(mapStateToProps)(SlackerLoader);