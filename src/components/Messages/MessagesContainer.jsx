import { connect } from "react-redux";
import { compose } from "redux";
import Messages from "./Messages";
import { dialogsActions } from "../../redux/reducers/dialogsReducer";
import WithAuthRedirect from "../hoc/WithAuthRedirect";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsReducer.dialogs,
        messages: state.dialogsReducer.messages
    }
}

const { addMessage } = dialogsActions;

export default compose(
    connect(mapStateToProps, { addMessage }),
    WithAuthRedirect
)(Messages);
