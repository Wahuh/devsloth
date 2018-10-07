import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import MainPanel from "../../layout/MainPanel";
import SecondaryPanel from "../../layout/SecondaryPanel";
import ChatPanel from "../../features/chat/components/ChatPanel";

class ViewContainer extends Component {
    render() {
        return (
            <Fragment>
                <MainPanel>
                    {this.props.displayMode ? <ChatPanel />: <div>crap</div>}
                </MainPanel>

                <SecondaryPanel>
                    {this.props.displayMode ? <div>hello2</div>: <div>crap2</div>}
                </SecondaryPanel>
            </Fragment>
        );

    }
}

const mapStateToProps = (state) => {
    return { displayMode: state.displayMode };
}

export default connect(mapStateToProps)(ViewContainer);

