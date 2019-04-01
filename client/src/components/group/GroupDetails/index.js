import { connect } from "react-redux";
import { 
    getSelectedGroup
} from "../duck/selectors";
import { addUiPortal } from "../../ui/duck/actions";

import React, { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import Button from "../../reuse/Button";
import Typography from "../../reuse/Typography";
import styles from "./GroupDetails.scss";
import { MODAL_GROUP_SETTINGS } from "../../ui/constants";
import CloseIcon from "../../reuse/icons/CloseIcon";
import ArrowDownIcon from "../../reuse/icons/ArrowDownIcon";
import Icon from "../../reuse/Icon";
import GroupDropdown from "../GroupDropdown";
import classNames from "classnames";

const GroupDetails = ({ group }) => {
    const ref = useRef(null);
    const [ isDropdownVisible, setIsDropdownVisible ] = useState(false);
    const [ position, setPosition ] = useState({});
    const { name, members } = group;

    useEffect(() => {
        const rect = ref.current.getBoundingClientRect();
        setPosition({ x: rect.left + 8, y: rect.bottom + 8 });
    }, [])

    const handleClick = event => {
        setIsDropdownVisible(!isDropdownVisible);
    }

    const handleClose = event => {
        setIsDropdownVisible(false);
    }

    return (
        <div onClick={handleClick} ref={ref} className={styles.GroupDetails}>
            <div className={styles.GroupName}>
                <Typography color="secondary" type="subheading">
                    {name}
                </Typography>
            </div>


                <div data-tip data-for="GroupSettingsIcon" className={classNames(
                    styles.ButtonContainer
                )}>

                    <Button theme="icon">
                        <Icon size="md">
                        {isDropdownVisible ?
                            <CSSTransition
                                in={isDropdownVisible}
                                appear
                                timeout={200}
                                classNames={{
                                    enter: styles.Enter,
                                    enterActive: styles.EnterActive,
                                    exit: styles.Exit,
                                    exitActive: styles.ExitActive,
                                }}
                            >
                                    <CloseIcon />
                            </CSSTransition> :
                            <CSSTransition
                                in={isDropdownVisible}
                                appear
                                timeout={200}
                                classNames={{
                                    enter: styles.Enter,
                                    enterActive: styles.EnterActive,
                                    exit: styles.Exit,
                                    exitActive: styles.ExitActive,
                                }}
                            >
                                    <ArrowDownIcon />
                            </CSSTransition>
                        }
                        </Icon>

                    </Button>
                </div>

            {isDropdownVisible && <GroupDropdown onHide={handleClose} position={position} />} 
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    group: getSelectedGroup(state)
});

export default connect(mapStateToProps)(GroupDetails);