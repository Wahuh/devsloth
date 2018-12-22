import { connect } from "react-redux";
import { getIsFetching } from "../duck/selectors";

import React from "react";
import Column from "../../reuse/Column";
import Spinner from "../../reuse/Spinner";
import Typography from "../../reuse/Typography";
import styles from "./SlackerLoader.scss";

const SlackerLoader = ({ isFetching }) => (
    <Column alignItems="center" className={styles.SlackerLoader}>
        <Typography color="secondary" type="title">Slacker.io</Typography>
        <Typography color="primary" type="body">Task management and chat for <i>slackers</i></Typography>
        <Spinner spin={isFetching} />
    </Column>
);

const mapStateToProps = state => ({
    isFetching: getIsFetching(state)
});

export default connect(mapStateToProps)(SlackerLoader);