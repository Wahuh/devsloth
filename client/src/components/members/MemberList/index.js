import { connect } from "react-redux";
import { showUiModal } from "../../ui/duck/actions";
import { getCurrentChannelMembers } from "../duck/selectors";

import React from "react";
import AddButton from "../../reuse/buttons/AddButton";
import List from "../../reuse/List";
import ListItem from "../../reuse/ListItem";
import Row from "../../reuse/Row";
import Typography from "../../reuse/Typography";
import styles from "./MemberList.scss";

const MemberList = ({ members, onShowModal }) => (
    <List className={styles.MemberList}>
        <ListItem className={styles.MemberHeading}>
            <Row alignItems="center">
                <Typography color="primary" type="heading">
                    Members
                </Typography>

                <AddButton onClick={onShowModal} />
            </Row>
        </ListItem>

        {members && members.map(({ alias, _id }) => 
            <ListItem key={_id} tabIndex className={styles.MemberItem}>
                <Typography overflow type="button" color="primary">
                    {alias}
                </Typography>
            </ListItem>)}
    </List>
);


const mapStateToProps = state => ({
    members: getCurrentChannelMembers(state),
});

export default connect(mapStateToProps, {
    onShowModal: () => showUiModal("GROUP_INVITE")
})(MemberList);