import { connect } from 'react-redux';
import { Messages } from './Messages';
import { addMessage, updateMessage } from "../../redux/reducers/dialogsReducer";
import WithAuthRedirect from "../hoc/WithAuthRedirect";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsReducer.dialogs,
        messages: state.dialogsReducer.messages,
        newMessageText: state.dialogsReducer.newMessageText,
    }
}

export default WithAuthRedirect(connect(mapStateToProps, { addMessage, updateMessage })(Messages));
