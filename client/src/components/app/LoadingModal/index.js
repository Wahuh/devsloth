import { connect } from "react-redux";
import { getIsLoading } from "../duck/selectors";

import React from "react";
import Modal from "../../reuse/Modal";
import Spinner from "../../reuse/Spinner";
import Typography from "../../reuse/Typography";

const LoadingModal = ({ isLoading }) => (
    <Modal>
        <Spinner spin={true} />
        <Typography>Loading your data</Typography>
    </Modal>
);

const mapStateToProps = state => ({
    isLoading: getIsLoading(state)
});

export default connect(mapStateToProps)(LoadingModal);