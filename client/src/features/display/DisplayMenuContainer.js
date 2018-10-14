import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { toggleChat, toggleTasks } from "./duck/actions";
import DisplayOptions from "./components/DisplayOptions";
import DisplayMenu from "./components/DisplayMenu";
import ChatMenu from "../chat/components/ChatMenu";
import TaskMenu from "../tasks/components/TaskMenu";

class DisplayMenuContainer extends Component {
	constructor(props) {
		super(props);
		this.toggleChat = this.toggleChat.bind(this);
		this.toggleTasks = this.toggleTasks.bind(this);
	}

	toggleChat() {
		this.props.dispatch(toggleChat());
	}

	toggleTasks() {
		this.props.dispatch(toggleTasks());
	}

	render() {
		console.log(this.props.displayChat);
		console.log(this.props.displayT);
		return (
			<Fragment>
				<DisplayOptions toggleChat={this.toggleChat} toggleTasks={this.toggleTasks} />
				<DisplayMenu>
					{this.props.displayChat ? (<ChatMenu />) : (<TaskMenu />)}
				</DisplayMenu>
			</Fragment>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {

	}
}

const mapStateToProps = state => ({
	displayChat: state.displayToggle.displayChat,
	displayTasks: state.displayToggle.displayTasks
});

export default connect(mapStateToProps)(DisplayMenuContainer);