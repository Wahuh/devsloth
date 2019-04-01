import { connect } from "react-redux";
import React from "react";
import List from "../../reuse/List";
import styles from "./ChannelMemberList.scss";
import { getChannelMembersByAlias } from "../../members/duck/selectors";
import Member from "../../members/Member";
 
const ChannelMemberList = ({ memberIds }) => {
    return memberIds ? <List className={styles.ChannelMemberList}>
        {memberIds.map(id => <Member key={id} _id={id} />)}
    </List> : null;
}

const mapStateToProps = (state, ownProps) => ({
    memberIds: getChannelMembersByAlias(state, ownProps)
});

export default connect(mapStateToProps)(ChannelMemberList);