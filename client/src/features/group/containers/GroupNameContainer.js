import { connect } from "react-redux";
import GroupName from "../components/GroupName";

const mapStateToProps = state => ({
    name: state.groups.selectedGroup
});

export default connect(mapStateToProps)(GroupName);