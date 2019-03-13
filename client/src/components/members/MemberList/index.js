import { connect } from "react-redux";
import { getGroupMembersByAlias } from "../duck/selectors";

import React from "react";

import List from "../../reuse/List";
import styles from "./MemberList.scss";
import Member from "../Member";

const MemberList = ({ memberIds }) => (
    memberIds ? 
    <List className={styles.MemberList}>
        {memberIds.map(id => <Member key={id} _id={id} />)}
    </List> : null
);

const mapStateToProps = state => ({
    memberIds: getGroupMembersByAlias(state),
});

export default connect(mapStateToProps)(MemberList);