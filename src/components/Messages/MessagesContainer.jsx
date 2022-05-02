import { connect } from 'react-redux';
import { Messages } from './Messages';
import { addMessageCreator, updateMessageCreator } from "../../redux/reducers/dialogsReducer";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsReducer.dialogs,
        messages: state.dialogsReducer.messages,
        newMessageText:state.dialogsReducer.newMessageText
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

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
