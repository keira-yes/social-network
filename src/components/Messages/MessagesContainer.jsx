import React from 'react';
import { connect } from 'react-redux';
import { Messages } from './Messages';
import { addMessageCreator, updateMessageCreator } from "../../redux/reducers/dialogsReducer";

const mapStateToProps = (state) => {
    return {
        dialogsReducer: state.dialogsReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageCreator());
        },
        updateMessage: (text) => {
            dispatch(updateMessageCreator(text));
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
