import { connect } from 'react-redux';
import { Messages } from './Messages';
import { addMessage, updateMessage } from "../../redux/reducers/dialogsReducer";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsReducer.dialogs,
        messages: state.dialogsReducer.messages,
        newMessageText: state.dialogsReducer.newMessageText,
        isAuth: state.authReducer.isAuth
    }
}

export default connect(mapStateToProps, { addMessage, updateMessage })(Messages);
